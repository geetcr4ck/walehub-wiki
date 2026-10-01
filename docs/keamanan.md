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

## Privasi web

- [JustDeleteMe](https://justdeleteme.xyz/) ([GitHub](https://github.com/jdm-contrib/jdm)) - cari dan hapus akun lama dengan cepat, alternatifnya ada JustDeleteAccount di justdeleteaccount.com.
- [degoogle](https://www.reddit.com/r/degoogle) - komunitas alternatif app Google buat lepas dari ekosistem Google.
- [Phish Report](https://phish.report/) - lapor situs phishing dengan mudah, alternatifnya ada OpenPhish, Netcraft, isitPhishing, PhishStats, dan PhishTank.
- [ToS;DR](https://tosdr.org/) ([GitHub](https://github.com/tosdr)) - baca ringkasan kebijakan privasi situs biar tahu hak lo.
- [DNS Jumper](https://www.sordum.org/7952/dns-jumper-v2-3/) - switcher DNS Windows yang ringan buat ganti server cepat.
- [OnionHop](https://www.onionhop.de/) ([GitHub](https://github.com/center2055/OnionHop)) - client Tor dan onion routing yang simpel buat anonimitas.
- [tweetXer](https://github.com/lucahammer/tweetXer) - hapus post X.com secara massal biar akun bersih.
- [delete-likes X](https://gist.github.com/aymericbeaumet/d1d6799a1b765c3c8bc0b675b1a1547d) - hapus likes X.com via script biar jejak like hilang.
- [PowerDeleteSuite](https://github.com/j0be/PowerDeleteSuite) - hapus post Reddit otomatis biar riwayat bersih.

## Browser privat

- [Browser Privacy Guides](https://www.privacyguides.org/en/desktop-browsers) - panduan setup browser privat biar setting aman dari awal.
- [Tor Browser](https://www.torproject.org/) ([GitLab](https://gitlab.torproject.org/tpo/applications/tor-browser)) - browser onion-routed yang juga tersedia versi onion buat akses anonim.
- [Mullvad Browser](https://mullvad.net/en/browser) ([GitHub](https://github.com/mullvad)) - fork Tor Browser tanpa jaringan Tor buat privasi harian.
- [arkenfox](https://github.com/arkenfox/user.js) - tweak privasi Firefox, tersedia GUI di arkenfox.github.io buat setting visual.
- [LibreWolf](https://librewolf.net/) - Firefox fokus privasi, ada auto-updater buat Windows biar tetap update.
- [Helium](https://helium.computer/) - browser Chromium privat yang ringan dan cepat.
- [Brave](https://brave.com/) ([GitHub](https://github.com/brave/brave-browser)) - browser Chromium privat dengan adblock bawaan.
- [Phoenix](https://codeberg.org/celenity/Phoenix) ([GitHub](https://github.com/celenityy/Phoenix)) - tweak privasi Firefox yang rajin update dan gampang dipakai.
- [Chromium Hardening Guide](https://rknf404.github.io/chromium-hardening-guide/) ([GitHub](https://github.com/RKNF404/chromium-hardening-guide)) - panduan plus config keamanan Chromium biar browser makin ketat.
- [Encrypted SNI](https://www.cloudflare.com/ssl/encrypted-sni/) - cek browser lo di Cloudflare buat pastikan SNI terenkripsi.
- [Disable JavaScript](https://disable-javascript.org/) - panduan matikan JS, bisa rusak situs jadi perlu whitelist biar tetap jalan.

## Password & 2FA

- [2FA Directory](https://2fa.directory/) ([GitHub](https://github.com/2factorauth/twofactorauth)) - daftar situs yang dukung 2FA biar akun lo aman.
- [Ente Auth](https://ente.com/auth/) ([GitHub](https://github.com/ente-io/ente)) - app 2FA semua platform dengan sinkron terenkripsi.
- [Aegis](https://getaegis.app/) ([GitHub](https://github.com/beemdevelopment/Aegis)) - app 2FA Android yang aman dan open source.
- [Stratum](https://stratumauth.com/) ([GitHub](https://github.com/stratumauth/app)) - app 2FA Android yang simpel dan open source.
- [Password Strength Chart](https://www.reddit.com/r/dataisbeautiful/comments/1uw8fi2/oc_i_updated_our_popular_password_table_for_2026/) - tabel kekuatan password 2026 biar sadar password lemah gampang dibobol.
- [2FAS](https://2fas.com/) ([GitHub](https://github.com/twofas)) - app 2FA Android dan iOS dengan backup terenkripsi.
- [Proton Authenticator](https://proton.me/authenticator) - app 2FA semua platform dari Proton yang simpel.
- [Mauth](https://github.com/X1nto/Mauth) - app 2FA Android yang ringan dan open source.
- [FreeOTPPlus](https://github.com/helloworld1/FreeOTPPlus) - app 2FA Android yang open source dan gampang dipakai.
- [KeePassXC](https://keepassxc.org/) ([Guide](https://keepassxc.org/docs/KeePassXC_GettingStarted)) - pengelola password plus 2FA lokal buat Windows, macOS, dan Linux.
- [AuthMe](https://authme.levminer.com/) ([GitHub](https://github.com/Levminer/authme)) - app 2FA Windows, macOS, dan Linux yang simpel.
- [Yubioath](https://developers.yubico.com/yubioath-flutter/) ([GitHub](https://github.com/Yubico/yubioath-flutter)) - app 2FA Windows dan Android yang dukung YubiKey.
- [OTPClient](https://github.com/paolostivanin/OTPClient) - app 2FA Linux yang ringan dan open source.
- [Sentinel](https://getsentinel.io/) - app 2FA macOS, Android, dan iOS dengan sinkron terenkripsi.
- [OTP Auth](https://apps.apple.com/app/otp-auth/id659877384) - app 2FA iOS yang simpel dan fokus privasi.
- [Tofu](https://www.tofuauth.com/) ([GitHub](https://github.com/iKenndac/Tofu)) - app 2FA iOS yang simpel dan open source.
- [Authenticator](https://authenticator.cc/) ([GitHub](https://github.com/Authenticator-Extension/Authenticator)) - ekstensi browser 2FA buat isi kode cepat.
- [2FAuth](https://docs.2fauth.app/) ([GitHub](https://github.com/Bubka/2FAuth)) - app 2FA web self-hosted buat kelola token sendiri.
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - backend server Bitwarden self-hosted yang ringan buat hosting sendiri.
- [OTP Helper](https://github.com/jd1378/otphelper) - ekstrak token OTP dari migrasi biar gampang pindah app.
- [steamguard-cli](https://github.com/dyc3/steamguard-cli) - generate kode 2FA Steam dari terminal biar login tanpa HP.

## Messenger terenkripsi

> Catatan: walau E2EE nyala, metadata masih bisa terlihat oleh homeserver sendiri dan lawan chat.

- [Eylenburg](https://eylenburg.github.io/im_comparison.htm) - indeks perbandingan messenger aman, alternatifnya ada SecuChart, Messenger-Matrix, dan Secure Messaging Apps.
- [Matrix Clients](https://matrix.org/ecosystem/clients/) - daftar client Matrix plus info server buat mulai chat desentral.
- [SimpleX](https://simplex.chat/) ([GitHub](https://github.com/simplex-chat)) - messenger privat semua platform tanpa identitas server.
- [Signal](https://signal.org/) ([GitHub](https://github.com/signalapp)) - messenger terenkripsi semua platform, perlu nomor HP buat daftar.
- [Molly](https://github.com/mollyim/mollyim-android) - fork Signal Android yang lebih aman dan open source.
- [Briar](https://briarproject.org/) - messenger P2P aman, tersedia juga versi desktop buat multi-device.
- [Wire](https://wire.com/en/download/) ([GitHub](https://github.com/wireapp)) - messenger terenkripsi semua platform, perlu nomor HP buat daftar.
- [Session](https://getsession.org/) ([GitHub](https://github.com/session-foundation)) - messenger anonim semua platform tanpa nomor HP.
- [Keybase](https://keybase.io/) ([GitHub](https://github.com/keybase/client)) - messenger terenkripsi semua platform plus berbagi file.
- [Jami](https://jami.net/) ([GitLab](https://git.jami.net/savoirfairelinux/jami-project)) - messenger P2P semua platform tanpa server pusat.
- [Tox](https://tox.chat/) ([GitHub](https://github.com/TokTok/c-toxcore)) - messenger P2P semua platform, alternatifnya ada qTox yang ringan.
- [Cabal](https://cabal.chat/) ([GitHub](https://github.com/cabal-club)) - chat P2P serverless semua platform tanpa signup.
- [Linphone](https://www.linphone.org/) ([GitLab](https://gitlab.linphone.org/)) - messenger plus VoIP semua platform yang open source.
- [Berty](https://berty.tech/) ([GitHub](https://github.com/berty/berty)) - messenger P2P Android dan iOS tanpa server.
- [Ricochet Refresh](https://www.ricochetrefresh.net/) ([GitHub](https://github.com/blueprint-freespeech)) - messenger anonim Windows, macOS, dan Linux via Tor.
- [Cwtch](https://docs.cwtch.im/) ([GitLab](https://git.openprivacy.ca/)) - messenger anonim Windows, macOS, Linux, dan Android via Tor.
- [Delta Chat](https://delta.chat/) - messenger berbasis email terdesentralisasi buat Windows, macOS, Linux, dan Android.
- [Status](https://status.app/) ([GitHub](https://github.com/status-im)) - messenger terenkripsi Android dan iOS yang desentral.
- [Damus](https://damus.io/) - messenger sosial Android dan iOS, alternatifnya ada MySudo buat nomor alias.
- [Databag](https://github.com/balzack/databag) - messenger self-hosted buat Android, iOS, dan web.
- [ssh-chat](https://github.com/shazow/ssh-chat) - chat via SSH dari terminal, alternatifnya ada Devzat yang mirip.

## Email privat

- [OpenPGP](https://www.openpgp.org/software/) - indeks client email terenkripsi OpenPGP buat semua platform.
- [Proton Mail](https://proton.me/mail) - email terenkripsi gratis 1GB, hapus setelah 1 tahun nonaktif, tersedia juga versi onion.
- [Tuta](https://tuta.com/) ([GitHub](https://github.com/tutao/tutanota)) - email terenkripsi gratis 1GB, hapus setelah 6 bulan nonaktif.
- [Disroot](https://disroot.org/en/services/email) - email terenkripsi gratis 1GB yang simpel dan ramah privasi.
- [DNMX](https://dnmx.cc/) - email berbasis onion yang fokus anonimitas dan minim data.
- [Mailvelope](https://mailvelope.com/) ([GitHub](https://github.com/mailvelope/mailvelope)) - kasih email biasa enkripsi PGP langsung dari browser.
- [Email Privacy Tester](https://www.emailprivacytester.com/) ([GitLab](https://gitlab.com/mikecardwell/ept3)) - tes privasi email lo biar ketahuan bocor atau tidak.
- [SecLists](https://seclists.org/) - arsip mailing list keamanan buat pantau isu dan exploit.
- [Phishing Quiz](https://phishingquiz.withgoogle.com/) - kuis pencegahan phishing email dari Google biar makin waspada.

## Monitor kebocoran data

- [Have I Been Pwned](https://haveibeenpwned.com/) ([GitHub](https://github.com/HaveIBeenPwned)) - monitor email bocor, alternatifnya ada F-Secure buat cek tambahan.
- [HIBP Passwords](https://haveibeenpwned.com/Passwords) - cek password lo pernah bocor atau tidak biar cepat ganti.
- [Mozilla Monitor](https://monitor.mozilla.org/) ([GitHub](https://github.com/mozilla/blurts-server)) - cek kebocoran data, perlu signup buat monitor otomatis.
- [BreachDirectory](https://breachdirectory.org/) - mesin pencari kebocoran data, alternatifnya ada Leak Lookup, LeakPeek, dan Trufflehog.
- [Intelligence X](https://intelx.io/) ([GitHub](https://github.com/IntelligenceX)) - cek password bocor plus arsip data publik.
- [ScatteredSecrets](https://scatteredsecrets.com/) - cek password bocor, perlu signup buat pakai fitur penuh.
- [BreachDetective](https://breachdetective.com/) - cek password bocor, perlu signup biar bisa monitor berkala.

## Anti fingerprint

- [CreepJS](https://abrahamjuliot.github.io/creepjs) - tes tracking dan fingerprint browser, alternatifnya ada webkay, browserrecon, TZP, Cover Your Tracks, DeviceInfo, BrowserScan, dan PersonalData.
- [ClearURLs](https://docs.clearurls.xyz/) ([GitHub](https://github.com/ClearURLs/Addon)) - bersihkan URL dari tracking, alternatifnya ada URLCleaner yang mirip.
- [Webbkoll](https://webbkoll.5july.net/) - info tracking situs, alternatifnya ada Blacklight buat audit cepat.
- [Data Removal Guide](https://inteltechniques.com/workbook) - panduan hapus data online biar jejak pribadi berkurang.
- [GameIndustry](https://gameindustry.eu/en/) - blokir tracker di game desktop dan mobile biar main lebih privat.
- [Cookie-free demo](https://kuber.studio/cookie/) - demonstrasi fingerprint tanpa cookie biar sadar browser gampang dilacak.
- [BrowserLeaks](https://browserleaks.com/) - tes IP bocor, alternatifnya ada Do I leak dan IPLeak.net.
- [JShelter](https://jshelter.org/) - cegah fingerprint via ekstensi, alternatifnya ada Chameleon yang mirip.
- [Locale Switcher](https://chromewebstore.google.com/detail/locale-switcher/kngfjpghaokedippaapkfihdlmmlafcc) ([GitHub](https://github.com/locale-switcher/locale-switcher)) - ganti identifier bahasa biar fingerprint susah ditebak.
- [AnonymousRedirect](https://adguardteam.github.io/AnonymousRedirect/) - anonimkan link biar situs tujuan tidak tahu asal klik.
- [X Direct](https://greasyfork.org/en/scripts/404632) - buang tracking t.co dari X.com biar link bersih.

## Search engine privat

- [Search Engine Party](https://searchengine.party/) ([GitLab](https://gitlab.com/nitrohorse/search-engines-compare)) - perbandingan search engine privasi biar gampang pilih.
- [Brave Search](https://search.brave.com/) - search independen yang dukung DDG bangs, tersedia juga versi onion.
- [DuckDuckGo](https://start.duckduckgo.com/) - metasearch berbasis Bing, ada versi lite, HTML, no-AI, dan bangs.
- [Startpage](https://www.startpage.com/) - search berbasis Google dengan privasi lebih ketat.
- [4get](https://4get.ca/) - metasearch ringan, ada daftar instances buat pilih server sendiri.
- [Degoog](https://github.com/degoog-org/degoog) - metasearch open source yang simpel dan cepat.
- [DuckDuckBang](https://mosermichael.github.io/duckduckbang/html/main.html) ([GitHub](https://github.com/MoserMichael/duckduckbang)) - meta search !bang DuckDuckGo yang bisa dipakai offline.
- [LibreY](https://github.com/Ahwxorg/librey) - metasearch open source yang ringan buat self-host.
- [Nilch](https://nilch.org/) - metasearch bebas AI yang simpel dan cepat.
- [search!](https://search.tiago.zip/) ([GitHub](https://github.com/tiagozip/metasearch)) - metasearch bebas AI yang ringan dan gampang dipakai.
- [Mojeek](https://www.mojeek.com/) - search independen dengan indeks sendiri tanpa tracking.
- [YaCy](https://yacy.net/) ([GitHub](https://github.com/yacy/yacy_search_server)) - search P2P terdesentralisasi yang bisa di-host sendiri.

## VPN

> Catatan: VPN berbayar umumnya lebih baik buat privasi dan speed, VPN gratis cukup buat buka blokir situs, dan bind VPN ke torrent client biar tidak kena surat ISP.

- [Techlore Chart](https://vpn.techlore.tech/) - chart perbandingan VPN yang rapi.
- [VPN Relationships](https://kumu.io/Windscribe/vpn-relationships) - peta relasi perusahaan VPN, alternatifnya ada peta Windscribe yang mirip.
- [Cloudflare One](https://one.one.one.one/) - gratis unlimited.
- [Proton VPN](https://protonvpn.com) ([Wireguard](https://protonvpn.com/support/wireguard-configurations)) - gratis dan berbayar unlimited, paket gratis tidak bisa torrent.
- [Windscribe](https://windscribe.com) ([GitHub](https://github.com/windscribe)) - gratis dan berbayar 10GB bulanan, paket gratis tidak bisa torrent.
- [AirVPN](https://airvpn.org/) ([GitHub](https://github.com/AirVPN)) - VPN berbayar, tersedia versi onion.
- [Mullvad](https://mullvad.net/) ([GitHub](https://github.com/mullvad)) - VPN berbayar no-log tanpa port forwarding.
- [IVPN](https://www.ivpn.net/) ([GitHub](https://github.com/ivpn)) - VPN berbayar no-log tanpa port forwarding.
- [Firefox VPN](https://support.mozilla.org/en-US/kb/built-in-vpn) - VPN bawaan Firefox gratis 50GB bulanan.
- [Nym](https://nym.com/) ([GitHub](https://github.com/nymtech/nym)) - VPN berbayar dengan mixnet 5-hop.
- [RiseupVPN](https://riseup.net/en/vpn) ([GitHub](https://github.com/riseupnet)) - VPN gratis unlimited tanpa port forwarding.
- [PrivadoVPN](https://privadovpn.com/freevpn) - VPN gratis 10GB bulanan.
- [Bitmask](https://bitmask.net/) - VPN gratis unlimited, ada versi Android.

## Server VPN

- [WireGuard](https://www.wireguard.com/) ([Guide](https://www.wireguard.com/quickstart/)) - tunnel VPN modern yang cepat, ada Web UI wg-easy.
- [Tailscale](https://tailscale.com/) - mesh WireGuard yang gampang, alternatifnya ada NetBird di netbird.io.
- [Amnezia](https://amnezia.org/) ([GitHub](https://github.com/amnezia-vpn)) - server VPN yang gampang self-host.
- [OpenVPN](https://openvpn.net/) - server VPN klasik yang battle-tested.
- [WGDashboard](https://wgdashboard.dev/) ([GitHub](https://github.com/donaldzou/WGDashboard)) - panel WireGuard plus AmneziaWG.
- [Twingate](https://www.twingate.com/) - tunnel zero trust access buat tim.
- [Headscale](https://github.com/juanfont/headscale) - Tailscale self-hosted yang open source.
- [Nebula](https://github.com/slackhq/nebula) - server VPN mesh, alternatifnya ada ZeroTier.
- [IPsec VPN](https://github.com/hwdsl2/setup-ipsec-vpn) - server VPN IPsec sekali setup.
- [Cloudflare Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) - tunnel aplikasi alternatif VPN, ada versi cepat CF Quick Tunnels.
- [Cloud WireGuard Guide](https://github.com/rajannpatel/Pi-Hole-on-Google-Compute-Engine-Free-Tier-with-Full-Tunnel-and-Split-Tunnel-Wireguard-VPN-Configs) - panduan WireGuard plus Pi-hole di Google Cloud.
- [tinc](https://www.tinc-vpn.org/) ([GitHub](https://github.com/gsliepen/tinc)) - tunnel VPN mesh yang veteran.
- [WireHole](https://github.com/IAmStoxe/wirehole) - WireGuard plus Pi-hole sekali jalan, ada Web UI.
- [OpenConnect](https://gitlab.com/openconnect/openconnect) - SSL VPN dengan GUI tersedia.
- [Pritunl](https://pritunl.com/) ([GitHub](https://github.com/pritunl/pritunl)) - server VPN dengan dashboard enterprise.
- [Algo](https://blog.trailofbits.com/2016/12/12/meet-algo-the-vpn-that-works/) ([GitHub](https://github.com/trailofbits/algo)) - VPN cloud sekali deploy.
- [SShuttle](https://sshuttle.readthedocs.io/en) ([GitHub](https://github.com/sshuttle/sshuttle)) - server VPN via SSH yang simpel.
- [DSVPN](https://github.com/jedisct1/dsvpn) - server VPN simpel dead-simple.
- [ocserv](https://ocserv.gitlab.io/www/index.html) - server SSL VPN yang open source.

## Tools VPN

- [VPN Binding Guide](https://wispydocs.pages.dev/torrenting/) - panduan bind VPN ke torrent client biar aman dari surat ISP.
- [WireSock](https://wiresock.net/) - client split tunneling, alternatifnya ada Amnezia self-hosted dan TunnlTo.
- [WG Tunnel](https://wgtunnel.com/) ([GitHub](https://github.com/wgtunnel)) - client WireGuard dan AmneziaWG.
- [VPN Hotspot](https://github.com/Mygod/VPNHotspot) - share koneksi VPN via hotspot, perlu Android root.
- [Gluetun](https://github.com/qdm12/gluetun) - jalanin VPN dalam Docker.

## Proxy

- [Lantern](https://lantern.io/) ([GitHub](https://github.com/getlantern/lantern)) - app proxy yang gampang dipakai.
- [Psiphon](https://psiphon.ca/) - app hybrid proxy VPN buat tembus blokir.
- [FreeSocks](https://freesocks.org/) ([GitHub](https://github.com/unredacted/freesocks-control-plane)) - app Shadowsocks yang gratis.
- [Snowflake](https://snowflake.torproject.org/) - ekstensi browser proxy Tor yang bantu orang lain tembus sensor.
- [Censor Tracker](https://censortracker.org/) ([GitHub](https://github.com/censortracker/censortracker)) - ekstensi proxy anti sensor, alternatif SmartProxy, FoxyProxy, ZeroOmega.
- [Acrylic](https://mayakron.altervista.org/) - proxy DNS lokal buat Windows.
- [SimpleDnsCrypt](https://github.com/instantsc/SimpleDnsCrypt) - proxy enkripsi DNS lokal, alternatif DNSCrypt.

## Server proxy

- [3X-UI](https://docs.sanaei.dev/) ([Guide](https://wispydocs.pages.dev/network-censorship-circumvention/)) - panel proxy yang gampang, ikuti guidenya buat setup.
- [Project X](https://github.com/XTLS/Xray-core) - core proxy Xray yang powerful.
- [NaïveProxy](https://github.com/klzgrad/naiveproxy) - proxy berbasis Chromium yang susah dideteksi.
- [Hysteria](https://v2.hysteria.network/) ([GitHub](https://github.com/apernet/hysteria)) - protokol proxy fokus kecepatan.
- [Shadowsocks](https://shadowsocks.org/) ([GitHub](https://github.com/shadowsocks)) - protokol proxy simpel yang legendaris.
- [sing-box](https://sing-box.sagernet.org/) ([GitHub](https://github.com/SagerNet/sing-box)) - core proxy universal yang modern.
- [Hiddify Manager](https://hiddify.com/) ([GitHub](https://github.com/hiddify/Hiddify-Manager)) - panel proxy yang user-friendly.
- [Outline](https://getoutline.org/) ([Guide](https://docs.getoutline.com/s/hosting/)) - server Shadowsocks yang gampang deploy, ikuti guidenya.
- [VpnHood](https://github.com/vpnhood/VpnHood) - server proxy open source.
- [Scramjet](https://docs.titaniumnetwork.org/proxies/scramjet/) - server web proxy, alternatif Nebula.
- [Nginx Proxy Manager](https://nginxproxymanager.com) ([GitHub](https://github.com/NginxProxyManager/nginx-proxy-manager)) - UI reverse proxy yang gampang.

## Client proxy

- [v2rayN](https://github.com/2dust/v2rayN) - client proxy buat Windows, macOS, dan Linux.
- [v2rayNG](https://github.com/2dust/v2rayNG) - client proxy Android, alternatif NekoBox dan MahsaNG.
- [Hiddify](https://hiddify.com/) ([GitHub](https://github.com/hiddify)) - client proxy semua platform.
- [Amnezia](https://amnezia.org/) ([GitHub](https://github.com/amnezia-vpn)) - client proxy semua platform.
- [Shadowsocks clients](https://shadowsocks.org/doc/getting-started.html#gui-clients) ([GitHub](https://github.com/shadowsocks)) - daftar client Shadowsocks semua platform.
- [sing-box clients](https://sing-box.sagernet.org/clients/) ([GitHub](https://github.com/SagerNet/sing-box)) - client proxy buat macOS dan Android.
- [Throne](https://throneproj.github.io/) ([GitHub](https://github.com/throneproj/Throne)) - client proxy GUI sing-box buat Windows, macOS, dan Linux.
- [V2Box](https://play.google.com/store/apps/details?id=dev.hexasoftware.v2box) - client proxy Android, ada versi iOS.
- [ClashVerge](https://www.clashverge.dev/) ([GitHub](https://github.com/clash-verge-rev/clash-verge-rev)) - client proxy buat Windows, macOS, dan Linux.
- [Streisand](https://streisand.pages.dev/) - client proxy buat macOS dan iOS.
- [FlClash](https://github.com/chen08209/FlClash/blob/main/README.md) - client proxy buat Windows, macOS, Linux, dan Android.
- [husi](https://github.com/xchacha20-poly1305/husi) - client proxy Android.
- [Exclave](https://github.com/dyhkwong/Exclave) - client proxy Android.
- [Proxifier](https://www.proxifier.com/) - tambah fungsi proxy ke app apa pun di Windows, macOS, dan Android.
- [wireproxy](https://github.com/whyvl/wireproxy) - WireGuard sebagai proxy buat Windows, macOS, dan Linux.

## Anti sensor

- [Project Atlas](https://project-atlas-dbb.pages.dev/) - panduan bypass sensor yang lengkap.
- [Net4people](https://github.com/net4people/bbs/issues) - diskusi circumvention sensor sedunia.
- [ByeDPIAndroid](https://github.com/dovecoteescapee/ByeDPIAndroid) - alter paket jaringan buat Android.
- [zapret](https://github.com/bol-van/zapret2) - alter paket jaringan, alternatif SpoofDPI dan GoodbyeDPI.
- [DNSveil](https://msasanmh.github.io/DNSveil/) ([GitHub](https://github.com/msasanmh/DNSveil)) - client DNS anti sensor.
- [Geph](https://geph.io/) ([GitHub](https://github.com/geph-official)) - proxy anti sensor yang pandai kamuflase trafik.
- [DNSTT.XYZ](https://dnstt.xyz/) - tunnel DNS mobile buat bypass sensor, alternatif HTTP Injector, HTTP Custom, NetMod, SlipNet, WhiteDNS, DarkTunnel.
- [FilterWatch](https://filter.watch/english/) - berita dan artikel sensor internet.
- [ByeByeDPI](https://github.com/romanvht/ByeByeDPI/blob/master/README-en.md) - alter paket jaringan, alternatif Paqet, PowerTunnel, Green Tunnel, dan Rethink DNS.
- [YouTubeUnblock](https://github.com/Waujito/youtubeUnblock) - buka blokir YouTube via SNI spoof buat router OpenWrt dan Entware.
- [Scamalytics](https://scamalytics.com/) - cek blacklist IP.

## Situs proxy

> Catatan: situs proxy catat info kayak IP dan situs dikunjungi, jadi enak buat buka blokir tapi tidak buat privasi.

- [Titanium Network](https://titaniumnetwork.org/#services) ([GitHub](https://github.com/titaniumnetwork-dev)) - multi-proxy dengan banyak instances.
- [SSLSecureProxy](https://www.sslsecureproxy.com/) - proxy web simpel, alternatif 4everproxy dan hideip.co.
- [ProxyOf2](https://proxyof2.com/) - proxy web yang ringan.
- [Phantom](https://phantom.lol/) - proxy web minimalis.
- [Reflect4](https://reflect4.me/) - proxy web cepat, alternatif CroxyProxy dan Blockaway.
- [ProxyPal](https://proxypal.net/) - proxy web yang simpel.
- [Proxyium](https://proxyium.com/) - proxy web gratis tanpa ribet.
- [Google Translate](https://translate.google.com/) - proxy darurat buat buka situs diblokir via translate.
- [Proxy Checker](https://proxy-checker.net/) - scraper dan checker proxy, alternatif proxy-scraper dan proxy-scraper-checker.
- [Knaben.info](https://knaben.info/) - daftar proxy situs torrent.
