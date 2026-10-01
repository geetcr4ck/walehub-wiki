# Keamanan

Kumpulan tool keamanan pilihan member: antivirus, scanner file, cek situs, plus panduan Linux dan macOS.

## Antivirus

> Catatan: biarkan real-time protection Windows Defender menyala, pilih Allow on device buat deteksi bajakan seperti patch, atau exclude per file bila false positive.

- [Malwarebytes](https://www.malwarebytes.com/) - antivirus utama yang ampuh buat scan dan bersih-bersih malware.
- [AdwCleaner](https://www.malwarebytes.com/adwcleaner/) - pembersih adware gratis dari Malwarebytes yang jalan cepat.
- [Triage](https://tria.ge/) - sandbox online buat bedah file mencurigakan, alternatifnya ada [ANY.RUN](https://any.run/) dan [Cuckoo](https://cuckoo.cert.ee/).
- [Multireddit keamanan](https://www.reddit.com/user/goretsky/m/security/) - kumpulan komunitas Reddit soal antivirus dan keamanan.
- [BleepingComputer](https://www.bleepingcomputer.com/forums/f/22/virus-trojan-spyware-and-malware-removal-help/) - forum bantuan hapus malware, alternatifnya ada [forum Malwarebytes](https://forums.malwarebytes.com/forum/7-windows-malware-removal-help-support/) dan [Sysnative](https://www.sysnative.com/forums/forums/security-arena.66/).
- [rifteyy](https://rifteyy.org/) - panduan dan blog hapus malware yang gampang diikuti.
- [Sandboxie Plus](https://sandboxie-plus.com/) ([Guide](https://clarasguide.valeena.workers.dev/Guides/sandboxie-guide/)) - jalanin app mencurigakan di sandbox biar sistem utama aman.
- [Windows Sandbox](https://learn.microsoft.com/en-us/windows/security/application-security/application-isolation/windows-sandbox/windows-sandbox-overview) - sandbox VM bawaan Windows yang bersih tiap dibuka.
- [Dangerzone](https://dangerzone.rocks/) ([GitHub](https://github.com/freedomofpress/dangerzone)) - ubah PDF berbahaya jadi file aman via sandbox.
- [Ransomware.live](https://www.ransomware.live/) - monitor ransomware live buat pantau serangan yang jalan.
- [No More Ransom](https://www.nomoreransom.org/en/decryption-tools.html) - tool dekripsi ransomware gratis dari proyek gabungan.
- [ID Ransomware](https://id-ransomware.malwarehunterteam.com/) - identifikasi varian ransomware dari file sampel.
- [ConfigureDefender](https://github.com/AndyFul/ConfigureDefender) - atur setting Windows Defender sampai maksimal via tool open source.

### File scanner

- [The Second Opinion](https://jijirae.github.io/thesecondopinion/index.html) ([GitHub](https://github.com/jijirae/thesecondopinion/)) - direktori scanner malware portable plus tool hapus yang rapi.
- [VirusTotal](https://www.virustotal.com/) ([Panduan hasil](https://clarasguide.valeena.workers.dev/Guides/vtguide/)) - scan file online dengan puluhan engine, alternatifnya ada [Hybrid Analysis](https://hybrid-analysis.com/).
- [VirusTotal Tools](https://github.com/VirusTotal/vt-cli) - perkakas VirusTotal: CLI, [uploader](https://github.com/SamuelTulach/VirusTotalUploader), dan [versi lite](https://www.virustotal.com/old-browsers/) buat browser lawas.
- [Jotti](https://virusscan.jotti.org/en) - scan file online yang simpel tanpa signup.
- [Filescan.io](https://www.filescan.io/) ([GitHub](https://github.com/filescanio)) - scan file online dengan analisis mendalam, alternatifnya ada [MetaDefender Cloud](https://metadefender.com/).
- [Farbar](https://www.bleepingcomputer.com/download/farbar-recovery-scan-tool/) ([Guide](https://www.bleepingcomputer.com/forums/t/781976/)) - scan file lokal buat diagnosis malware, ikuti guidenya biar log dibaca benar.
- [Microsoft Safety Scanner](https://learn.microsoft.com/en-us/defender-endpoint/safety-scanner-download) - scanner AV on-demand dari Microsoft buat bersih-bersih darurat.
- [Manalyzer](https://manalyzer.org/) ([GitHub](https://github.com/JusticeRage/Manalyze)) - scan file PE buat bedah struktur executable.
- [YARA](https://virustotal.github.io/yara/) ([GitHub](https://github.com/virustotal/yara)) - tool identifikasi malware berbasis rules yang jadi standar industri.
- [Winitor](https://www.winitor.com/) - nilai EXE mencurigakan atau aman langsung dari web.
- [pyWhat](https://github.com/bee-san/pyWhat) - identifikasi potongan teks, hash, atau file misterius via CLI.
- [Grype](https://github.com/anchore/grype) - scan kerentanan container image yang open source.

### Cek legitimasi situs

- [URLVoid](https://www.urlvoid.com/) - cek reputasi situs dengan 35 engine blocklist sekaligus.
- [urlscan](https://urlscan.io/) - laporan detail situs plus API buat analisis mendalam.
- [Trend Micro Site Safety](https://global.sitesafety.trendmicro.com/) - rating keamanan dasar plus tag konten situs.
- [ScamAdviser](https://www.scamadviser.com/) - skor kepercayaan situs biar ketahuan scam atau bukan.
- [IsLegitSite](https://www.islegitsite.com/) - cek situs dengan 9 engine blocklist yang cepat.
- [Zulu Zscaler](https://zulu.zscaler.com/) - analisis URL dan reputasi domain dari Zscaler.
- [Talos](https://talosintelligence.com/) - rating reputasi plus tag konten dan flag blocklist dari Cisco.

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

## OSINT

- [CTI Handbook](https://www.shenouda.nl/cti-handbook/) - panduan gratis soal OSINT dan threat intel dari dasar sampai cari kerja di bidangnya.
