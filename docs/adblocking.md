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

## Keamanan Linux

- [Arch Security Wiki](https://wiki.archlinux.org/title/Security) - panduan keamanan Linux yang paling lengkap, alternatifnya ada [Linux Hardening](https://vez.mrsk.me/linux-hardening) dan [How to Secure a Linux Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server).
- [CryptSetup](https://gitlab.com/cryptsetup/cryptsetup) - enkripsi disk standar Linux, alternatifnya ada [gocryptfs](https://nuetzlich.net/gocryptfs) dan [Tomb](https://dyne.org/software/tomb/) buat enkripsi file.
- [Securely Wipe Disk](https://wiki.archlinux.org/title/Securely_wipe_disk) - panduan hapus disk Linux sampai bersih, termasuk [clearing cell SSD](https://wiki.archlinux.org/title/Solid_state_drive/Memory_cell_clearing/).
- [Lynis](https://github.com/CISOfy/lynis) - tool audit keamanan Linux yang open source buat cek hardening sistem.
- [Mistborn](https://gitlab.com/cyber5k/mistborn) - kelola app keamanan cloud dari satu tempat.
- [OpenSnitch](https://github.com/evilsocket/opensnitch) - firewall Linux yang open source buat atur koneksi per aplikasi.
- [Tracee](https://aquasecurity.github.io/tracee/latest) - tool runtime security dan forensik buat pantau kejadian sistem.
- [vnStat](https://github.com/vergoh/vnstat) - monitor trafik jaringan yang ringan dan open source.
- [Howdy](https://github.com/boltgolt/howdy) - autentikasi wajah buat Linux ala Windows Hello.
- [USBGuard](https://github.com/USBGuard/usbguard) - atur izin perangkat USB biar colok sembarangan ditolak.
- [ShuffleStacks](https://shufflecake.net/) - bikin hidden volume tersembunyi di dalam disk.
- [Collision](https://flathub.org/apps/dev.geopjr.Collision) - cek hash file dengan cepat buat verifikasi unduhan.
- [WhoAmI](https://owerdogan.github.io/whoami-project) ([GitHub](https://github.com/owerdogan/whoami-project)) - tool privasi dan anonimitas all-in-one.
- [Yubikey Full Disk Encryption](https://github.com/agherzan/yubikey-full-disk-encryption) - buka partisi LUKS pakai YubiKey biar tidak perlu ketik passphrase.
- [Firejail](https://firejail.wordpress.com/) - sandboxing app Linux yang ringan, alternatifnya ada [Bubblewrap](https://github.com/containers/bubblewrap).
- [Googerteller](https://github.com/berthubert/googerteller) - notifikasi tiap ada app yang kontak ke Google.

## Keamanan macOS

- [Malwarebytes](https://www.malwarebytes.com/mac-download) - antivirus buat Mac, alternatifnya ada [BlockBlock](https://objective-see.org/products/blockblock.html) dan [KnockKnock](https://objective-see.org/products/knockknock.html) buat pantau persistence.
- [uBO Lite Safari](https://apps.apple.com/app/ublock-origin-lite/id6745342698) - adblocker Safari yang ringan, alternatifnya ada [AdGuard Mini](https://adguard.com/en/adguard-safari/overview.html) dan [wBlock](https://apps.apple.com/app/wblock/id6746388723).
- [Gas Mask](https://github.com/2ndalpha/gasmask) - blokir iklan via host file yang open source.
- [macOS Privacy Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide) - panduan privasi dan keamanan Mac yang paling lengkap.
- [ClashMac](https://github.com/666OS/ClashMac) - proxy client buat Mac yang open source.
- [DNS Party](https://encrypted-dns.party/) - profil DNS terenkripsi siap pasang buat Mac dan iOS.
- [LuLu](https://objective-see.org/products/lulu.html) - firewall Mac gratis yang open source.
- [RansomWhere?](https://objective-see.org/products/ransomwhere.html) - blokir ransomware di Mac secara generik.
- [OverSight](https://objective-see.org/products/oversight.html) - monitor webcam dan mic biar ketahuan saat ada yang akses diam-diam.
- [SuspiciousPackage](https://www.mothersruin.com/software/SuspiciousPackage/get.html) - bedah file PKG sebelum diinstall biar tidak zonk.
- [Santa](https://github.com/northpolesec/santa) - sistem otorisasi binary buat kunci app apa saja yang boleh jalan.
- [DHS](https://objective-see.org/products/dhs.html) - scanner dylib hijack buat cek injeksi library.
- [GPG Suite](https://gpgtools.org/) - enkripsi dan tanda tangani data serta komunikasi di Mac.
- [What's Your Sign?](https://objective-see.org/products/whatsyoursign.html) - lihat tanda tangan kriptografi file langsung dari Finder.
- [Tracker Zapper](https://rknight.me/apps/tracker-zapper/) - buang elemen tracking dari URL secara otomatis.
- [LinkLiar](https://halo.github.io/LinkLiar/) - spoof MAC address biar tidak gampang dilacak di jaringan.
- [Kextviewr](https://objective-see.org/products/kextviewr.html) - lihat semua kernel module yang terpasang.
- [mac_apt](https://github.com/ydkhatri/mac_apt) - tool parsing artefak forensik buat Mac.
- [Tunnelblick](https://tunnelblick.net/) - tunnel VPN open source, alternatif modernnya ada [Passepartout](https://partout.io/passepartout/).
- [MailTrackerBlocker](https://apparition47.github.io/MailTrackerBlocker/) - client email berbasis privasi yang blokir tracker.
- [Status](https://status.app/) - client chat terenkripsi yang open source.

## Adblock Android

- [Rethink DNS](https://rethinkdns.com/app) - DNS adblocker buat Android yang open source, alternatifnya ada [DNSNet](https://github.com/t895/DNSNet) dan [personalDNSfilter](https://www.zenz-solutions.de/personaldnsfilter-wp/).
- [AdGuard Android](https://adguard.com/en/adguard-android/overview.html) ([GitHub](https://github.com/AdguardTeam/AdguardForAndroid)) - app adblock Android yang powerful, versi browser saja tersedia bila tidak mau install app.
- [uBlock Origin](https://github.com/gorhill/uBlock) - adblocker yang paling ampuh di Android bila dipasang via Firefox.
- [Re-Malwack](https://zg.is-a.dev/re-malwack) ([GitHub](https://github.com/ZG089/Re-Malwack)) - app adblock buat Android yang sudah root.
- [AdAway](https://adaway.org/) ([GitHub](https://github.com/AdAway/AdAway)) - app adblock open source buat Android yang legendaris.
- [bindhosts](https://github.com/bindhosts/bindhosts) - adblock systemless buat Android rooted tanpa ubah partisi sistem.
- [PrivateDNSAndroid](https://github.com/karasevm/PrivateDNSAndroid) - switcher DNS privat biar gampang ganti provider DNS di Android.
