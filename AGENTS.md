# AGENTS.md — Walehub Wiki

> Wiki / knowledge base untuk Discord server **Walehub** (`Wale` = rumah - Minahasa, `Hub` = pusat kumpul).

## Stack

- **VitePress (Vue + Vite) + Markdown** — SSG utama, pola wiki direktori link
- **Local Search (MiniSearch built-in)** — `search: { provider: 'local' }`, tanpa Algolia
- **UnoCSS** (opsional awal) — utility CSS
- **Hosting: Cloudflare Pages** — output `docs/.vitepress/dist`

## Struktur rencana

```
walehub-wiki/
  docs/
    .vitepress/
      config.mts    # nav, sidebar, search, theme
      theme/        # custom theme (dark/amoled belakangan)
    index.md        # landing
    beginners-guide.md
    gaming.md
    tech.md
    ...
  AGENTS.md
```

## Perintah

```bash
pnpm add -D vitepress vue
pnpm vitepress init docs
pnpm vitepress dev docs
pnpm vitepress build docs
```

Cloudflare Pages:
- Build: `pnpm vitepress build docs`
- Output: `docs/.vitepress/dist`

## Konvensi

1. Semua konten = Markdown di `docs/`, bahasa Indonesia santai.
2. Jangan tambah backend / DB / auth — statis saja.
3. Search lokal dulu, jangan tambah layanan eksternal tanpa diskusi.
4. Theme custom (AMOLED, PWA, RSS) = fase 2, bukan MVP.
5. EditLink arahkan ke repo ini: `edit/main/docs/:path`.

## MVP

- [ ] `config.mts` + nav/sidebar wiki direktori
- [ ] `index.md` hero + feature grid
- [ ] 3-5 halaman isi + search jalan
- [ ] Deploy Cloudflare Pages
