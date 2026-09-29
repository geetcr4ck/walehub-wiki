#!/usr/bin/env node
/**
 * notify-links.cjs — hybrid link tracker (push + hourly recap), Node stdlib only.
 *
 * - OLD/NEW SHA:
 *   push     → github.event.before / .after via $GITHUB_EVENT_PATH
 *   schedule → `gh variable get LAST_SHA`, fallback HEAD~1
 * - Diff: git diff -U0 OLD NEW -- 'docs/*.md' ':(exclude)docs/.vitepress/**'
 * - Baris tambah (`+` bukan `+++`) → link baru; baris hapus (`-` bukan `---`)
 *   → link dihapus. Keduanya pakai regex md + bare URL yang sama, dedupe,
 *   skip internal `/...`, track file dari `+++ b/` / `--- a/`.
 *   Silent (tanpa spam) jika masing-masing 0.
 * - Embed tambah: color 0x3179EE. Embed hapus (terpisah): color merah 0xED4245,
 *   timestamp + footer sama seperti embed tambah. Timestamp dari
 *   `git log -1 --format=%cI`, footer short-SHA, retry 429,
 *   update LAST_SHA setelah sukses.
 *
 * Env: GH_TOKEN (untuk `gh variable`), DISCORD_WEBHOOK_URL, GITHUB_* (CI),
 *   TEST_MODE=true (dari workflow_dispatch input test_mode) → kirim 1 embed
 *   dummy tanpa diff, exit 0 tanpa update LAST_SHA.
 */

const { execFileSync } = require('node:child_process');
const fs = require('node:fs');

const COLOR = 0x3179EE;
const WIKI_BUTTON = [
  {
    type: 1,
    components: [
      {
        type: 2,
        style: 5,
        label: 'Buka Walehub Wiki',
        url: 'https://walehub-wiki.pages.dev/',
      },
    ],
  },
];
const DELETE_COLOR = 0xED4245;
const MAX_LINKS_SHOWN = 20;
const MD_RE = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
const BARE_RE = /(?<!\()https?:\/\/[^\s)>\]"']+/g;

function sh(cmd, args, opts = {}) {
  try {
    return execFileSync(cmd, args, { encoding: 'utf8', ...opts }).trim();
  } catch (err) {
    const out = err.stdout ? String(err.stdout) : err.message;
    throw new Error(`${cmd} ${args.join(' ')} failed: ${out.trim().slice(0, 300)}`);
  }
}

function readEvent() {
  const p = process.env.GITHUB_EVENT_PATH;
  if (!p) return {};
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {
    return {};
  }
}

function isZeroSha(s) {
  return !s || /^[0]+$/.test(s);
}

function revExists(sha) {
  try {
    execFileSync('git', ['cat-file', '-e', `${sha}^{commit}`], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function resolveHead() {
  return sh('git', ['rev-parse', 'HEAD']);
}

function getLastShaVariable() {
  // File-state via actions/cache (.github/.last-sha); gagal → throw → fallback.
  const p = require('node:path').join(process.cwd(), '.github', '.last-sha');
  return fs.readFileSync(p, 'utf8');
}

function setLastShaVariable(sha) {
  try {
    const p = require('node:path').join(process.cwd(), '.github', '.last-sha');
    fs.mkdirSync(require('node:path').dirname(p), { recursive: true });
    fs.writeFileSync(p, `${sha}\n`);
    console.log(`LAST_SHA updated → ${sha}`);
  } catch (err) {
    console.warn(`warn: gagal update LAST_SHA: ${err.message}`);
  }
}

function determineRange() {
  const eventName = process.env.GITHUB_EVENT_NAME || '';
  const event = readEvent();
  const head = resolveHead();

  if (eventName === 'push') {
    let oldSha = event.before;
    let newSha = event.after || process.env.GITHUB_SHA || head;
    if (isZeroSha(oldSha) || !revExists(oldSha)) {
      // Branch baru / shallow edge: bandingkan 1 commit terakhir.
      oldSha = sh('git', ['rev-parse', 'HEAD~1']);
    }
    if (isZeroSha(newSha) || !revExists(newSha)) newSha = head;
    return { oldSha, newSha, eventName };
  }

  // schedule / workflow_dispatch / local: LAST_SHA → HEAD
  const newSha = process.env.GITHUB_SHA && revExists(process.env.GITHUB_SHA)
    ? process.env.GITHUB_SHA
    : head;
  let oldSha = '';
  try {
    oldSha = getLastShaVariable().trim();
  } catch (err) {
    console.log(`info: LAST_SHA tidak terbaca (${err.message.slice(0, 120)}), fallback HEAD~1`);
  }
  if (isZeroSha(oldSha) || oldSha === newSha || !revExists(oldSha)) {
    oldSha = sh('git', ['rev-parse', 'HEAD~1']);
  }
  return { oldSha, newSha, eventName };
}

function cleanBareUrl(u) {
  // Kupas tanda baca akhir kalimat markdown yang ikut ke-capture.
  return u.replace(/[.,;:!?]+$/, '').replace(/["']$/, '');
}

function collectLinks(body, map, file) {
  // 1 link pertama per baris: markdown dulu, fallback satu bare URL.
  // Match ke-2 dst di baris yang sama diabaikan (mis. ([GitHub](...)) kedua).
  for (const m of body.matchAll(MD_RE)) {
    const label = m[1].trim().slice(0, 120) || m[2];
    const url = m[2].trim();
    if (url.startsWith('/')) return;
    if (!map.has(url)) map.set(url, { label, file });
    return;
  }
  for (const m of body.matchAll(BARE_RE)) {
    const url = cleanBareUrl(m[0]);
    if (!url || url.startsWith('/')) return;
    if (!map.has(url)) map.set(url, { label: url, file });
    return;
  }
}

function parseDiff(diffText) {
  // Mirror: `+` (bukan `+++`) → tambah, `-` (bukan `---`) → hapus.
  const added = new Map(); // url → { label, file }
  const removed = new Map();
  let fileAdd = '';
  let fileDel = '';
  for (const line of diffText.split('\n')) {
    if (line.startsWith('--- a/')) {
      fileDel = line.replace('--- a/', '').trim();
      continue;
    }
    if (line.startsWith('+++ b/')) {
      fileAdd = line.replace('+++ b/', '').trim();
      continue;
    }
    if (line.startsWith('+++') || line.startsWith('---')) continue;
    if (line.startsWith('+')) collectLinks(line.slice(1), added, fileAdd);
    else if (line.startsWith('-')) collectLinks(line.slice(1), removed, fileDel);
  }
  const toList = (map) => [...map.entries()].map(([url, v]) => ({ url, ...v }));
  return { added: toList(added), removed: toList(removed) };
}

function buildPayload(links, { eventName, newSha, timestamp }) {
  const n = links.length;
  const isPush = eventName === 'push';
  const title = isPush ? `<:addlink:1554438378429227140> ${n} link baru di wiki` : `<:addlink:1554438378429227140> ${n} link baru (rekap 1 jam)`;
  const shown = links.slice(0, MAX_LINKS_SHOWN);
  const lines = shown.map((l) => `- [${l.label}](<${l.url}>)`);
  const rest = n - shown.length;
  if (rest > 0) lines.push(`_+${rest} lainnya…_`);
  return {
    embeds: [
      {
        title,
        description: lines.join('\n').slice(0, 4000),
        color: COLOR,
        timestamp,
        footer: { text: `walehub-wiki @ ${newSha.slice(0, 7)}` },
      },
    ],
    components: WIKI_BUTTON,
  };
}

function buildDeletePayload(links, { eventName, newSha, timestamp }) {
  const n = links.length;
  const isPush = eventName === 'push';
  const title = isPush ? `<:deletelink:1554438382505959514> ${n} link dihapus dari wiki` : `<:deletelink:1554438382505959514> ${n} link dihapus (rekap 1 jam)`;
  const shown = links.slice(0, MAX_LINKS_SHOWN);
  const lines = shown.map((l) => `- [${l.label}](<${l.url}>)`);
  const rest = n - shown.length;
  if (rest > 0) lines.push(`_+${rest} lainnya…_`);
  return {
    embeds: [
      {
        title,
        description: lines.join('\n').slice(0, 4000),
        color: DELETE_COLOR,
        timestamp,
        footer: { text: `walehub-wiki @ ${newSha.slice(0, 7)}` },
      },
    ],
    components: WIKI_BUTTON,
  };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function postWebhook(url, payload, maxRetries = 4) {
  // Webhook bikinan manual (non-app-owned) butuh ?with_components=true
  // biar action row button tidak di-drop diam-diam (204 tapi no button).
  if (!url.includes('with_components=')) {
    url += url.includes('?') ? '&with_components=true' : '?with_components=true';
  }
  let attempt = 0;
  // biome-ignore lint: loop retry 429
  while (true) {
    attempt += 1;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.status === 429 && attempt <= maxRetries) {
      const ra = res.headers.get('retry-after');
      let waitMs = ra ? Number(ra) * 1000 : 2000 * attempt;
      try {
        const j = await res.clone().json();
        if (j && j.retry_after) waitMs = Number(j.retry_after) * 1000;
      } catch { /* abaikan */ }
      console.log(`429 rate-limited, retry ${attempt}/${maxRetries} after ${waitMs}ms`);
      await sleep(waitMs);
      continue;
    }
    const text = await res.text().catch(() => '');
    return { status: res.status, body: text.slice(0, 500) };
  }
}

function isTestMode() {
  const v = process.env.TEST_MODE ?? process.env.INPUT_TEST_MODE ?? '';
  return String(v).toLowerCase() === 'true';
}

async function runTestMode() {
  console.log('test_mode=true: kirim embed dummy tanpa diff');
  const webhook = process.env.DISCORD_WEBHOOK_URL || '';
  const payload = {
    embeds: [
      {
        title: '<:addlink:1554438378429227140> Test mode',
        description: '- [Test Dummy](<https://example.com/test-mode-dummy>)',
        color: COLOR,
        timestamp: new Date().toISOString(),
        footer: { text: 'walehub-wiki • test' },
      },
      {
        title: '<:deletelink:1554438382505959514> 1 link dihapus (test)',
        description: '- [Test Dummy Dihapus](<https://example.com/test-mode-dummy>)',
        color: DELETE_COLOR,
        timestamp: new Date().toISOString(),
        footer: { text: 'walehub-wiki • test' },
      },
    ],
    components: WIKI_BUTTON,
  };
  if (!webhook) {
    console.log('warn: DISCORD_WEBHOOK_URL kosong, webhook dilewati');
    console.log(JSON.stringify(payload, null, 2));
    return;
  }
  const { status, body } = await postWebhook(webhook, payload);
  console.log(`discord status: ${status} ${body}`);
  if (status < 200 || status >= 300) {
    process.exitCode = 1;
  }
  // Sengaja tanpa update LAST_SHA.
}

async function main() {
  if (isTestMode()) {
    await runTestMode();
    return;
  }
  const { oldSha, newSha, eventName } = determineRange();
  console.log(`range: ${oldSha.slice(0, 7)}..${newSha.slice(0, 7)} (event=${eventName || 'local'})`);

  let diffText = '';
  try {
    diffText = execFileSync(
      'git',
      ['diff', '-U0', oldSha, newSha, '--', 'docs/*.md', ':(exclude)docs/.vitepress/**'],
      { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 },
    );
  } catch (err) {
    console.error(`git diff gagal: ${err.message}`);
    process.exitCode = 1;
    return;
  }

  const { added, removed } = parseDiff(diffText);
  console.log(`ditemukan ${added.length} link baru, ${removed.length} link dihapus`);

  if (added.length === 0 && removed.length === 0) {
    console.log('silent: 0 link, webhook dilewati');
    setLastShaVariable(newSha);
    return;
  }

  let timestamp;
  try {
    timestamp = sh('git', ['log', '-1', '--format=%cI', newSha]);
  } catch {
    timestamp = new Date().toISOString();
  }
  if (!timestamp) timestamp = new Date().toISOString();

  const webhook = process.env.DISCORD_WEBHOOK_URL || '';
  const embeds = [];
  if (added.length > 0) {
    embeds.push(...buildPayload(added, { eventName, newSha, timestamp }).embeds);
  } else {
    console.log('silent: 0 link baru, embed tambah dilewati');
  }
  if (removed.length > 0) {
    embeds.push(...buildDeletePayload(removed, { eventName, newSha, timestamp }).embeds);
  } else {
    console.log('silent: 0 link dihapus, embed hapus dilewati');
  }
  if (!webhook) {
    console.log('warn: DISCORD_WEBHOOK_URL kosong, webhook dilewati');
    console.log(JSON.stringify({ embeds, components: WIKI_BUTTON }, null, 2));
    return;
  }

  const { status, body } = await postWebhook(webhook, { embeds, components: WIKI_BUTTON });
  console.log(`discord status: ${status} ${body}`);
  if (status < 200 || status >= 300) {
    process.exitCode = 1;
    return;
  }
  setLastShaVariable(newSha);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
