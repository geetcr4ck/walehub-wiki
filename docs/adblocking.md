# Adblocking

Kumpulan tool blokir iklan pilihan member: adblocker browser, filter, dan DNS adblocking.

## Adblocker

> Catatan: jangan jalanin dua general adblocker sekaligus biar tidak break, versi full uBlock Origin jauh lebih ampuh dari versi lite, dan gabungin adblocker dengan SponsorBlock itu aman.

- [uBlock Origin](https://github.com/gorhill/uBlock) - adblocker utama yang paling ampuh, alternatifnya ada [AdGuard](https://github.com/AdguardTeam/AdguardBrowserExtension) dan [uBO Lite](https://github.com/uBlockOrigin/uBOL-home) buat browser MV3.
- [Lapor filter rusak](https://github.com/uBlockOrigin/uAssets/issues) - laporkan iklan lolos ke [uAssets](https://github.com/uBlockOrigin/uAssets/issues), [Hosts](https://github.com/uBlockOrigin/uAssets/discussions/27472), [AdGuard](https://reports.adguard.com/new_issue.html), atau [EasyList](https://github.com/easylist/easylist/issues) biar cepat dibetulkan.
- [SponsorBlock](https://sponsor.ajay.app/) ([GitHub](https://github.com/ajayyy/SponsorBlock)) - skip otomatis segmen sponsor di YouTube berbasis crowdsource.
- [SponsorBlock Tools](https://github.com/mchangrh/sb.js) - varian SponsorBlock selain ekstensi utama, ada [script](https://greasyfork.org/en/scripts/453320) dan [database](https://sb.ltn.fi/) buat platform lain.
- [Disblock Origin](https://codeberg.org/AllPurposeMat/Disblock-Origin) - sembunyikan iklan Nitro dan Boost di Discord, alternatifnya ada [Discord AdBlock](https://codeberg.org/ridge/Discord-AdBlock).
- [Popup Blocker strict](https://github.com/schomery/popup-blocker) - blokir popup bandel, alternatifnya ada [PopUpOFF](https://popupoff.org/) dan [userscript AdGuard](https://github.com/AdguardTeam/PopupBlocker).
- [BehindTheOverlay](https://github.com/NicolaeNMV/BehindTheOverlay) - tutup overlay penghalang situs dalam sekali klik.
- [BilibiliSponsorBlock](https://www.bsbsb.top/) ([GitHub](https://github.com/hanydd/BilibiliSponsorBlock)) - skip otomatis segmen sponsor di Bilibili ala SponsorBlock.

### Filter adblock

> Catatan: cek dulu filter tambahan bawaan uBO di settings sebelum pasang filter pihak ketiga.

- [FilterLists](https://filterlists.com/) - direktori filter dan host list buat cari daftar blokir sesuai kebutuhan.
- [LegitimateURLShortener](https://raw.githubusercontent.com/DandelionSprout/adfilt/refs/heads/master/LegitimateURLShortener.txt) - rules bersih-bersih query parameter URL, enak dipasang bareng proteksi tracking URL AdGuard.
- [HaGeZi](https://github.com/hagezi/dns-blocklists) - koleksi blocklist yang rapi, buat filter browser pakai edisi Mini biar ringan.
- [hBlock](https://hblock.molinero.dev/) ([GitHub](https://github.com/hectorm/hblock)) - koleksi blocklist ringan yang gampang dipasang.
- [Filter situs berbahaya](https://github.com/fmhy/FMHYFilterlist) - filter situs tidak aman buat lapis proteksi tambahan.
- [AI uBlock Blacklist](https://github.com/alvi-se/ai-ublock-blacklist) - blokir situs hasil generate AI yang spammy.

## DNS adblocking

> Catatan: buat blokir iklan browser cukup uBlock Origin saja, filter tambahan yang tumpuk bisa konflik atau memicu anti-adblock.

- [DNS Providers](https://adguard-dns.io/kb/general/dns-providers/) - indeks provider DNS buat bandingin fitur dan privasi.
- [Pi-Hole](https://pi-hole.net/) ([GitHub](https://github.com/pi-hole)) - DNS adblocking self-hosted buat satu jaringan rumah.
- [Pi-Hole Tools](https://firebog.net/) - koleksi filter Pi-Hole, plus ada [tray app](https://github.com/PinchToDebug/Pihole-Tray/) dan [server Android](https://github.com/DesktopECHO/Pi-hole-for-Android/) yang butuh root.
- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) ([GitHub](https://github.com/AdguardTeam/AdGuardHome)) - DNS adblocking self-hosted yang settingnya gampang via web.
- [DNS Speed Test](https://dnsspeedtest.online/) - tes kecepatan server DNS, alternatifnya ada [DNSPerf](https://dnsperf.com/dns-speed-benchmark/).
- [YogaDNS](https://yogadns.com/) - client DNS custom buat Windows yang simpel.
- [NextDNS](https://nextdns.io) ([Guide](https://github.com/yokoffing/NextDNS-Config)) - layanan DNS adblocking yang bisa dikustom per profil, ikuti guidenya biar setup maksimal.
- [LibreDNS](https://libredns.gr/) - layanan DNS adblocking gratis yang fokus privasi.
- [Tiarap](https://doh.tiar.app/) - layanan DNS adblocking ringan.
- [Rethink DNS](https://rethinkdns.com/configure) - layanan DNS adblocking yang transparan soal konfigurasi.
- [DNSWarden](https://dnswarden.com/) ([GitHub](https://github.com/bhanupratapys/dnswarden)) - layanan DNS adblocking yang cepat.
- [Blocky](https://0xerr0r.github.io/blocky/latest/) ([GitHub](https://github.com/0xERR0R/blocky)) - DNS adblocking self-hosted yang ringan dan open source.
- [AdGuard DNS](https://adguard-dns.io/) - layanan DNS adblocking customizable dari AdGuard.
- [Control D](https://controld.com/free-dns) - layanan DNS adblocking customizable yang gratis.
- [NxFilter](https://nxfilter.org/) - DNS adblocking self-hosted yang bisa dikustom buat kantor atau rumah.
- [TBlock](https://tblock.me/) ([Source Code](https://codeberg.org/tblock/tblock)) - client DNS adblocking yang open source.
- [Diversion](https://diversion.ch/) - manager adblock buat router Asuswrt-Merlin.
- [Phishing Army](https://phishing.army/) - blocklist DNS khusus situs phishing.
- [Technitium](https://technitium.com/dns) ([GitHub](https://github.com/TechnitiumSoftware/DnsServer)) - server DNS self-hosted yang powerful dan open source.

### Filter DNS

- [HaGeZi Full](https://github.com/hagezi/dns-blocklists) - blocklist multi-sumber, buat DNS pakai edisi Full biar coverage maksimal.
- [OISD](https://oisd.nl/) ([GitHub](https://github.com/sjhgvr/oisd)) - blocklist multi-sumber yang terkenal minim false positive.
- [StevenBlack Hosts](https://github.com/StevenBlack/hosts) - file hosts gabungan yang legendaris buat blokir iklan dan malware.
- [Spamhaus](https://www.spamhaus.org/blocklists/) - blocklist spam dan domain jahat yang reputasinya solid.
- [black-mirror](https://github.com/T145/black-mirror) - blocklist domain berbahaya yang update rutin.
- [Scam Blocklist](https://github.com/durablenapkin/scamblocklist) - blocklist khusus situs scam.
- [neodevhost](https://github.com/neodevpro/neodevhost) - blocklist host berbahaya yang ringan.
- [1Hosts](https://o0.pages.dev/) ([GitHub](https://github.com/badmojr/1Hosts)) - blocklist yang proteksinya agresif, cocok buat yang mau bersih total.
