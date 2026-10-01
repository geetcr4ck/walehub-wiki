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

## Privasi & OS

- [Whonix](https://www.whonix.org/), [Qubes](https://www.qubes-os.org/), [Tails](https://tails.net/) ([GitHub](https://github.com/Whonix)) - trio OS fokus privasi buat isolasi, virtualisasi aman, dan sesi amnesik.
- [W10Privacy](https://www.w10privacy.de/english-home/) - tool privasi Windows buat matikan telemetri dan fitur bocor data.
- [Telemetry.md](https://gist.github.com/ave9858/a2153957afb053f7d0e7ffdd6c3dcb89) - daftar setting buat matikan telemetri Win 10 dan 11.
- [Agent DVR](https://www.ispyconnect.com/), [Frigate](https://frigate.video/), [ZoneMinder](https://zoneminder.com/) ([GitHub](https://github.com/blakeblackshear/frigate)) - sistem kamera keamanan self-hosted buat rekam dan pantau CCTV lokal.
- [go2rtc](https://github.com/AlexxIT/go2rtc) - bridge kamera plus stream manager ringan yang jalan self-hosted.
- [Team Elite](https://www.te-home.net/) - koleksi software keamanan buat cek dan bersih sistem.
- [YourDigitalRights](https://yourdigitalrights.org/) - minta organisasi hapus data pribadi lo dengan template siap kirim.
- [Big Ass Data Broker Opt-Out List](https://github.com/yaelwrites/Big-Ass-Data-Broker-Opt-Out-List), [Serus](https://www.serus.ai/), [Data Broker Watch](https://databrokerswatch.org/) - daftar link opt-out broker data biar jejak pribadi berkurang.
- [DataRequests](https://www.datarequests.org/) ([GitHub](https://github.com/datenanfragen)) - generator request GDPR buat minta salinan atau hapus data.
- [Surfer Protocol](https://github.com/Surfer-Org/Protocol) - exporter data user multi-platform yang open source.
- [GnuPG](https://gnupg.org/) ([Installer](https://www.gpg4win.org/)) - enkripsi data dan komunikasi, kelola key praktis dengan gpg-tui di terminal.
- [PrivateBin](https://privatebin.net/) - kirim pesan meledak-sendiri yang terenkripsi, alternatifnya ada PrivNote, OTS, SafeNote, Burn.Link, s.cr, Yopass, Hemmelig, Burn My Note, dan OneTimeSecret.
- [Portable Secret](https://alcazarsec.github.io/portable-secret/) ([GitHub](https://github.com/alcazarsec/portable-secret)) - bikin file HTML mandiri yang dekrip lokal di browser.
- [Forensic Focus](https://www.forensicfocus.com/forums/) - forum diskusi forensik digital buat belajar dan tanya jawab.
- [SurveillanceWatch](https://www.surveillancewatch.io/) - peta koneksi perusahaan surveilans biar tahu siapa di balik siapa.
- [Atlas of Surveillance](https://www.atlasofsurveillance.org/) - peta teknologi surveilans polisi di berbagai daerah.
- [Sparrow Map](https://map.sparrowmap.com/) - peta kendaraan polisi plus jaringan kamera komunitas.
- [DeFlock](https://deflock.org/) ([GitHub](https://github.com/FoggedLens/deflock)) - peta kamera ALPR komunitas, alternatifnya ada ALPR Watch, FlockHopper, Flock map, dan Panopti.
- [EyesOnFlock](https://eyesonflock.com/) - database tracking surveilans Flock yang bisa dijelajah publik.
- [Have I Been Flocked](https://haveibeenflocked.com/) - cek plat nomor lo pernah kena tag Flock atau tidak.
- [ICE Map](https://www.icemap.dev/) - info dan peta aktivitas ICE, alternatifnya ada People Over Papers.
- [If An Agent Knocks](https://docs.google.com/document/d/176Yds1p63Q3iaKilw0luChMzlJhODdiPvF2I4g9eIXo/) - praktik terbaik bila dihubungi agen biar tetap aman secara hukum.

## Panduan privasi

- [Hitchhiker's Guide](https://anonymousplanet.net/) ([GitHub](https://github.com/Anon-Planet/thgtoa)) - panduan anonimitas online yang lengkap dan praktis.
- [OPSEC Bible](https://www.privacydefence.org/opsec/bibleprivacy/opsec/index.html) - panduan anonimitas mendalam yang juga tersedia versi onion.
- [Privacy Guides](https://www.privacyguides.org/) ([Discuss](https://discuss.privacyguides.net/)) - panduan edukasi privasi plus rekomendasi tool tepercaya.
- [The New Oil](https://thenewoil.org/) ([GitHub](https://github.com/tnonate/thenewoil)) - panduan edukasi privasi dengan bahasa santai buat pemula.
- [No Trace](https://www.notrace.how/) - panduan edukasi privasi yang juga tersedia versi onion.
- [Awesome Privacy](https://awesome-privacy.xyz/) ([GitHub](https://github.com/lissy93/awesome-privacy)) - direktori app privasi, alternatifnya ada Awesome Security Hardening dan pluja Awesome Privacy.
- [Consumer Rights Wiki](https://consumerrights.wiki/) ([Extension](https://github.com/FULU-Foundation/CRW-Extension)) - dokumentasi praktik rugikan konsumen dari berbagai perusahaan.
- [Surveillance Self-Defense](https://ssd.eff.org/) - panduan edukasi dari EFF buat lawan surveilans digital.
- [Digital Defense](https://digital-defense.io/) ([GitHub](https://github.com/lissy93/personal-security-checklist)) - checklist privasi pribadi biar setting keamanan rapi.
- [Defensive Computing Checklist](https://defensivecomputingchecklist.com/) - panduan edukasi keamanan dasar yang gampang diikuti.
- [Whonix Wiki](https://www.whonix.org/wiki) - panduan edukasi privasi plus forum diskusi aktif.
- [Kicksecure Wiki](https://www.kicksecure.com/wiki) - panduan edukasi keamanan plus forum diskusi aktif.
- [OPSEC Guide](https://whos-zycher.github.io/opsec-guide/) - panduan edukasi OPSEC yang ringkas dan langsung praktik.
- [PrivSec](https://privsec.dev/) ([GitHub](https://github.com/PrivSec-dev)) - panduan edukasi privasi dengan rekomendasi tool jelas.
- [Hostux](https://hostux.net/en/) ([Source Code](https://git.hostux.net/hostux.net/hostux.network)) - tool privasi buat cek dan perkuat jejak digital.
- [Privacy Settings](https://github.com/StellarSand/privacy-settings) - panduan setting privasi Android dan web yang rapi.
- [Privacy Not Included](https://www.mozillafoundation.org/en/privacynotincluded/) - rating privasi produk dari Mozilla biar belanja lebih sadar.
- [EncryptedList](https://encryptedlist.xyz/) - daftar layanan dan app terenkripsi yang gampang dijelajah.
- [Awesome Vehicle Security](https://github.com/jaredthecoder/awesome-vehicle-security) - resource keamanan kendaraan yang open source.

## Keamanan jaringan

- [Safing Portmaster](https://safing.io/) ([GitHub](https://github.com/safing)) - monitor jaringan plus resolver DNS dan firewall dalam satu app.
- [DNSLeakTest](https://dnsleaktest.com/) - tes kebocoran DNS biar VPN lo ketahuan bocor atau tidak.
- [I2P](https://i2p.net/) - lapisan jaringan privat terenkripsi, client alternatifnya ada i2pd di i2pd.website.
- [Freenet](https://freenet.org/) ([GitHub](https://github.com/freenet/web)) - web P2P terdesentralisasi buat hosting anti sensor.
- [Hyphanet](https://www.hyphanet.org/) ([GitHub](https://github.com/hyphanet)) - web P2P terdesentralisasi buat berbagi file privat.
- [RustNet](https://github.com/domcyrus/rustnet) - monitor jaringan TUI yang ringan dan open source.
- [Simplewall](https://github.com/henrypp/simplewall) - firewall Windows ringan yang open source tanpa ribet.
- [Fort](https://github.com/tnodir/fort) - firewall Windows yang open source dan gampang diatur.
- [OPNsense](https://opnsense.org/) ([GitHub](https://github.com/opnsense)) - firewall open source buat jaga jaringan rumah atau kantor.
- [WFC](https://www.binisoft.org/wfc.php) - firewall Windows simpel buat atur koneksi per app.

## Privasi Android

- [Awesome Android Security](https://github.com/ashishb/android-security-awesome) - resource keamanan Android yang open source dan lengkap.
- [Triage](https://tria.ge/) - scan APK dan URL dengan sandbox, alternatifnya ada Hybrid Analysis.
- [Rethink DNS](https://rethinkdns.com/) ([GitHub](https://github.com/celzero/rethink-app)) - firewall Android no-root, alternatifnya ada ShizuWall, AFWall+ buat root, dan Karma.
- [URLCheck](https://github.com/TrianguloY/URLCheck) - pembersih URL Android, alternatifnya ada Tarnhelm, LinkSheet, dan Untracker.
- [Exodus](https://reports.exodus-privacy.eu.org/en/) - database tracker di app Android biar tahu app mata-mata.
- [Amarok](https://github.com/deltazefiro/Amarok-Hider) - sembunyikan file dan app, alternatifnya ada Aer dan SafeSpace.
- [InviZible](https://invizible.net/en/) ([GitHub](https://github.com/Gedsh/InviZible)) - VPN hybrid Android dengan Tor, DNSCrypt, dan I2P.
- [Intra](https://getintra.org/) - app DNS terenkripsi buat Android yang simpel.
- [PermissionManagerX](https://github.com/mirfatif/PermissionManagerX) - manager izin app Android yang detail dan open source.
- [AppLock](https://github.com/aload0/AppLock) - kunci app open source tanpa root.
- [Orbot](https://orbot.app/en/) - app proxy Tor buat Android biar trafik anonim.
- [DroidFS](https://forge.chapril.org/hardcoresushi/DroidFS) - file manager terenkripsi buat simpan file sensitif.
- [Network Survey](https://github.com/christianrowlands/android-network-survey) - scanner jaringan seluler buat Android yang open source.
- [TrackerControl](https://trackercontrol.org/) ([GitHub](https://github.com/TrackerControl/tracker-control-android)) - monitor dan kontrol tracker, alternatifnya ada Privacy Guard.
- [LibChecker](https://github.com/LibChecker/LibChecker) - lihat library pihak ketiga di dalam app Android.
- [Sapio](https://github.com/jonathanklee/Sapio) - scan app buat ketahuan dependensi Google di dalamnya.
- [NetGuard](https://www.netguard.me/) ([GitHub](https://github.com/M66B/NetGuard)) - blokir internet per app tanpa root.
- [Open SSTP Client](https://github.com/kittoku/Open-SSTP-Client) - client SSTP buat Android yang open source.
- [SimpleLogin](https://github.com/simple-login/Simple-Login-Android) - forward email alias, alternatifnya ada AnonAddy.
- [Keyoxide](https://codeberg.org/Berker/keyoxide-flutter) - verifikasi identitas kriptografi terdesentralisasi di Android.
- [HMA-OSS](https://github.com/frknkrc44/HMA-OSS) - sembunyikan applist tanpa root, alternatifnya ada Hide My Applist buat root.
- [JustUseApp](https://justuseapp.com/) - review langganan app biar tidak kejebak biaya siluman.
