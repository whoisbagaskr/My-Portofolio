const dict = {
    id: {
        static: {
            status: "Siap Bekerja",
            btnCV: "📄 Lihat & Cetak CV ATS",
            btnEmail: "📧 Email Utama",
            waLink: "https://api.whatsapp.com/send?phone=6282171123965&text=Halo%20Bagas,%20saya%20tertarik%20dengan%20portofolio%20Anda.",
            btnWA: "💬 WhatsApp Hubungi",
            secGen: "Keahlian Lintas Bidang (Generalist)",
            secProj: "Project & Karya Media Showcase",
            secExp: "Rekam Jejak Karier & Dokumentasi",
            secAbout: "Tentang Saya",
            secDocs: "Verifikasi & Berkas Utama",
            secOrg: "Pengalaman Organisasi & Komunitas",
            secAchieve: "Prestasi & Olahraga",
            secEdu: "Riwayat Pendidikan",
            secSkills: "Kompetensi Teknis",
            hHard: "Hard Skills",
            hSoft: "Soft Skills",
            cvClose: "Tutup [Esc]",
            cvTSum: "Objektif / Ringkasan Profesional",
            cvTExp: "Pengalaman Kerja",
            cvTProj: "Proyek & Pengalaman Lapangan",
            cvTEdu: "Pendidikan & Pelatihan",
            cvTSkill: "Keahlian Utama",
            btnBuka: "Buka"
        },
        profile: {
            tagline: "COMMUNICATION STUDENT | VOICE ACTING ENTHUSIAST | ADAPTABLE GENERALIST",
            kontak: "Jl.Gubeng Jaya Langgar No.7A, Gubeng, Surabaya | ba6422977@gmail.com | 082171123965",
            ringkasan: "Saya adalah Mahasiswa S1 Ilmu Komunikasi Universitas Terbuka sekaligus seorang Generalist yang adaptif. Memiliki fondasi teknis dan operasional yang kuat di bidang F&B, kelistrikan, hingga SOP Keamanan. Saat ini aktif mendalami bidang Voice Acting / Dubbing, broadcasting, serta penulisan karya media/esai publik, dipadukan dengan etos kerja lapangan dan semangat pembelajar mandiri."
        },
        generalist: [
            { icon: "🎙️", title: "Voice & Communication", desc: "Memiliki artikulasi & kontrol vokal untuk voice acting, dubbing, serta penulisan narasi/esai terstruktur." },
            { icon: "🍳", title: "F&B & Operasional", desc: "Memahami operasional dapur, standar higiene, dan terbiasa dengan ritme kerja cepat (fast-paced environment)." },
            { icon: "⚡", title: "Dasar Kelistrikan", desc: "Punya basic kelistrikan industri & rumah tangga untuk pengecekan awal dan perbaikan teknis ringan." },
            { icon: "🛡️", title: "SOP Keamanan", desc: "Memahami prosedur keamanan dasar, mitigasi risiko kejahatan, dan tanggap darurat keselamatan." }
        ],
        projects: [
            { status: "Ongoing Project", tag: "Voice Acting / Dubbing", judul: "Voice Showcase & Sample Dubbing", desc: "Project mandiri eksplorasi karakter suara, dubbing animasi/film, dan sampel suara broadcasting.", img: "berkas/preview-voice.jpg", tools: ["Voice Acting", "Dubbing", "Broadcasting"], proofLink: "berkas/sample-voice-dubbing.mp3", proofLabel: "🎧 Dengar Audio Sample" },
            { status: "Ongoing Project", tag: "Essay & Media Writing", judul: "Kumpulan Serial Esai & Opini Publik", desc: "Wadah penulisan esai populer, analisis komunikasi sosial, dan tulisan refleksi riset lapangan yang dipublikasikan secara berseri.", img: "berkas/preview-esai.jpg", tools: ["Public Writing", "Social Essay", "Communication"], proofLink: "berkas/kumpulan-esai.pdf", proofLabel: "📄 Baca Serial Esai" }
        ],
        experience: [
            { waktu: "Mei 2025 - Januari 2026", posisi: "Kitchen Crew - Karyawan Tetap", tempat: "Pendopo Garden Cafe & Eatery - Trenggalek", detail: "• Bertanggung jawab atas kebersihan area kitchen, manajemen bahan, dan produksi masakan menggunakan Wok.\n• Mengatasi kendala teknis ringan operasional F&B secara mendadak.", proofLink: "berkas/paklaring-pendopo.pdf", proofLabel: "📜 Lihat Paklaring / Surat Kerja" },
            { waktu: "Januari 2025 - April 2025", posisi: "Teknisi Listrik (Karyawan Kontrak)", tempat: "PT Pulau Sambu Guntung - Riau", detail: "• Membantu pengawasan, perbaikan, dan inspeksi berkala pada komponen mesin kelistrikan industri.", proofLink: "berkas/foto-kerja-sambu.jpg", proofLabel: "🖼️ Lihat Dokumentasi Kerja" },
            { waktu: "Sept 2024 - Nov 2024", posisi: "Tenaga Produksi Aluminium (Daily Worker)", tempat: "Surya Abadi Glass - Trenggalek", detail: "• Membantu pemotongan, perakitan, dan pengiriman material berbasis aluminium dan kaca.", proofLink: "berkas/foto-kerja-aluminium.jpg", proofLabel: "📁 Lihat Bukti Lapangan" },
            { waktu: "Juli 2024 - Sept 2024", posisi: "Karyawan Toko ATK (Daily Worker)", tempat: "BUMDES Sugiharto - Trenggalek", detail: "• Melayani pelanggan, mengoperasikan mesin fotokopi, dan pengerjaan dokumen administrasi.", proofLink: "berkas/foto-kerja-bumdes.jpg", proofLabel: "📁 Lihat Bukti Admin / Dokumen" },
            { waktu: "Juli 2023 - Okt 2023", posisi: "Helper Teknisi & Office Boy (PKL)", tempat: "PT PLN ULP Trenggalek", detail: "• Membantu tugas teknisi kelistrikan di lapangan dan menjaga kebersihan operasional kantor.", proofLink: "berkas/sertifikat-pkl-pln.pdf", proofLabel: "📜 Lihat Sertifikat PKL PLN" }
        ],
        docs: [
            { icon: "🪪", name: "Sertifikat Gada Pratama", issuer: "Mabes Polri / Polda Jatim", link: "berkas/skl-gadapratama.pdf" },
            { icon: "📜", name: "Ijazah Resmi SMK", issuer: "SMKN 1 Trenggalek", link: "berkas/ijazah-smk.pdf" },
            { icon: "📄", name: "KTP / Dokumen Identitas Resmi", issuer: "Dukcapil", link: "#" }
        ],
        orgs: [
            { icon: "🕌", name: "Wakil Ketua Divisi Remaja", issuer: "Komunitas ISS (Infaq Sedekah Sosial)", desc: "Menginisiasi program 'Masjid Ramah' untuk meramaikan masjid serta memimpin aksi sosial masyarakat.", proofLink: "berkas/foto-kegiatan-iss.jpg", proofLabel: "🖼️ Dokumentasi Kegiatan ISS" },
            { icon: "👥", name: "Community Facilitator & Content Contributor", issuer: "Komunitas Bermain (Surabaya & Malang)", desc: "Aktif merancang narasi/esai inklusivitas sosial, memfasilitasi interaksi anggota baru (peer supporter), serta menjembatani relasi komunitas.", proofLink: "berkas/foto-kegiatan-kbm.jpg", proofLabel: "🖼️ Dokumentasi Kegiatan KBM" }
        ],
        achievements: [
            { icon: "🏆", name: "Juara 3 Kumite - Piala Bupati Nganjuk 2023", issuer: "Cabang Olahraga Karate (Sabuk Cokelat / Kyu 3)", desc: "Melatih kedisiplinan mental, fokus tinggi, ketahanan fisik, serta kepemimpinan.", proofLink: "berkas/sertifikat-karate.pdf", proofLabel: "📜 Sertifikat & Foto Piala Karate" }
        ],
        education: [
            { kapan: "Saat ini", di: "Universitas Terbuka (Formal)", spesialisasi: "S1 Ilmu Komunikasi (Sedang Menempuh Pendidikan)" },
            { kapan: "2021 - 2024", di: "SMK Negeri 1 Trenggalek (Formal)", spesialisasi: "Jurusan Teknik Instalasi Tenaga Listrik | Nilai rata-rata 86,41" },
            { kapan: "Tahun 2026", di: "PT Empat Bintang Luhur Berjaya (Non Formal)", spesialisasi: "Pendidikan Satpam Gada Pratama" }
        ],
        skills: {
            hard: ["Voice Acting / Dubbing", "Public Writing (Esai)", "Basic F&B Operations", "Dasar Kelistrikan", "SOP Keamanan", "Dasar Coding", "OSINT"],
            soft: ["Generalist (Adaptif)", "Problem Solving", "Pembelajar Mandiri", "Komunikasi Empatis", "Tangguh di Tekanan"]
        }
    },
    en: {
        static: {
            status: "Ready to Hire",
            btnCV: "📄 View & Print ATS CV",
            btnEmail: "📧 Primary Email",
            waLink: "https://api.whatsapp.com/send?phone=6282171123965&text=Hello%20Bagas,%20I%20am%20interested%20in%20your%20portfolio.",
            btnWA: "💬 Contact via WhatsApp",
            secGen: "Cross-Disciplinary Skills (Generalist)",
            secProj: "Projects & Media Showcase",
            secExp: "Career Track Record & Documentation",
            secAbout: "About Me",
            secDocs: "Verifications & Primary Documents",
            secOrg: "Organization & Community Experience",
            secAchieve: "Achievements & Sports",
            secEdu: "Educational Background",
            secSkills: "Core Competencies",
            hHard: "Hard Skills",
            hSoft: "Soft Skills",
            cvClose: "Close [Esc]",
            cvTSum: "Professional Objective / Summary",
            cvTExp: "Work Experience",
            cvTProj: "Projects & Field Experience",
            cvTEdu: "Education & Training",
            cvTSkill: "Core Expertise",
            btnBuka: "View"
        },
        profile: {
            tagline: "COMMUNICATION STUDENT | VOICE ACTING ENTHUSIAST | ADAPTABLE GENERALIST",
            kontak: "Gubeng Jaya Langgar St. 7A, Surabaya | ba6422977@gmail.com | +62 821-7112-3965",
            ringkasan: "I am a Bachelor of Communication Studies student at Universitas Terbuka and an adaptable Generalist. Possessing strong technical and operational foundations in F&B, electrical basics, and Security SOPs. Currently actively developing talents in Voice Acting / Dubbing, broadcasting, and public essay writing."
        },
        generalist: [
            { icon: "🎙️", title: "Voice & Communication", desc: "Articulate vocal control for voice acting, dubbing, and structured narrative/essay writing." },
            { icon: "🍳", title: "F&B & Operations", desc: "Understanding kitchen operations, hygiene standards, and experienced in fast-paced environments." },
            { icon: "⚡", title: "Electrical Basics", desc: "Basic industrial & residential electrical knowledge for initial checks and minor repairs." },
            { icon: "🛡️", title: "Security SOPs", desc: "Knowledgeable in basic security protocols, crime risk mitigation, and emergency safety." }
        ],
        projects: [
            { status: "Ongoing Project", tag: "Voice Acting / Dubbing", judul: "Voice Showcase & Sample Dubbing", desc: "Self-initiated project focusing on character voice development, animation dubbing, and broadcasting voice-overs.", img: "berkas/preview-voice.jpg", tools: ["Voice Acting", "Dubbing", "Broadcasting"], proofLink: "berkas/sample-voice-dubbing.mp3", proofLabel: "🎧 Listen Audio Sample" },
            { status: "Ongoing Project", tag: "Essay & Media Writing", judul: "Essay Series & Public Opinions", desc: "A hub for popular essays, communication analysis, and social research reflections published sequentially.", img: "berkas/preview-esai.jpg", tools: ["Public Writing", "Social Essay", "Communication"], proofLink: "berkas/kumpulan-esai.pdf", proofLabel: "📄 Read Essay Series" }
        ],
        experience: [
            { waktu: "May 2025 - Jan 2026", posisi: "Kitchen Crew - Full Time", tempat: "Pendopo Garden Cafe & Eatery - Trenggalek", detail: "• Responsible for kitchen hygiene, ingredient prep, and Wok cooking production in a fast-paced environment.", proofLink: "berkas/paklaring-pendopo.pdf", proofLabel: "📜 View Employment Certificate" },
            { waktu: "Jan 2025 - Apr 2025", posisi: "Electrical Technician (Contract)", tempat: "PT Pulau Sambu Guntung - Riau", detail: "• Assisted in supervision, maintenance, and inspection of industrial electrical machinery.", proofLink: "berkas/foto-kerja-sambu.jpg", proofLabel: "🖼️ View Work Documentation" },
            { waktu: "Sep 2024 - Nov 2024", posisi: "Aluminum & Glass Production (Daily Worker)", tempat: "Surya Abadi Glass - Trenggalek", detail: "• Assisted in cutting, assembling, and delivering aluminum and glass materials.", proofLink: "berkas/foto-kerja-aluminium.jpg", proofLabel: "📁 View Field Documentation" },
            { waktu: "Jul 2024 - Sep 2024", posisi: "Stationery Store Staff (Daily Worker)", tempat: "BUMDES Sugiharto - Trenggalek", detail: "• Served customers, operated photocopy machines, and assisted with typing tasks.", proofLink: "berkas/foto-kerja-bumdes.jpg", proofLabel: "📁 View Admin Proof Document" },
            { waktu: "Jul 2023 - Oct 2023", posisi: "Technician Helper & Office Boy (Intern)", tempat: "PT PLN ULP Trenggalek", detail: "• Assisted electrical technicians in the field and maintained office operations.", proofLink: "berkas/sertifikat-pkl-pln.pdf", proofLabel: "📜 View Internship Certificate" }
        ],
        docs: [
            { icon: "🪪", name: "Gada Pratama Security Certificate", issuer: "National Police / East Java Police", link: "berkas/skl-gadapratama.pdf" },
            { icon: "📜", name: "Vocational High School Diploma", issuer: "SMKN 1 Trenggalek", link: "berkas/ijazah-smk.pdf" },
            { icon: "📄", name: "Official ID Card / Identity Doc", issuer: "Government Registry", link: "#" }
        ],
        orgs: [
            { icon: "🕌", name: "Vice Chairman of Youth Division", issuer: "ISS Community (Social & Charity)", desc: "Initiated mosque community programs and led youth charity movements.", proofLink: "berkas/foto-kegiatan-iss.jpg", proofLabel: "🖼️ Activity Photos ISS" },
            { icon: "👥", name: "Community Facilitator & Content Contributor", issuer: "Komunitas Bermain (Surabaya & Malang)", desc: "Drafting social inclusion essays, facilitating new member integration, and connecting regional networks.", proofLink: "berkas/foto-kegiatan-kbm.jpg", proofLabel: "🖼️ Activity Photos KBM" }
        ],
        achievements: [
            { icon: "🏆", name: "3rd Place Kumite - Regent Cup 2023", issuer: "Karate (Brown Belt / Kyu 3)", desc: "Trained mental discipline, focus, physical endurance, and leadership.", proofLink: "berkas/sertifikat-karate.pdf", proofLabel: "📜 Karate Certificate & Photos" }
        ],
        education: [
            { kapan: "Present", di: "Universitas Terbuka (Formal)", spesialisasi: "Bachelor of Communication Studies (Currently Enrolled)" },
            { kapan: "2021 - 2024", di: "SMK Negeri 1 Trenggalek (Formal)", spesialisasi: "Electrical Installation Engineering | Average Score: 86.41" },
            { kapan: "2026", di: "PT Empat Bintang Luhur Berjaya (Non-Formal)", spesialisasi: "Gada Pratama Security Training" }
        ],
        skills: {
            hard: ["Voice Acting / Dubbing", "Public Writing (Essay)", "Basic F&B Operations", "Electrical Basics", "Security SOP", "Basic Coding", "OSINT"],
            soft: ["Generalist (Adaptable)", "Problem Solving", "Independent Learner", "Empathic Communication", "Resilient under Pressure"]
        }
    }
};
