/* =========================================================
   KURIKULUM OBE D4 TEKNIK MANUFAKTUR 2026
   Politeknik Negeri Padang · Jurusan Teknik Mesin
   DATA TERPADU SELURUH LAMAN — dibangkitkan otomatis, jangan disunting tangan
   Sumber: dokumen Project "OBE baru untuk Semester ganjil 2026/2027"
   Visi PNP & Visi Prodi · 4 PPM · 10 CPL · 26 P · 185 MP · 52 MK/146 sks · Peta I/R/M/A · Assessment Plan
   ========================================================= */

/* --- Visi · PPM · CPL (diambil utuh dari ver4) --- */
window.KURIKULUM = {
 tingkat:[
  {id:"visi-pnp", judul:"Visi Politeknik Negeri Padang", sub:"Naskah resmi PNP · enam unsur", warna:"#6A1B9A", kolom:"one",
   item:[{id:"VISI-PNP", judul:"Visi Politeknik Negeri Padang", warna:["#CE93D8","#6A1B9A"], ikon:"kampus", audio:"audio/visi-pnp.mp3",
     teks:"Menjadi perguruan tinggi vokasi yang unggul, inovatif, bermartabat, berkearifan lokal, berorientasi pada keberlanjutan, dan berdaya saing internasional.",
     tag:["unggul","inovatif","bermartabat","berkearifan lokal","berorientasi pada keberlanjutan","berdaya saing internasional"]}]},
  {id:"visi-prodi", judul:"Visi Program Studi D4 Teknik Manufaktur", sub:"Visi v2 · disandingkan dengan Visi PNP", warna:"#2E7D32", kolom:"one",
   item:[{id:"VISI-PRODI", judul:"Visi Program Studi D4 Teknik Manufaktur", warna:["#A5D6A7","#2E7D32"], ikon:"cerdashijau", audio:"audio/visi-prodi.mp3",
     teks:"Menjadi program studi Sarjana Terapan Teknik Manufaktur yang unggul, inovatif, dan berdaya saing internasional dalam manufaktur cerdas (intelligent manufacturing) dan manufaktur hijau (green manufacturing), menghasilkan lulusan kompeten, bermartabat, bertakwa kepada Tuhan Yang Maha Esa, dan berkarakter technopreneur.",
     tag:["manufaktur cerdas","manufaktur hijau","kompeten","bermartabat","bertakwa","technopreneur"]}]},
  {id:"ppm", judul:"Profil Profesional Mandiri (PPM)", sub:"Kompetensi 3–5 tahun setelah lulus · 4 profil", warna:"#1565C0", kolom:"ppm",
   pengantar:"Dalam kurun tiga sampai lima tahun setelah lulus, lulusan Program Studi D4 Teknik Manufaktur Politeknik Negeri Padang menjadi pribadi yang kompeten, bermartabat, berdaya saing internasional, dan bertakwa kepada Tuhan Yang Maha Esa, berkarakter kewirausahaan berbasis technopreneur sesuai potensi lokal, serta memiliki pemahaman literasi digital yang baik, dengan profil sebagai berikut:",
   item:[
    {id:"PPM-1", judul:"Profesional Rekayasa Manufaktur, Rantai Pasok, dan Mutu", warna:["#4FC3F7","#0277BD"], ikon:"gearflow", audio:"audio/ppm-1.mp3",
     teks:"Lulusan menjadi profesional bidang rekayasa manufaktur, rantai pasok, dan mutu yang kompeten dan berdaya saing di industri nasional maupun internasional, mampu merancang, merencanakan, mengoperasikan, mengendalikan, menguji, mengevaluasi, dan mengoptimalkan proses produksi, aliran rantai pasok, serta sistem mutu berbasis data untuk meningkatkan produktivitas, kualitas, efisiensi biaya dan energi, serta keselamatan dan kesehatan kerja; menerapkan prinsip pemanfaatan sumber daya secara efisien dan berkelanjutan — termasuk energi baru terbarukan dan pemanfaatan kembali material; serta mampu memimpin tim kerja pada tingkat penyeliaan hingga manajerial awal."},
    {id:"PPM-2", judul:"Profesional Otomasi dan Transformasi Digital Manufaktur", warna:["#82B1FF","#1A3FB5"], ikon:"robot", audio:"audio/ppm-2.mp3",
     teks:"Lulusan menjadi profesional bidang otomasi dan transformasi digital manufaktur yang mampu merancang, mengintegrasikan, mengoperasikan, memelihara, dan mengembangkan sistem manufaktur otomatis dan cerdas berbasis kendali terprogram (PLC), sistem hidrolik dan pneumatik, sensor dan IoT, serta SCADA; mampu memprogram dan mensimulasikan sistem robotik industri; serta menguasai rantai digital perancangan hingga manufaktur (CAD/CAM/CAE dan pemesinan CNC) dan analitik data untuk meningkatkan keandalan, fleksibilitas, efisiensi, keselamatan, dan daya saing industri."},
    {id:"PPM-3", judul:"Profesional Technopreneur, Manajemen Proyek, dan Konsultansi Teknologi Manufaktur", warna:["#9FA8DA","#3949AB"], ikon:"bulb", audio:"audio/ppm-3.mp3",
     teks:"Lulusan menjadi profesional yang berkarakter kewirausahaan berbasis technopreneur, mampu menciptakan dan mewujudkan nilai — baik melalui perintisan dan pengelolaan usaha maupun melalui prakarsa pengembangan produk, layanan, dan perbaikan di dalam organisasi tempatnya bekerja (intrapreneurship) — dengan menghasilkan gagasan teknologi manufaktur yang inovatif serta layak secara teknis dan ekonomis; mampu merencanakan dan mengendalikan proyek beserta anggaran, kontrak, dan risikonya; serta mampu mengomunikasikan gagasan dan hasil kerja teknis secara efektif, lisan maupun tulisan, kepada pelanggan, vendor, dan pemangku kepentingan, dengan memperhatikan mutu, keselamatan, etika, dan keberlanjutan usaha."},
    {id:"PPM-4", judul:"Profesional Pembelajar Sepanjang Hayat", warna:["#80DEEA","#00838F"], ikon:"book", audio:"audio/ppm-4.mp3",
     teks:"Lulusan menjadi pribadi yang bertakwa kepada Tuhan Yang Maha Esa, bermartabat, dan menjunjung etika profesi, serta pembelajar sepanjang hayat yang secara mandiri dan berkelanjutan memperbarui pengetahuan dan kompetensinya melalui pendidikan lanjut, pelatihan, dan sertifikasi profesi; beradaptasi terhadap perkembangan teknologi, kebutuhan industri, maupun perubahan peran kerja; menunjukkan daya juang dan ketangguhan (resilience) dalam menghadapi tekanan dan perubahan; bekerja secara efektif dan kolaboratif dalam tim multidisiplin; membangun jejaring profesional; serta berkontribusi secara bertanggung jawab kepada organisasi, profesi, masyarakat, dan lingkungan."}]},
  {id:"cpl", judul:"Capaian Pembelajaran Lulusan (CPL)", sub:"10 CPL · selaras Sydney Accord SA1–SA11", warna:"#E8590C", kolom:"cpl",
   item:[
    {id:"CPL-1", judul:"Sikap, Etika, dan Tanggung Jawab Profesi", warna:["#FFE57F","#F9A825"], ikon:"shield", audio:"audio/cpl-1.mp3", tag:["SA7"],
     teks:"Menunjukkan sikap religius, berakhlak mulia, dan berkarakter sesuai nilai-nilai Pancasila, serta menerapkan etika profesi keinsinyuran, tanggung jawab keselamatan dan kesehatan kerja, dan kepatuhan terhadap standar, norma, dan peraturan yang berlaku dalam melaksanakan pekerjaan di bidang teknik manufaktur."},
    {id:"CPL-2", judul:"Pengetahuan Keteknikan", warna:["#FFD180","#FF9100"], ikon:"atom", audio:"audio/cpl-2.mp3", tag:["SA1","SK1–SK4"],
     teks:"Mampu menerapkan pengetahuan matematika, sains alam, dasar-dasar keteknikan, dan pengetahuan spesialis bidang teknik manufaktur untuk menyelesaikan permasalahan keteknikan yang terdefinisi secara luas pada lingkup pekerjaannya."},
    {id:"CPL-3", judul:"Analisis Masalah dan Pengambilan Keputusan", warna:["#FFB74D","#EF6C00"], ikon:"decide", audio:"audio/cpl-3.mp3", tag:["SA2","SK8","KKNI D3"],
     teks:"Mampu mengidentifikasi, merumuskan, dan menganalisis secara kritis permasalahan keteknikan yang terdefinisi secara luas pada proses dan sistem manufaktur, menggunakan prinsip keteknikan, data terukur, metode analisis terstandar, dan penelusuran literatur yang relevan, sehingga mencapai kesimpulan yang beralasan, mengambil keputusan yang tepat, serta memberikan pertimbangan dalam memilih di antara berbagai alternatif solusi secara mandiri maupun dalam kelompok."},
    {id:"CPL-4", judul:"Perancangan dan Pengembangan Solusi", warna:["#FFAB91","#E64A19"], ikon:"compass", audio:"audio/cpl-4.mp3", tag:["SA3"],
     teks:"Mampu merancang komponen, perkakas, proses, dan sistem manufaktur beserta sistem otomasi dan kendalinya untuk memenuhi kebutuhan yang ditetapkan sesuai standar nasional maupun internasional yang berlaku, dengan mempertimbangkan kelayakan pembuatan (manufacturability), biaya, keselamatan, serta dampak lingkungan dan keberlanjutan."},
    {id:"CPL-5", judul:"Investigasi, Pengujian, dan Pengendalian Mutu", warna:["#FF9E80","#D84315"], ikon:"gauge", audio:"audio/cpl-5.mp3", tag:["SA4"],
     teks:"Mampu merancang dan melaksanakan pengujian serta pengukuran terhadap material, komponen, dan proses manufaktur dengan metode dan alat ukur terstandar, menganalisis dan menafsirkan data hasil pengujian untuk menarik kesimpulan yang sahih, serta menerapkannya dalam sistem pengendalian dan penjaminan mutu berbasis data."},
    {id:"CPL-6", judul:"Penggunaan dan Pemeliharaan Perangkat Modern", warna:["#FF8A80","#C62828"], ikon:"monitor", audio:"audio/cpl-6.mp3", tag:["SA5"],
     teks:"Mampu memilih, menggunakan, dan memelihara perangkat lunak serta perangkat keras modern bidang manufaktur — meliputi CAD/CAM/CAE, mesin CNC, kendali terprogram (PLC), sistem hidrolik dan pneumatik, sensor dan IoT, SCADA, simulasi sistem robotik, serta perkakas analitik data — dengan memahami keterbatasan masing-masing perangkat dan menjaga keandalan operasinya."},
    {id:"CPL-7", judul:"Keteknikan, Masyarakat, dan Keberlanjutan", warna:["#E6C07B","#A66A00"], ikon:"leaf", audio:"audio/cpl-7.mp3", tag:["SA6","SK5","SK7"],
     teks:"Mampu menilai dampak kegiatan dan solusi manufaktur terhadap masyarakat, keselamatan dan kesehatan kerja, serta lingkungan — termasuk melalui identifikasi bahaya dan penilaian risiko proses — dan menerapkan prinsip efisiensi sumber daya dan energi, pemanfaatan kembali material, serta energi baru terbarukan dalam praktik keteknikan yang berkelanjutan."},
    {id:"CPL-8", judul:"Kerja Tim dan Komunikasi", warna:["#F48FB1","#C2185B"], ikon:"team", audio:"audio/cpl-8.mp3", tag:["SA8","SA9"],
     teks:"Mampu bekerja secara efektif sebagai anggota maupun pemimpin dalam tim kerja yang beragam dan multidisiplin, serta mengomunikasikan gagasan dan hasil kerja teknis secara lisan dan tulisan — dalam bentuk laporan, gambar teknik, dan presentasi — kepada kalangan teknis maupun non-teknis."},
    {id:"CPL-9", judul:"Manajemen Proyek, Ekonomi Teknik, dan Kewirausahaan", warna:["#D7A07A","#8D4A1F"], ikon:"gantt", audio:"audio/cpl-9.mp3", tag:["SA10","KKNI D4"],
     teks:"Mampu menerapkan prinsip manajemen proyek, ekonomi teknik, dan kewirausahaan berbasis technopreneur dalam merencanakan, menganggarkan, dan mengendalikan pekerjaan keteknikan — baik melalui perintisan usaha sendiri maupun melalui prakarsa penciptaan nilai di dalam organisasi tempatnya bekerja (intrapreneurship) — termasuk menilai kelayakan teknis dan ekonomis serta mengelola risiko, kontrak, dan rantai pasok, serta memikul tanggung jawab atas pencapaian hasil kerja unit organisasinya."},
    {id:"CPL-10", judul:"Pembelajar Sepanjang Hayat", warna:["#EF9A9A","#8E1B3A"], ikon:"stairs", audio:"audio/cpl-10.mp3", tag:["SA11"],
     teks:"Mampu belajar secara mandiri dan berkelanjutan, beradaptasi terhadap perkembangan teknologi dan perubahan peran kerja dengan menunjukkan daya juang dan ketangguhan (resilience), membangun jejaring profesional, serta mengenali dan memenuhi kebutuhan pengembangan diri melalui pendidikan lanjut, pelatihan, dan sertifikasi profesi."}]}
 ]
};

/* --- ejaan baca untuk mesin suara --- */
const TEKS_SUARA = {
 "VISI-PNP": "Visi Politeknik Negeri Padang. Menjadi perguruan tinggi vokasi yang unggul, inovatif, bermartabat, berkearifan lokal, berorientasi pada keberlanjutan, dan berdaya saing internasional.",
 "VISI-PRODI": "Visi Program Studi Sarjana Terapan Teknik Manufaktur. Menjadi program studi Sarjana Terapan Teknik Manufaktur yang unggul, inovatif, dan berdaya saing internasional dalam manufaktur cerdas dan manufaktur hijau, menghasilkan lulusan kompeten, bermartabat, bertakwa kepada Tuhan Yang Maha Esa, dan berkarakter teknoprener.",
 "PPM-1": "Profil Profesional Mandiri 1. Profesional Rekayasa Manufaktur, Rantai Pasok, dan Mutu. Lulusan menjadi profesional bidang rekayasa manufaktur, rantai pasok, dan mutu yang kompeten dan berdaya saing di industri nasional maupun internasional, mampu merancang, merencanakan, mengoperasikan, mengendalikan, menguji, mengevaluasi, dan mengoptimalkan proses produksi, aliran rantai pasok, serta sistem mutu berbasis data untuk meningkatkan produktivitas, kualitas, efisiensi biaya dan energi, serta keselamatan dan kesehatan kerja; menerapkan prinsip pemanfaatan sumber daya secara efisien dan berkelanjutan, termasuk energi baru terbarukan dan pemanfaatan kembali material; serta mampu memimpin tim kerja pada tingkat penyeliaan hingga manajerial awal.",
 "PPM-2": "Profil Profesional Mandiri 2. Profesional Otomasi dan Transformasi Digital Manufaktur. Lulusan menjadi profesional bidang otomasi dan transformasi digital manufaktur yang mampu merancang, mengintegrasikan, mengoperasikan, memelihara, dan mengembangkan sistem manufaktur otomatis dan cerdas berbasis kendali terprogram, sistem hidrolik dan pneumatik, sensor dan ai-o-ti, serta skada; mampu memprogram dan mensimulasikan sistem robotik industri; serta menguasai rantai digital perancangan hingga manufaktur, yaitu kad, kam, ka-a-e, dan pemesinan se-en-se, dan analitik data untuk meningkatkan keandalan, fleksibilitas, efisiensi, keselamatan, dan daya saing industri.",
 "PPM-3": "Profil Profesional Mandiri 3. Profesional Teknoprener, Manajemen Proyek, dan Konsultansi Teknologi Manufaktur. Lulusan menjadi profesional yang berkarakter kewirausahaan berbasis teknoprener, mampu menciptakan dan mewujudkan nilai, baik melalui perintisan dan pengelolaan usaha maupun melalui prakarsa pengembangan produk, layanan, dan perbaikan di dalam organisasi tempatnya bekerja atau intraprenersyip, dengan menghasilkan gagasan teknologi manufaktur yang inovatif serta layak secara teknis dan ekonomis; mampu merencanakan dan mengendalikan proyek beserta anggaran, kontrak, dan risikonya; serta mampu mengomunikasikan gagasan dan hasil kerja teknis secara efektif, lisan maupun tulisan, kepada pelanggan, vendor, dan pemangku kepentingan, dengan memperhatikan mutu, keselamatan, etika, dan keberlanjutan usaha.",
 "PPM-4": "Profil Profesional Mandiri 4. Profesional Pembelajar Sepanjang Hayat. Lulusan menjadi pribadi yang bertakwa kepada Tuhan Yang Maha Esa, bermartabat, dan menjunjung etika profesi, serta pembelajar sepanjang hayat yang secara mandiri dan berkelanjutan memperbarui pengetahuan dan kompetensinya melalui pendidikan lanjut, pelatihan, dan sertifikasi profesi; beradaptasi terhadap perkembangan teknologi, kebutuhan industri, maupun perubahan peran kerja; menunjukkan daya juang dan ketangguhan, atau resiliensi, dalam menghadapi tekanan dan perubahan; bekerja secara efektif dan kolaboratif dalam tim multidisiplin; membangun jejaring profesional; serta berkontribusi secara bertanggung jawab kepada organisasi, profesi, masyarakat, dan lingkungan.",
 "CPL-1": "Capaian Pembelajaran Lulusan 1. Sikap, Etika, dan Tanggung Jawab Profesi. Menunjukkan sikap religius, berakhlak mulia, dan berkarakter sesuai nilai-nilai Pancasila, serta menerapkan etika profesi keinsinyuran, tanggung jawab keselamatan dan kesehatan kerja, dan kepatuhan terhadap standar, norma, dan peraturan yang berlaku dalam melaksanakan pekerjaan di bidang teknik manufaktur.",
 "CPL-2": "Capaian Pembelajaran Lulusan 2. Pengetahuan Keteknikan. Mampu menerapkan pengetahuan matematika, sains alam, dasar-dasar keteknikan, dan pengetahuan spesialis bidang teknik manufaktur untuk menyelesaikan permasalahan keteknikan yang terdefinisi secara luas pada lingkup pekerjaannya.",
 "CPL-3": "Capaian Pembelajaran Lulusan 3. Analisis Masalah dan Pengambilan Keputusan. Mampu mengidentifikasi, merumuskan, dan menganalisis secara kritis permasalahan keteknikan yang terdefinisi secara luas pada proses dan sistem manufaktur, menggunakan prinsip keteknikan, data terukur, metode analisis terstandar, dan penelusuran literatur yang relevan, sehingga mencapai kesimpulan yang beralasan, mengambil keputusan yang tepat, serta memberikan pertimbangan dalam memilih di antara berbagai alternatif solusi secara mandiri maupun dalam kelompok.",
 "CPL-4": "Capaian Pembelajaran Lulusan 4. Perancangan dan Pengembangan Solusi. Mampu merancang komponen, perkakas, proses, dan sistem manufaktur beserta sistem otomasi dan kendalinya untuk memenuhi kebutuhan yang ditetapkan sesuai standar nasional maupun internasional yang berlaku, dengan mempertimbangkan kelayakan pembuatan, biaya, keselamatan, serta dampak lingkungan dan keberlanjutan.",
 "CPL-5": "Capaian Pembelajaran Lulusan 5. Investigasi, Pengujian, dan Pengendalian Mutu. Mampu merancang dan melaksanakan pengujian serta pengukuran terhadap material, komponen, dan proses manufaktur dengan metode dan alat ukur terstandar, menganalisis dan menafsirkan data hasil pengujian untuk menarik kesimpulan yang sahih, serta menerapkannya dalam sistem pengendalian dan penjaminan mutu berbasis data.",
 "CPL-6": "Capaian Pembelajaran Lulusan 6. Penggunaan dan Pemeliharaan Perangkat Modern. Mampu memilih, menggunakan, dan memelihara perangkat lunak serta perangkat keras modern bidang manufaktur, meliputi kad, kam, ka-a-e, mesin se-en-se, kendali terprogram, sistem hidrolik dan pneumatik, sensor dan ai-o-ti, skada, simulasi sistem robotik, serta perkakas analitik data, dengan memahami keterbatasan masing-masing perangkat dan menjaga keandalan operasinya.",
 "CPL-7": "Capaian Pembelajaran Lulusan 7. Keteknikan, Masyarakat, dan Keberlanjutan. Mampu menilai dampak kegiatan dan solusi manufaktur terhadap masyarakat, keselamatan dan kesehatan kerja, serta lingkungan, termasuk melalui identifikasi bahaya dan penilaian risiko proses, dan menerapkan prinsip efisiensi sumber daya dan energi, pemanfaatan kembali material, serta energi baru terbarukan dalam praktik keteknikan yang berkelanjutan.",
 "CPL-8": "Capaian Pembelajaran Lulusan 8. Kerja Tim dan Komunikasi. Mampu bekerja secara efektif sebagai anggota maupun pemimpin dalam tim kerja yang beragam dan multidisiplin, serta mengomunikasikan gagasan dan hasil kerja teknis secara lisan dan tulisan, dalam bentuk laporan, gambar teknik, dan presentasi, kepada kalangan teknis maupun non-teknis.",
 "CPL-9": "Capaian Pembelajaran Lulusan 9. Manajemen Proyek, Ekonomi Teknik, dan Kewirausahaan. Mampu menerapkan prinsip manajemen proyek, ekonomi teknik, dan kewirausahaan berbasis teknoprener dalam merencanakan, menganggarkan, dan mengendalikan pekerjaan keteknikan, baik melalui perintisan usaha sendiri maupun melalui prakarsa penciptaan nilai di dalam organisasi tempatnya bekerja atau intraprenersyip, termasuk menilai kelayakan teknis dan ekonomis serta mengelola risiko, kontrak, dan rantai pasok, serta memikul tanggung jawab atas pencapaian hasil kerja unit organisasinya.",
 "CPL-10": "Capaian Pembelajaran Lulusan 10. Pembelajar Sepanjang Hayat. Mampu belajar secara mandiri dan berkelanjutan, beradaptasi terhadap perkembangan teknologi dan perubahan peran kerja dengan menunjukkan daya juang dan ketangguhan, atau resiliensi, membangun jejaring profesional, serta mengenali dan memenuhi kebutuhan pengembangan diri melalui pendidikan lanjut, pelatihan, dan sertifikasi profesi.",
 "MENU-1": "Laman satu, Beranda. Memuat profil Program Studi Sarjana Terapan Teknik Manufaktur, Visi Politeknik Negeri Padang dan Visi Program Studi, serta jalan masuk ke seluruh laman kurikulum.",
 "MENU-2": "Laman dua, pe-pe-em dan se-pe-el. Memuat empat Profil Profesional Mandiri dan sepuluh Capaian Pembelajaran Lulusan, masing-masing dengan tombol hidup-mati. Tekan satu tombol untuk membuka rumusan lengkapnya sekaligus mendengarkannya.",
 "MENU-3": "Laman tiga, Pengetahuan. Memuat dua puluh enam butir pengetahuan yang menopang sepuluh Capaian Pembelajaran Lulusan, disusun mengikuti Four Pillars of Manufacturing Engineering dari Society of Manufacturing Engineers.",
 "MENU-4": "Laman empat, Materi Pembelajaran. Memuat 185 butir materi pembelajaran yang bernaung di bawah dua puluh enam pengetahuan. Inilah bahan kajian yang nanti diturunkan menjadi bahan kajian mingguan di dalam er-pe-es.",
 "MENU-5": "Laman lima, Struktur Mata Kuliah. Memuat lima puluh dua mata kuliah, seratus empat puluh enam es-ka-es, tersebar pada delapan semester. Tekan satu mata kuliah untuk melihat rinciannya: pengetahuan penopang, bahan kajian, capaian yang dipikul, titik asesmen, mata kuliah prasyarat, dan status er-pe-es-nya.",
 "MENU-6": "Laman enam, Peta Kurikulum i, er, em, a dan Assessment Plan. Memuat matriks lima puluh dua mata kuliah terhadap sepuluh capaian pembelajaran dengan tingkat Introduced, Reinforced, Mastery, dan Assessed, beserta dua puluh lima titik asesmen beserta instrumennya.",
 "P1": "Pengetahuan 1. Matematika terapan dan statistika. Termasuk Fondasi. Menopang capaian se-pe-el 2, se-pe-el 3, se-pe-el 5. Beban 7 es-ka-es. Mata kuliah penopang: Matematika Terapan I, Matematika Terapan II, Statistika dan Desain Eksperimen. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-1": "Materi pembelajaran di bawah Pengetahuan 1, Matematika terapan dan statistika. Terdiri atas 6 butir. Butir 1. Aljabar, trigonometri, dan fungsi untuk penyelesaian persoalan keteknikan. Butir 2. Kalkulus diferensial dan integral serta penerapannya pada laju, luas bidang, volume, dan titik berat. Butir 3. Vektor, matriks, dan sistem persamaan linear untuk analisis gaya dan kinematika mekanisme. Butir 4. Statistika deskriptif: penyajian data, ukuran pemusatan, dan ukuran penyebaran. Butir 5. Distribusi peluang, penarikan sampel, pendugaan parameter, dan pengujian hipotesis. Butir 6. Rancangan percobaan: rancangan faktorial, metode Taguchi, dan analisis variansi, ANOVA.",
 "P2": "Pengetahuan 2. Fisika terapan, termodinamika, dan mekanika fluida. Termasuk Fondasi. Menopang capaian se-pe-el 2. Beban 5 es-ka-es. Mata kuliah penopang: Fisika Terapan, Termodinamika dan Mekanika Fluida. Pengetahuan ini dijabarkan menjadi 9 butir materi pembelajaran.",
 "MP-2": "Materi pembelajaran di bawah Pengetahuan 2, Fisika terapan, termodinamika, dan mekanika fluida. Terdiri atas 9 butir. Butir 1. Kinematika dan dinamika benda: gaya, momen, usaha, energi, dan momentum. Butir 2. Getaran mekanis dan bunyi serta pengaruhnya pada mesin perkakas. Butir 3. Kalor, suhu, pemuaian bahan, dan sifat termal logam. Butir 4. Perpindahan panas: konduksi, konveksi, dan radiasi. Butir 5. Hukum pertama termodinamika: kerja, kalor, dan energi dalam pada sistem tertutup dan terbuka. Butir 6. Hukum kedua termodinamika, entropi, dan efisiensi siklus daya. Butir 7. Statika fluida: tekanan, gaya hidrostatis, dan daya apung. Butir 8. Dinamika fluida: asas kekekalan massa, persamaan Bernoulli, dan penerapannya. Butir 9. Aliran dalam saluran tertutup: bilangan Reynolds, kerugian gesek, dan kerugian setempat.",
 "P3": "Pengetahuan 3. Ilmu bahan teknik, metalurgi, dan kimia material. Termasuk Pilar 1, Materials and Manufacturing Processes. Menopang capaian se-pe-el 2, se-pe-el 5. Beban 7 es-ka-es. Mata kuliah penopang: Teknologi Bahan I, Teknologi Bahan II, Praktek Pengujian Bahan. Pengetahuan ini dijabarkan menjadi 10 butir materi pembelajaran.",
 "MP-3": "Materi pembelajaran di bawah Pengetahuan 3, Ilmu bahan teknik, metalurgi, dan kimia material. Terdiri atas 10 butir. Butir 1. Struktur atom, ikatan, dan struktur kristal logam serta cacat kristal. Butir 2. Diagram fasa dan diagram besi–karbon. Butir 3. Sifat mekanis bahan: kekuatan, kekerasan, keuletan, dan ketangguhan. Butir 4. Prosedur uji bahan merusak: uji tarik, uji kekerasan, dan uji impak Charpy. Butir 5. Pengujian tak merusak, en-de-te,: penetran, partikel magnetik, ultrasonik, dan radiografi. Butir 6. Perlakuan panas baja: pengerasan, pelunakan, penormalan, dan penemperan. Butir 7. Logam non-ferro dan paduannya: aluminium, tembaga, dan paduan ringan. Butir 8. Teori korosi: mekanisme elektrokimia, jenis korosi, dan asas pengendaliannya. Butir 9. Analisis kegagalan material: patah ulet, patah getas, lelah, fatigue, dan mulur, creep. Butir 10. Bahan bukan logam: polimer, keramik, dan komposit, struktur dan sifatnya.",
 "P4": "Pengetahuan 4. Proses pemesinan konvensional dan se-en-se. Termasuk Pilar 1, Materials and Manufacturing Processes. Menopang capaian se-pe-el 2, se-pe-el 6. Beban 15.5 es-ka-es. Mata kuliah penopang: Teknologi Mekanik, Praktek Teknologi Mekanik I, Praktek Teknologi Mekanik II, Proses Manufaktur, Praktek Proses Manufaktur I, Praktek Proses Manufaktur II, Praktek e-de-em dan Pengolahan Plastik. Pengetahuan ini dijabarkan menjadi 11 butir materi pembelajaran.",
 "MP-4": "Materi pembelajaran di bawah Pengetahuan 4, Proses pemesinan konvensional dan se-en-se. Terdiri atas 11 butir. Butir 1. Teori pemotongan logam: pembentukan geram, geometri pahat, serta gaya dan daya potong. Butir 2. Proses bubut: jenis pekerjaan, perkakas, parameter potong, dan perhitungan waktu. Butir 3. Proses frais dan sekrap: jenis pekerjaan, perkakas, dan parameter potong. Butir 4. Proses gurdi, bor, reamer, serta pembuatan ulir dengan mesin. Butir 5. Dasar mesin se-en-se: sistem koordinat, titik nol, lintasan gerak, dan orientasi perkakas. Butir 6. Pemrograman se-en-se, kode G dan M, serta penyetelan mesin, perkakas, dan benda kerja. Butir 7. Proses gerinda: gerinda datar, gerinda silindris, pemilihan batu gerinda, dan pengasahan pahat, tool grinding. Butir 8. Keselamatan kerja mesin perkakas: bahaya, alat pelindung diri, dan prosedur aman. Butir 9. Kerja bangku: menandai, menggergaji, mengikir, mengebor, mengetap, dan menyenai. Butir 10. Pemesinan nonkonvensional: e-de-em sinking dan wire-cut. Butir 11. Perencanaan proses pemesinan: urutan pengerjaan, pemilihan mesin dan pahat, serta lembar proses.",
 "P5": "Pengetahuan 5. Proses pengelasan dan pembentukan logam. Termasuk Pilar 1, Materials and Manufacturing Processes. Menopang capaian se-pe-el 2, se-pe-el 4. Beban 2 es-ka-es. Mata kuliah penopang: Teknologi Mekanik, bagian fabrikasi, Praktek Teknologi Mekanik I, job las em-em-a dan las gas. Pengetahuan ini dijabarkan menjadi 8 butir materi pembelajaran.",
 "MP-5": "Materi pembelajaran di bawah Pengetahuan 5, Proses pengelasan dan pembentukan logam. Terdiri atas 8 butir. Butir 1. Dasar pengelasan dan fabrikasi: klasifikasi proses, jenis sambungan, posisi pengelasan, dan simbol las. Butir 2. Las gas, oksi-asetilena,: peralatan, jenis nyala api, teknik pengelasan, serta brazing dan soldering. Butir 3. Las busur elektroda terbungkus, es-em-a-we,: mesin, elektroda, parameter, dan teknik pengelasan. Butir 4. Las busur gas logam, ji-em-a-we atau mig, dan las busur gas tungsten, ji-ti-a-we atau tig,: asas kerja, peralatan, dan bidang penerapannya, tingkat pengenalan teoretis. Butir 5. Metalurgi lasan: daerah terpengaruh panas, distorsi, dan tegangan sisa. Butir 6. Cacat lasan: jenis, penyebab, dan pencegahannya. Butir 7. Pengujian tak merusak sambungan las dan kriteria penerimaan mutu lasan. Butir 8. Proses pembentukan logam: pengerolan, penekukan, pemotongan pelat, dan pembentukan lembaran.",
 "P6": "Pengetahuan 6. Proses pengecoran logam. Termasuk Pilar 1, Materials and Manufacturing Processes. Menopang capaian se-pe-el 2, se-pe-el 5, se-pe-el 7. Beban 3 es-ka-es. Mata kuliah penopang: Praktek Pengecoran Logam. Pengetahuan ini dijabarkan menjadi 8 butir materi pembelajaran.",
 "MP-6": "Materi pembelajaran di bawah Pengetahuan 6, Proses pengecoran logam. Terdiri atas 8 butir. Butir 1. Dasar pengecoran: pembekuan logam, fenomena aliran logam cair, dan penyusutan. Butir 2. Pola cor: jenis, bahan, kelonggaran, dan pembuatannya. Butir 3. Pasir cetak: komposisi, pengujian sifat pasir, dan pembuatan cetakan. Butir 4. Inti, core,: bahan, pembuatan, pemasangan, dan pembongkarannya. Butir 5. Perancangan sistem saluran dan penambah, gating and riser design. Butir 6. Peleburan logam: jenis tungku, pengendalian suhu, dan perlakuan logam cair aluminium. Butir 7. Cacat coran: jenis, penyebab, dan pencegahannya. Butir 8. Pembongkaran, pembersihan, dan penyelesaian produk cor.",
 "P7": "Pengetahuan 7. Teknik pelapisan dan rekayasa permukaan. Termasuk Pilar 1, Materials and Manufacturing Processes. Menopang capaian se-pe-el 2, se-pe-el 5, se-pe-el 7. Beban 3 es-ka-es. Mata kuliah penopang: Praktek Teknik Pelapisan. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-7": "Materi pembelajaran di bawah Pengetahuan 7, Teknik pelapisan dan rekayasa permukaan. Terdiri atas 6 butir. Butir 1. Persiapan permukaan: pembersihan, penghilangan lemak, dan pengasaman. Butir 2. Elektroplating: asas elektrokimia, susunan larutan, rapat arus, dan parameter proses. Butir 3. Pelapisan bukan listrik: pencelupan panas, pengecatan, dan pelapisan konversi. Butir 4. Perlakuan permukaan lanjut: anodisasi dan pengerasan permukaan. Butir 5. Pengujian mutu lapisan: ketebalan, daya lekat, dan ketahanan korosi. Butir 6. Pengelolaan limbah cair pelapisan dan keselamatan penanganan bahan kimia.",
 "P8": "Pengetahuan 8. Pemrosesan polimer dan daur ulang material. Termasuk Pilar 1, Materials and Manufacturing Processes. Menopang capaian se-pe-el 5, se-pe-el 7. Beban 1.5 es-ka-es. Mata kuliah penopang: Praktek e-de-em dan Pengolahan Plastik. Pengetahuan ini dijabarkan menjadi 7 butir materi pembelajaran.",
 "MP-8": "Materi pembelajaran di bawah Pengetahuan 8, Pemrosesan polimer dan daur ulang material. Terdiri atas 7 butir. Butir 1. Jenis polimer termoplastik dan termoset, kode resin, dan sifat prosesnya. Butir 2. Proses cetak injeksi: siklus kerja, parameter proses, dan pengendalian mutu produk. Butir 3. Penyetelan mesin injeksi: suhu, tekanan, waktu, serta penanganan cacat produk. Butir 4. Proses ekstrusi, cetak tiup, blow molding, dan termoforming. Butir 5. Pencetakan tiga dimensi, tiga-de printing,: proses FDM, bahan filamen, dan parameter cetak. Butir 6. Rantai daur ulang plastik: pencacahan, pencucian, pengeringan, dan pembuatan pelet. Butir 7. Penurunan mutu polimer daur ulang dan pengujian sifat bahan hasil daur ulang.",
 "P9": "Pengetahuan 9. Gambar teknik, ji-di dan ti, dan kad. Termasuk Pilar 2, Product, Tooling and Assembly Engineering. Menopang capaian se-pe-el 4, se-pe-el 6. Beban 8 es-ka-es. Mata kuliah penopang: Gambar Teknik, kad I, kad II. Pengetahuan ini dijabarkan menjadi 8 butir materi pembelajaran.",
 "MP-9": "Materi pembelajaran di bawah Pengetahuan 9, Gambar teknik, ji-di dan ti, dan kad. Terdiri atas 8 butir. Butir 1. Dasar gambar teknik: jenis garis, huruf, skala, dan kaidah penyajian. Butir 2. Proyeksi ortogonal, proyeksi piktorial, dan pembacaan gambar kerja. Butir 3. Gambar potongan, penyajian khusus, dan penyederhanaan gambar. Butir 4. Pemberian ukuran, suaian, fit, dan toleransi linear. Butir 5. Toleransi geometri, ji-di dan ti,: lambang, datum, dan penafsirannya. Butir 6. Gambar susunan, daftar bagian, dan tanda pengerjaan permukaan. Butir 7. kad dua dimensi: penggambaran, penyuntingan, pemberian ukuran, dan pencetakan. Butir 8. kad tiga dimensi: pemodelan solid, perakitan, dan pembuatan gambar kerja otomatis.",
 "P10": "Pengetahuan 10. Mekanika teknik dan elemen mesin. Termasuk Pilar 2, Product, Tooling and Assembly Engineering. Menopang capaian se-pe-el 2, se-pe-el 3, se-pe-el 4. Beban 9 es-ka-es. Mata kuliah penopang: Mekanika Teknik I, Mekanika Teknik II, Elemen Mesin I, Elemen Mesin II, Perancangan Konstruksi Mesin. Pengetahuan ini dijabarkan menjadi 9 butir materi pembelajaran.",
 "MP-10": "Materi pembelajaran di bawah Pengetahuan 10, Mekanika teknik dan elemen mesin. Terdiri atas 9 butir. Butir 1. Statika: sistem gaya, kesetimbangan, jenis tumpuan, dan diagram benda bebas. Butir 2. Analisis rangka batang dan penentuan gaya dalam. Butir 3. Tegangan dan regangan: tarik, tekan, geser, serta penetapan tegangan izin. Butir 4. Gaya lintang, momen lentur, dan tegangan lentur pada batang. Butir 5. Puntiran, defleksi, dan tekuk, buckling, pada batang. Butir 6. Sambungan: baut, keling, dan las, perhitungan kekuatannya. Butir 7. Poros, pasak, dan kopling. Butir 8. Bantalan luncur dan bantalan gelinding: pemilihan dan perhitungan umur pakai. Butir 9. Transmisi daya: roda gigi, sabuk, rantai, dan pegas.",
 "P11": "Pengetahuan 11. Perancangan perkakas pembentuk, press tool dan mold. Termasuk Pilar 2, Product, Tooling and Assembly Engineering. Menopang capaian se-pe-el 4. Beban 5 es-ka-es. Mata kuliah penopang: Mold Design, Press Tools Design, Perancangan Konstruksi Mesin. Pengetahuan ini dijabarkan menjadi 9 butir materi pembelajaran.",
 "MP-11": "Materi pembelajaran di bawah Pengetahuan 11, Perancangan perkakas pembentuk, press tool dan mold. Terdiri atas 9 butir. Butir 1. Dasar perancangan perkakas tekan: jenis press tool dan tahapan perancangannya. Butir 2. Proses potong pelat, blanking, piercing,: kelonggaran potong, gaya potong, dan tata letak benda kerja, strip layout. Butir 3. Proses tekuk: perhitungan gaya tekuk, panjang bentangan, dan pembalikan pegas, springback. Butir 4. Proses tarik dalam, deep drawing,: perbandingan tarik, gaya tarik, dan cacat produk. Butir 5. Komponen perkakas tekan, pemilihan mesin press, dan keselamatan operasi press. Butir 6. Dasar perancangan cetakan injeksi: jenis cetakan, susunan pelat, dan sistem pemandu. Butir 7. Sistem saluran cetakan injeksi: sprue, runner, gate, dan penempatannya. Butir 8. Sistem pendingin, sistem pelepas produk, ejector, dan kemiringan dinding, draft. Butir 9. Pemilihan bahan perkakas dan penetapan spesifikasi perlakuan panasnya.",
 "P12": "Pengetahuan 12. Perancangan alat bantu produksi, jig dan fixture. Termasuk Pilar 2, Product, Tooling and Assembly Engineering. Menopang capaian se-pe-el 4. Beban 2 es-ka-es. Mata kuliah penopang: Jig dan Fixture Design. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-12": "Materi pembelajaran di bawah Pengetahuan 12, Perancangan alat bantu produksi, jig dan fixture. Terdiri atas 6 butir. Butir 1. Asas pemosisian benda kerja: enam derajat kebebasan dan kaidah 3-2-1. Butir 2. Unsur pemosisi, locator,: jenis, penempatan, dan ketelitiannya. Butir 3. Unsur pencekam, clamp,: jenis, perhitungan gaya cekam, dan asas pencekaman. Butir 4. Perancangan jig gurdi: bus pengarah, badan jig, dan toleransinya. Butir 5. Perancangan fixture frais dan fixture las. Butir 6. Penumpukan toleransi, tolerance stack-up, dan pengaruhnya terhadap ketelitian produk.",
 "P13": "Pengetahuan 13. kam dan integrasi rantai desain–manufaktur. Termasuk Pilar 2, Product, Tooling and Assembly Engineering. Menopang capaian se-pe-el 4, se-pe-el 6. Beban 3 es-ka-es. Mata kuliah penopang: kad-kam. Pengetahuan ini dijabarkan menjadi 5 butir materi pembelajaran.",
 "MP-13": "Materi pembelajaran di bawah Pengetahuan 13, kam dan integrasi rantai desain–manufaktur. Terdiri atas 5 butir. Butir 1. Alur kerja kad–kam–se-en-se dan pertukaran berkas, IGES, STEP, DXF. Butir 2. Pemilihan strategi pemesinan: pengasaran, penyelesaian, dan penetapan lintasan pahat. Butir 3. Penetapan parameter pemotongan dan pengelolaan pustaka perkakas pada perangkat lunak kam. Butir 4. Simulasi lintasan pahat, deteksi tabrakan, dan pembangkitan kode NC, post-processing. Butir 5. Pengalihan program ke mesin, verifikasi benda kerja pertama, dan dokumentasi proses.",
 "P14": "Pengetahuan 14. Metrologi, pengendalian dan penjaminan mutu. Termasuk Pilar 3, Manufacturing Systems and Operations. Menopang capaian se-pe-el 5. Beban 3 es-ka-es. Mata kuliah penopang: Metrologi dan Pengendalian Mutu. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-14": "Materi pembelajaran di bawah Pengetahuan 14, Metrologi, pengendalian dan penjaminan mutu. Terdiri atas 6 butir. Butir 1. Asas metrologi: satuan, ketertelusuran, ketelitian, kecermatan, dan kalibrasi. Butir 2. Pengukuran dimensi: jangka sorong, mikrometer, jam ukur, dan blok ukur. Butir 3. Pengukuran geometri dan kekasaran permukaan serta pemeriksaan ji-di dan ti. Butir 4. Pengendalian proses statistik, es-pe-se,: peta kendali dan kemampuan proses, Cp, Cpk. Butir 5. Pemeriksaan penerimaan, pengambilan sampel, dan penanganan produk tidak sesuai. Butir 6. Sistem manajemen mutu ISO 9001 dan perkakas perbaikan mutu, diagram sebab-akibat, Pareto, 5 Mengapa.",
 "P15": "Pengetahuan 15. Teknik listrik dan elektronika industri. Termasuk Pilar 3, Manufacturing Systems and Operations. Menopang capaian se-pe-el 6. Beban 2 es-ka-es. Mata kuliah penopang: Praktek Teknik Listrik dan Elektronika. Pengetahuan ini dijabarkan menjadi 5 butir materi pembelajaran.",
 "MP-15": "Materi pembelajaran di bawah Pengetahuan 15, Teknik listrik dan elektronika industri. Terdiri atas 5 butir. Butir 1. Rangkaian listrik arus searah dan arus bolak-balik serta pengukuran besaran listrik. Butir 2. Keselamatan kelistrikan: bahaya sengatan, pembumian, dan pengamanan rangkaian. Butir 3. Motor listrik dan pengendalinya: motor induksi, kontaktor, dan rangkaian kendali. Butir 4. Komponen elektronika dasar dan rangkaian catu daya. Butir 5. Pembacaan diagram kelistrikan mesin dan penelusuran gangguan sederhana.",
 "P16": "Pengetahuan 16. Otomasi, pe-el-se, hidrolik–pneumatik. Termasuk Pilar 3, Manufacturing Systems and Operations. Menopang capaian se-pe-el 4, se-pe-el 6. Beban 8 es-ka-es. Mata kuliah penopang: Pneumatik dan Hidrolik, Automasi Industri I, Automasi Industri II. Pengetahuan ini dijabarkan menjadi 8 butir materi pembelajaran.",
 "MP-16": "Materi pembelajaran di bawah Pengetahuan 16, Otomasi, pe-el-se, hidrolik–pneumatik. Terdiri atas 8 butir. Butir 1. Dasar sistem pneumatik: sumber udara, komponen, simbol, dan rangkaian dasar. Butir 2. Dasar sistem hidrolik: pompa, katup, aktuator, dan rangkaian dasar. Butir 3. Rangkaian kendali elektropneumatik dan elektrohidrolik. Butir 4. Dasar pe-el-se: arsitektur, modul masukan–keluaran, dan pengalamatan. Butir 5. Pemrograman pe-el-se: diagram tangga, pewaktu, pencacah, dan kendali berurutan. Butir 6. Robot industri: struktur, sistem koordinat, serta pemrograman dan simulasi gerak. Butir 7. Keselamatan sistem otomasi: penjagaan mesin, henti darurat, dan prosedur loto. Butir 8. Pemaduan sistem otomasi: sensor, aktuator, dan antarmuka operator, ha-em-i.",
 "P17": "Pengetahuan 17. Sensor, ai-o-ti, skada, analitik data, dan dasar kecerdasan artifisial. Termasuk Pilar 3, Manufacturing Systems and Operations. Menopang capaian se-pe-el 3, se-pe-el 6. Beban 4 es-ka-es. Mata kuliah penopang: Pemrograman Komputer dan Dasar Kecerdasan Artifisial, Literasi Digital dan Akuisisi Data Manufaktur. Pengetahuan ini dijabarkan menjadi 8 butir materi pembelajaran.",
 "MP-17": "Materi pembelajaran di bawah Pengetahuan 17, Sensor, ai-o-ti, skada, analitik data, dan dasar kecerdasan artifisial. Terdiri atas 8 butir. Butir 1. Dasar algoritma dan pemrograman terstruktur: struktur kendali, tipe data, dan fungsi. Butir 2. Sensor industri: jenis, asas kerja, dan kaidah pemilihannya. Butir 3. Akuisisi data: pengubah analog-digital, laju cuplik, dan penanganan derau. Butir 4. Jaringan industri, Internet of Things, ai-o-ti, dan asas sistem skada. Butir 5. Pengolahan dan penyajian visual data proses manufaktur. Butir 6. Analitik data manufaktur: kecenderungan, korelasi, dan penarikan simpulan dari data mesin. Butir 7. Dasar kecerdasan artifisial: ruang lingkup, jenis pembelajaran mesin, dan keterbatasannya. Butir 8. Penerapan kecerdasan artifisial di manufaktur: pemeriksaan visual, perawatan prediktif, dan etika penggunaannya.",
 "P18": "Pengetahuan 18. Perawatan dan keandalan mesin. Termasuk Pilar 3, Manufacturing Systems and Operations. Menopang capaian se-pe-el 6. Beban 3 es-ka-es. Mata kuliah penopang: Perawatan dan Keandalan Mesin. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-18": "Materi pembelajaran di bawah Pengetahuan 18, Perawatan dan keandalan mesin. Terdiri atas 6 butir. Butir 1. Strategi perawatan: korektif, preventif, prediktif, dan perawatan mandiri operator. Butir 2. Pelumasan: jenis pelumas, sistem pelumasan, dan jadwal penggantian. Butir 3. Pemantauan kondisi: getaran, suhu, kebisingan, dan analisis pelumas. Butir 4. Keandalan: laju kegagalan, em-te-be-ef, em-te-te-er, dan ketersediaan mesin. Butir 5. Perencanaan dan penjadwalan perawatan serta pengelolaan suku cadang. Butir 6. Analisis kerusakan mesin: penelusuran akar masalah dan penetapan tindakan perbaikan.",
 "P19": "Pengetahuan 19. pe-pe-ai-se dan rantai pasok. Termasuk Pilar 3, Manufacturing Systems and Operations. Menopang capaian se-pe-el 9. Beban 2 es-ka-es. Mata kuliah penopang: pe-pe-ai-se dan Manajemen Rantai Pasok. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-19": "Materi pembelajaran di bawah Pengetahuan 19, pe-pe-ai-se dan rantai pasok. Terdiri atas 6 butir. Butir 1. Peramalan permintaan dan perencanaan produksi agregat. Butir 2. Jadwal induk produksi dan perencanaan kebutuhan bahan, em-er-pe. Butir 3. Pengendalian persediaan: i-o-kyu, persediaan pengaman, dan titik pemesanan ulang. Butir 4. Penjadwalan produksi dan pengurutan pekerjaan di lantai pabrik. Butir 5. Manajemen rantai pasok: pemasok, pengadaan, distribusi, dan pengukuran kinerjanya. Butir 6. Pengenalan tata letak fasilitas dan sistem informasi manufaktur, i-er-pe atau em-i-es.",
 "P20": "Pengetahuan 20. Ekonomi teknik dan manajemen proyek. Termasuk Pilar 4, Manufacturing Competitiveness. Menopang capaian se-pe-el 3, se-pe-el 9. Beban 2 es-ka-es. Mata kuliah penopang: Ekonomi Teknik dan Manajemen Proyek. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-20": "Materi pembelajaran di bawah Pengetahuan 20, Ekonomi teknik dan manajemen proyek. Terdiri atas 6 butir. Butir 1. Nilai waktu uang, bunga, dan penyusunan aliran kas proyek. Butir 2. Penilaian kelayakan investasi: en-pe-fe, i-er-er, periode pengembalian, dan titik impas. Butir 3. Perhitungan biaya produksi: biaya bahan, upah kerja, dan biaya tak langsung. Butir 4. Perencanaan proyek: lingkup, struktur rincian kerja, penjadwalan CPM dan diagram Gantt. Butir 5. Manajemen risiko proyek: identifikasi, penilaian, dan penanganan risiko. Butir 6. Pengendalian biaya dan waktu proyek serta dasar kontrak pengadaan.",
 "P21": "Pengetahuan 21. Kewirausahaan teknoprener dan inovasi produk. Termasuk Pilar 4, Manufacturing Competitiveness. Menopang capaian se-pe-el 9. Beban 2 es-ka-es. Mata kuliah penopang: Kewirausahaan teknoprener. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-21": "Materi pembelajaran di bawah Pengetahuan 21, Kewirausahaan teknoprener dan inovasi produk. Terdiri atas 6 butir. Butir 1. Pola pikir kewirausahaan, intraprenersyip, dan pengenalan peluang usaha. Butir 2. Riset pasar sederhana dan pengenalan kebutuhan pengguna. Butir 3. Model bisnis dan proposisi nilai produk berbasis teknologi. Butir 4. Pengembangan produk: purwarupa, uji pasar, dan perbaikan berulang. Butir 5. Penyusunan rencana usaha dan perhitungan kelayakannya. Butir 6. Legalitas usaha, perlindungan kekayaan intelektual produk, dan penyajian gagasan kepada calon mitra.",
 "P22": "Pengetahuan 22. Konversi energi dan energi baru terbarukan, PENCIRI. Termasuk Pilar 4, Manufacturing Competitiveness. Menopang capaian se-pe-el 5, se-pe-el 7. Beban 3 es-ka-es. Mata kuliah penopang: Teknologi Konversi Energi dan e-be-te. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-22": "Materi pembelajaran di bawah Pengetahuan 22, Konversi energi dan energi baru terbarukan, PENCIRI. Terdiri atas 6 butir. Butir 1. Asas konversi energi, neraca energi, dan efisiensi. Butir 2. Mesin fluida: pompa, kompresor, dan turbin, asas kerja dan unjuk kerjanya. Butir 3. Pembangkit tenaga air skala kecil: pikohidro dan mikrohidro. Butir 4. Turbin air aliran silang, cross flow,: asas kerja, bagian utama, dan perhitungan daya. Butir 5. Sumber energi terbarukan lain: surya, angin, dan biomassa. Butir 6. Efisiensi energi di industri dan audit energi sederhana.",
 "P23": "Pengetahuan 23. ka-tiga-el, keberlanjutan, dan manufaktur sirkular, PENCIRI. Termasuk Pilar 4, Manufacturing Competitiveness. Menopang capaian se-pe-el 1, se-pe-el 7. Beban 1 es-ka-es. Mata kuliah penopang: ka-tiga dan Hukum Ketenagakerjaan, menyertai seluruh em-ka praktek. Pengetahuan ini dijabarkan menjadi 6 butir materi pembelajaran.",
 "MP-23": "Materi pembelajaran di bawah Pengetahuan 23, ka-tiga-el, keberlanjutan, dan manufaktur sirkular, PENCIRI. Terdiri atas 6 butir. Butir 1. Dasar ka-tiga: perundangan, kelembagaan, dan budaya keselamatan. Butir 2. Identifikasi bahaya dan penilaian risiko keselamatan kerja, hiradek. Butir 3. Alat pelindung diri, rambu keselamatan, dan tanggap darurat di bengkel dan pabrik. Butir 4. Pengelolaan lingkungan industri: limbah padat, limbah cair, dan emisi. Butir 5. Manufaktur sirkular: pemanfaatan kembali sumber daya, daur ulang, dan jejak karbon. Butir 6. Keberlanjutan dalam perancangan produk: biaya daur hidup dan rancangan ramah lingkungan.",
 "P24": "Pengetahuan 24. Etika profesi, hukum ketenagakerjaan, dan nilai kebangsaan. Termasuk Penunjang Profesional. Menopang capaian se-pe-el 1. Beban 9 es-ka-es. Mata kuliah penopang: Pendidikan Agama, Pancasila, Pendidikan Kewarganegaraan, Etika Profesi, ka-tiga dan Hukum Ketenagakerjaan. Pengetahuan ini dijabarkan menjadi 8 butir materi pembelajaran.",
 "MP-24": "Materi pembelajaran di bawah Pengetahuan 24, Etika profesi, hukum ketenagakerjaan, dan nilai kebangsaan. Terdiri atas 8 butir. Butir 1. Pancasila sebagai dasar negara, ideologi, dan sistem nilai bangsa. Butir 2. Kewarganegaraan: identitas nasional, hak dan kewajiban warga negara, serta wawasan nusantara. Butir 3. Nilai keagamaan, akhlak, dan kerukunan dalam kehidupan bermasyarakat. Butir 4. Etika akademik, kejujuran ilmiah, dan pencegahan plagiarisme. Butir 5. Etika profesi keinsinyuran: kode etik, tanggung jawab profesi, dan pengambilan keputusan etis. Butir 6. Hukum ketenagakerjaan: hubungan kerja, hak dan kewajiban pekerja, dan penyelesaian perselisihan. Butir 7. Tanggung jawab profesi terhadap keselamatan publik dan kelestarian lingkungan. Butir 8. Penghormatan atas kekayaan intelektual pihak lain dan penjagaan kerahasiaan data perusahaan.",
 "P25": "Pengetahuan 25. Komunikasi teknis, bahasa, dan kerja tim. Termasuk Penunjang Profesional. Menopang capaian se-pe-el 8, se-pe-el 10. Beban 6 es-ka-es. Mata kuliah penopang: Bahasa Indonesia, Komunikasi Teknis, Bahasa Inggris Teknik. Pengetahuan ini dijabarkan menjadi 7 butir materi pembelajaran.",
 "MP-25": "Materi pembelajaran di bawah Pengetahuan 25, Komunikasi teknis, bahasa, dan kerja tim. Terdiri atas 7 butir. Butir 1. Bahasa Indonesia ragam ilmiah: ejaan, kalimat efektif, dan pengembangan paragraf. Butir 2. Penulisan laporan teknis: struktur, penyajian data, tabel, dan gambar. Butir 3. Penyajian lisan dan teknik presentasi teknis. Butir 4. Dokumen teknis dan korespondensi kerja: surat, memo, notula, dan spesifikasi. Butir 5. Bahasa Inggris teknik: pembacaan manual mesin, standar, dan katalog. Butir 6. Bahasa Inggris teknik: penulisan ringkas dan percakapan di lingkungan kerja. Butir 7. Kerja tim: pembagian peran, dinamika kelompok, penyelesaian konflik, dan kepemimpinan regu.",
 "P26": "Pengetahuan 26. Metodologi penelitian terapan dan penelusuran literatur. Termasuk Penunjang Profesional. Menopang capaian se-pe-el 3, se-pe-el 5, se-pe-el 10. Beban 2 es-ka-es. Mata kuliah penopang: Metodologi Penelitian Terapan. Pengetahuan ini dijabarkan menjadi 5 butir materi pembelajaran.",
 "MP-26": "Materi pembelajaran di bawah Pengetahuan 26, Metodologi penelitian terapan dan penelusuran literatur. Terdiri atas 5 butir. Butir 1. Penelusuran literatur: pangkalan data, jurnal, standar, dan penilaian mutu sumber. Butir 2. Perumusan masalah, tujuan, dan kerangka berpikir penelitian terapan. Butir 3. Rancangan penelitian terapan, penetapan variabel, dan instrumen pengumpulan data. Butir 4. Pengolahan dan penafsiran data penelitian serta penarikan simpulan. Butir 5. Penulisan proposal dan laporan penelitian serta tata cara perujukan, sitasi.",
 "SMT-1": "Semester I. Beban 20 es-ka-es, terdiri atas 9 mata kuliah. Bahasa Indonesia, 2 es-ka-es; Matematika Terapan I, 2 es-ka-es; Fisika Terapan, 2 es-ka-es; Gambar Teknik, 3 es-ka-es; Teknologi Bahan I, 2 es-ka-es; Teknologi Mekanik, 2 es-ka-es; Praktek Teknologi Mekanik I, 3 es-ka-es; ka-tiga dan Hukum Ketenagakerjaan, 2 es-ka-es; Pemrograman Komputer dan Dasar Kecerdasan Artifisial, 2 es-ka-es. Minggu kalender ke-sembilan diisi kegiatan pe-ka-em, tanpa perkuliahan.",
 "MK-1": "Bahasa Indonesia. Semester I, 2 es-ka-es, setara 90 jam per semester. Kelompok MKWN. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 25. Memikul se-pe-el 8 tingkat Introduced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-2": "Matematika Terapan I. Semester I, 2 es-ka-es, setara 90 jam per semester. Kelompok Dasar. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 1. Memikul se-pe-el 2 tingkat Introduced, se-pe-el 3 tingkat Introduced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-3": "Fisika Terapan. Semester I, 2 es-ka-es, setara 90 jam per semester. Kelompok Dasar. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 2. Memikul se-pe-el 2 tingkat Introduced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-4": "Gambar Teknik. Semester I, 3 es-ka-es, setara 135 jam per semester. Kelompok Dasar. Bentuk pembelajaran: Teori + studio gambar. Pengetahuan penopang: pe 9. Memikul se-pe-el 4 tingkat Introduced, se-pe-el 8 tingkat Introduced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-5": "Teknologi Bahan I. Semester I, 2 es-ka-es, setara 90 jam per semester. Kelompok Dasar. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 3. Memikul se-pe-el 2 tingkat Introduced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-6": "Teknologi Mekanik. Semester I, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 4, pe 5. Memikul se-pe-el 2 tingkat Introduced, se-pe-el 6 tingkat Introduced. Tanpa prasyarat. er-pe-es lengkap sudah tersedia.",
 "MK-7": "Praktek Teknologi Mekanik I. Semester I, 3 es-ka-es, setara 135 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek bengkel, 4 job. Pengetahuan penopang: pe 4, pe 5, pe 25. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 6 tingkat Introduced, se-pe-el 8 tingkat Introduced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-8": "ka-tiga dan Hukum Ketenagakerjaan. Semester I, 2 es-ka-es, setara 90 jam per semester. Kelompok Penciri ka-tiga-el. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 23, pe 24. Memikul se-pe-el 1 tingkat Introduced, se-pe-el 7 tingkat Introduced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-9": "Pemrograman Komputer dan Dasar Kecerdasan Artifisial. Semester I, 2 es-ka-es, setara 90 jam per semester. Kelompok Dasar digital. Bentuk pembelajaran: Teori + laboratorium komputer. Pengetahuan penopang: pe 17. Memikul se-pe-el 3 tingkat Introduced, se-pe-el 6 tingkat Introduced. Tanpa prasyarat. er-pe-es belum disusun.",
 "SMT-2": "Semester II. Beban 20 es-ka-es, terdiri atas 9 mata kuliah. Pendidikan Agama, 2 es-ka-es; Pancasila, 2 es-ka-es; Matematika Terapan II, 2 es-ka-es; Teknologi Bahan II, 2 es-ka-es; Mekanika Teknik I, 2 es-ka-es; kad I, 3 es-ka-es; Praktek Teknik Listrik dan Elektronika, 2 es-ka-es; Praktek Teknologi Mekanik II, 3 es-ka-es; Komunikasi Teknis, 2 es-ka-es. Minggu kalender ke-sembilan diisi kegiatan pe-ka-em, tanpa perkuliahan.",
 "MK-10": "Pendidikan Agama. Semester II, 2 es-ka-es, setara 90 jam per semester. Kelompok MKWN. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 24. Memikul se-pe-el 1 tingkat Reinforced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-11": "Pancasila. Semester II, 2 es-ka-es, setara 90 jam per semester. Kelompok MKWN. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 24. Memikul se-pe-el 1 tingkat Reinforced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-12": "Matematika Terapan II. Semester II, 2 es-ka-es, setara 90 jam per semester. Kelompok Dasar. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 1. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 3 tingkat Reinforced. Prasyarat: Matematika Terapan I. er-pe-es belum disusun.",
 "MK-13": "Teknologi Bahan II. Semester II, 2 es-ka-es, setara 90 jam per semester. Kelompok Dasar. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 3. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 5 tingkat Introduced. Prasyarat: Teknologi Bahan I. er-pe-es belum disusun.",
 "MK-14": "Mekanika Teknik I. Semester II, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 10. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 3 tingkat Reinforced. Prasyarat: Fisika Terapan. er-pe-es belum disusun.",
 "MK-15": "kad I. Semester II, 3 es-ka-es, setara 135 jam per semester. Kelompok Inti. Bentuk pembelajaran: Laboratorium komputer. Pengetahuan penopang: pe 9. Memikul se-pe-el 4 tingkat Reinforced, se-pe-el 6 tingkat Reinforced. Prasyarat: Gambar Teknik. er-pe-es belum disusun.",
 "MK-16": "Praktek Teknik Listrik dan Elektronika. Semester II, 2 es-ka-es, setara 90 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek laboratorium. Pengetahuan penopang: pe 15, pe 23, pe 25. Memikul se-pe-el 1 tingkat Reinforced, se-pe-el 6 tingkat Reinforced, se-pe-el 8 tingkat Reinforced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-17": "Praktek Teknologi Mekanik II. Semester II, 3 es-ka-es, setara 135 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek bengkel. Pengetahuan penopang: pe 4, pe 23, pe 25. Memikul se-pe-el 1 tingkat Reinforced, se-pe-el 2 tingkat Reinforced, se-pe-el 6 tingkat Reinforced, se-pe-el 8 tingkat Reinforced. Prasyarat: Praktek Teknologi Mekanik I. er-pe-es belum disusun.",
 "MK-18": "Komunikasi Teknis. Semester II, 2 es-ka-es, setara 90 jam per semester. Kelompok Penunjang. Bentuk pembelajaran: Teori + praktik penyajian. Pengetahuan penopang: pe 25. Memikul se-pe-el 8 tingkat Reinforced. Prasyarat: Bahasa Indonesia. er-pe-es belum disusun.",
 "SMT-3": "Semester III. Beban 20 es-ka-es, terdiri atas 9 mata kuliah. Pendidikan Kewarganegaraan, 2 es-ka-es; Mekanika Teknik II, 2 es-ka-es; Elemen Mesin I, 2 es-ka-es; Proses Manufaktur, 2 es-ka-es; kad II, 2 es-ka-es; Praktek Pengujian Bahan, 3 es-ka-es; Praktek Proses Manufaktur I, 3 es-ka-es; Bahasa Inggris Teknik, 2 es-ka-es; Pneumatik dan Hidrolik, 2 es-ka-es. Minggu kalender ke-sembilan diisi kegiatan pe-ka-em, tanpa perkuliahan.",
 "MK-19": "Pendidikan Kewarganegaraan. Semester III, 2 es-ka-es, setara 90 jam per semester. Kelompok MKWN. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 24. Memikul se-pe-el 1 tingkat Reinforced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-20": "Mekanika Teknik II. Semester III, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 10. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 3 tingkat Reinforced. Prasyarat: Mekanika Teknik I. er-pe-es belum disusun.",
 "MK-21": "Elemen Mesin I. Semester III, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 10. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 4 tingkat Reinforced. Prasyarat: Mekanika Teknik I. er-pe-es belum disusun.",
 "MK-22": "Proses Manufaktur. Semester III, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 4. Memikul se-pe-el 2 tingkat Assessed, se-pe-el 4 tingkat Reinforced. Prasyarat: Teknologi Mekanik. Mata kuliah ini adalah titik asesmen untuk se-pe-el 2. er-pe-es belum disusun.",
 "MK-23": "kad II. Semester III, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Laboratorium komputer. Pengetahuan penopang: pe 9. Memikul se-pe-el 4 tingkat Reinforced, se-pe-el 6 tingkat Reinforced. Prasyarat: kad I. er-pe-es belum disusun.",
 "MK-24": "Praktek Pengujian Bahan. Semester III, 3 es-ka-es, setara 135 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek laboratorium uji bahan. Pengetahuan penopang: pe 3, pe 25. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 5 tingkat Reinforced, se-pe-el 8 tingkat Reinforced. Prasyarat: Teknologi Bahan II. er-pe-es belum disusun.",
 "MK-25": "Praktek Proses Manufaktur I. Semester III, 3 es-ka-es, setara 135 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek bengkel. Pengetahuan penopang: pe 4, pe 25. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 6 tingkat Reinforced, se-pe-el 8 tingkat Reinforced. Prasyarat: Praktek Teknologi Mekanik II. er-pe-es belum disusun.",
 "MK-26": "Bahasa Inggris Teknik. Semester III, 2 es-ka-es, setara 90 jam per semester. Kelompok Penunjang. Bentuk pembelajaran: Teori + praktik bahasa. Pengetahuan penopang: pe 25. Memikul se-pe-el 8 tingkat Reinforced, se-pe-el 10 tingkat Reinforced. Tanpa prasyarat. er-pe-es belum disusun.",
 "MK-27": "Pneumatik dan Hidrolik. Semester III, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori + laboratorium. Pengetahuan penopang: pe 16. Memikul se-pe-el 4 tingkat Reinforced, se-pe-el 6 tingkat Reinforced. Prasyarat: Fisika Terapan. er-pe-es belum disusun.",
 "SMT-4": "Semester IV. Beban 20 es-ka-es, terdiri atas 7 mata kuliah. Statistika dan Desain Eksperimen, 3 es-ka-es; Termodinamika dan Mekanika Fluida, 3 es-ka-es; Elemen Mesin II, 2 es-ka-es; kad-kam, 3 es-ka-es; Metrologi dan Pengendalian Mutu, 3 es-ka-es; Praktek Proses Manufaktur II, 3 es-ka-es; Perawatan dan Keandalan Mesin, 3 es-ka-es. Minggu kalender ke-sembilan diisi kegiatan pe-ka-em, tanpa perkuliahan.",
 "MK-28": "Statistika dan Desain Eksperimen. Semester IV, 3 es-ka-es, setara 135 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori + pengolahan data. Pengetahuan penopang: pe 1. Memikul se-pe-el 3 tingkat Assessed, se-pe-el 5 tingkat Reinforced. Prasyarat: Matematika Terapan II. Mata kuliah ini adalah titik asesmen untuk se-pe-el 3. er-pe-es belum disusun.",
 "MK-29": "Termodinamika dan Mekanika Fluida. Semester IV, 3 es-ka-es, setara 135 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 2. Memikul se-pe-el 2 tingkat Reinforced, se-pe-el 7 tingkat Reinforced. Prasyarat: Fisika Terapan. er-pe-es belum disusun.",
 "MK-30": "Elemen Mesin II. Semester IV, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 10. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 4 tingkat Reinforced. Prasyarat: Elemen Mesin I. er-pe-es belum disusun.",
 "MK-31": "kad-kam. Semester IV, 3 es-ka-es, setara 135 jam per semester. Kelompok Inti. Bentuk pembelajaran: Laboratorium komputer + mesin se-en-se. Pengetahuan penopang: pe 13. Memikul se-pe-el 4 tingkat Reinforced, se-pe-el 6 tingkat Assessed. Prasyarat: kad II. Mata kuliah ini adalah titik asesmen untuk se-pe-el 6. er-pe-es belum disusun.",
 "MK-32": "Metrologi dan Pengendalian Mutu. Semester IV, 3 es-ka-es, setara 135 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori + laboratorium metrologi. Pengetahuan penopang: pe 14. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 5 tingkat Assessed. Prasyarat: Gambar Teknik. Mata kuliah ini adalah titik asesmen untuk se-pe-el 5. er-pe-es belum disusun.",
 "MK-33": "Praktek Proses Manufaktur II. Semester IV, 3 es-ka-es, setara 135 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek bengkel + se-en-se. Pengetahuan penopang: pe 4, pe 25. Memikul se-pe-el 2 tingkat Assessed, se-pe-el 6 tingkat Reinforced, se-pe-el 8 tingkat Reinforced. Prasyarat: Praktek Proses Manufaktur I. Mata kuliah ini adalah titik asesmen untuk se-pe-el 2. er-pe-es belum disusun.",
 "MK-34": "Perawatan dan Keandalan Mesin. Semester IV, 3 es-ka-es, setara 135 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori + praktik perawatan. Pengetahuan penopang: pe 18. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 6 tingkat Assessed. Prasyarat: Elemen Mesin I. Mata kuliah ini adalah titik asesmen untuk se-pe-el 6. er-pe-es belum disusun.",
 "SMT-5": "Semester V. Beban 20 es-ka-es, terdiri atas 8 mata kuliah. Automasi Industri I, 3 es-ka-es; Mold Design, 2 es-ka-es; Press Tools Design, 2 es-ka-es; Praktek Pengecoran Logam, 3 es-ka-es; Praktek Teknik Pelapisan, 3 es-ka-es; Praktek e-de-em dan Pengolahan Plastik, 3 es-ka-es; Ekonomi Teknik dan Manajemen Proyek, 2 es-ka-es; Kewirausahaan teknoprener, 2 es-ka-es. Minggu kalender ke-sembilan diisi kegiatan pe-ka-em, tanpa perkuliahan.",
 "MK-35": "Automasi Industri I. Semester V, 3 es-ka-es, setara 135 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori + laboratorium pe-el-se. Pengetahuan penopang: pe 16. Memikul se-pe-el 4 tingkat Reinforced, se-pe-el 6 tingkat Reinforced. Prasyarat: Pneumatik dan Hidrolik, Praktek Teknik Listrik dan Elektronika. er-pe-es belum disusun.",
 "MK-36": "Mold Design. Semester V, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti perancangan. Bentuk pembelajaran: Perancangan, studio. Pengetahuan penopang: pe 11. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 4 tingkat Mastery. Prasyarat: kad II, Teknologi Bahan II. er-pe-es belum disusun.",
 "MK-37": "Press Tools Design. Semester V, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti perancangan. Bentuk pembelajaran: Perancangan, studio. Pengetahuan penopang: pe 11. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 4 tingkat Mastery. Prasyarat: kad II, Mekanika Teknik II. er-pe-es belum disusun.",
 "MK-38": "Praktek Pengecoran Logam. Semester V, 3 es-ka-es, setara 135 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek bengkel pengecoran. Pengetahuan penopang: pe 6, pe 23, pe 25. Memikul se-pe-el 1 tingkat Reinforced, se-pe-el 2 tingkat Reinforced, se-pe-el 7 tingkat Reinforced, se-pe-el 8 tingkat Assessed. Prasyarat: Teknologi Bahan II. Mata kuliah ini adalah titik asesmen untuk se-pe-el 8. er-pe-es belum disusun.",
 "MK-39": "Praktek Teknik Pelapisan. Semester V, 3 es-ka-es, setara 135 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek bengkel elektroplating. Pengetahuan penopang: pe 7, pe 23, pe 25. Memikul se-pe-el 1 tingkat Reinforced, se-pe-el 5 tingkat Reinforced, se-pe-el 7 tingkat Assessed, se-pe-el 8 tingkat Reinforced. Prasyarat: Teknologi Bahan II. Mata kuliah ini adalah titik asesmen untuk se-pe-el 7. er-pe-es belum disusun.",
 "MK-40": "Praktek e-de-em dan Pengolahan Plastik. Semester V, 3 es-ka-es, setara 135 jam per semester. Kelompok Praktek. Bentuk pembelajaran: Praktek bengkel e-de-em + injection molding + tiga-de printing. Pengetahuan penopang: pe 4, pe 8, pe 25. Memikul se-pe-el 6 tingkat Reinforced, se-pe-el 7 tingkat Reinforced, se-pe-el 8 tingkat Reinforced. Prasyarat: Praktek Proses Manufaktur II. er-pe-es belum disusun.",
 "MK-41": "Ekonomi Teknik dan Manajemen Proyek. Semester V, 2 es-ka-es, setara 90 jam per semester. Kelompok Penunjang. Bentuk pembelajaran: Teori. Pengetahuan penopang: pe 20. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 9 tingkat Reinforced. Prasyarat: Matematika Terapan II. er-pe-es belum disusun.",
 "MK-42": "Kewirausahaan teknoprener. Semester V, 2 es-ka-es, setara 90 jam per semester. Kelompok PENCIRI. Bentuk pembelajaran: Teori + proyek usaha. Pengetahuan penopang: pe 21. Memikul se-pe-el 9 tingkat Reinforced, se-pe-el 10 tingkat Reinforced. Tanpa prasyarat. er-pe-es belum disusun.",
 "SMT-6": "Semester VI. Beban 18 es-ka-es, terdiri atas 8 mata kuliah. Automasi Industri II, 3 es-ka-es; Jig dan Fixture Design, 2 es-ka-es; Teknologi Konversi Energi dan e-be-te, 3 es-ka-es; pe-pe-ai-se dan Manajemen Rantai Pasok, 2 es-ka-es; Literasi Digital dan Akuisisi Data Manufaktur, 2 es-ka-es; Perancangan Konstruksi Mesin, 2 es-ka-es; Metodologi Penelitian Terapan, 2 es-ka-es; Etika Profesi, 2 es-ka-es. Minggu kalender ke-sembilan diisi kegiatan pe-ka-em, tanpa perkuliahan.",
 "MK-43": "Automasi Industri II. Semester VI, 3 es-ka-es, setara 135 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori + laboratorium integrasi. Pengetahuan penopang: pe 16. Memikul se-pe-el 4 tingkat Reinforced, se-pe-el 6 tingkat Assessed. Prasyarat: Automasi Industri I. Mata kuliah ini adalah titik asesmen untuk se-pe-el 6. er-pe-es belum disusun.",
 "MK-44": "Jig dan Fixture Design. Semester VI, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti perancangan. Bentuk pembelajaran: Perancangan, studio. Pengetahuan penopang: pe 12. Memikul se-pe-el 4 tingkat Mastery, se-pe-el 5 tingkat Reinforced. Prasyarat: Press Tools Design, Praktek Proses Manufaktur II. er-pe-es belum disusun.",
 "MK-45": "Teknologi Konversi Energi dan e-be-te. Semester VI, 3 es-ka-es, setara 135 jam per semester. Kelompok PENCIRI. Bentuk pembelajaran: Teori + proyek turbin. Pengetahuan penopang: pe 22. Memikul se-pe-el 5 tingkat Reinforced, se-pe-el 7 tingkat Assessed. Prasyarat: Termodinamika dan Mekanika Fluida. Mata kuliah ini adalah titik asesmen untuk se-pe-el 7. er-pe-es belum disusun.",
 "MK-46": "pe-pe-ai-se dan Manajemen Rantai Pasok. Semester VI, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti. Bentuk pembelajaran: Teori + studi kasus. Pengetahuan penopang: pe 19. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 9 tingkat Assessed. Prasyarat: Ekonomi Teknik dan Manajemen Proyek. Mata kuliah ini adalah titik asesmen untuk se-pe-el 9. er-pe-es belum disusun.",
 "MK-47": "Literasi Digital dan Akuisisi Data Manufaktur. Semester VI, 2 es-ka-es, setara 90 jam per semester. Kelompok PENCIRI. Bentuk pembelajaran: Teori + laboratorium akuisisi data. Pengetahuan penopang: pe 17. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 6 tingkat Reinforced. Prasyarat: Pemrograman Komputer dan Dasar Kecerdasan Artifisial. er-pe-es belum disusun.",
 "MK-48": "Perancangan Konstruksi Mesin. Semester VI, 2 es-ka-es, setara 90 jam per semester. Kelompok Inti perancangan. Bentuk pembelajaran: Perancangan, studio, + design review. Pengetahuan penopang: pe 10, pe 11, pe 25. Memikul se-pe-el 3 tingkat Reinforced, se-pe-el 4 tingkat Assessed, se-pe-el 8 tingkat Assessed. Prasyarat: Elemen Mesin II, kad II. Mata kuliah ini adalah titik asesmen untuk se-pe-el 4, se-pe-el 8. er-pe-es belum disusun.",
 "MK-49": "Metodologi Penelitian Terapan. Semester VI, 2 es-ka-es, setara 90 jam per semester. Kelompok Penunjang. Bentuk pembelajaran: Teori + penyusunan proposal. Pengetahuan penopang: pe 26. Memikul se-pe-el 3 tingkat Mastery, se-pe-el 10 tingkat Assessed. Prasyarat: Statistika dan Desain Eksperimen. Mata kuliah ini adalah titik asesmen untuk se-pe-el 10. er-pe-es belum disusun.",
 "MK-50": "Etika Profesi. Semester VI, 2 es-ka-es, setara 90 jam per semester. Kelompok Penunjang. Bentuk pembelajaran: Teori + studi kasus. Pengetahuan penopang: pe 24. Memikul se-pe-el 1 tingkat Assessed, se-pe-el 10 tingkat Reinforced. Prasyarat: ka-tiga dan Hukum Ketenagakerjaan. Mata kuliah ini adalah titik asesmen untuk se-pe-el 1. er-pe-es belum disusun.",
 "SMT-7": "Semester VII. Beban 20 es-ka-es, terdiri atas 1 mata kuliah. Magang Industri, 20 es-ka-es.",
 "MK-51": "Magang Industri. Semester VII, 20 es-ka-es, setara 900 jam per semester. Kelompok Magang wajib vokasi. Bentuk pembelajaran: Magang industri penuh satu semester. Pengetahuan penopang: seluruh P. Memikul se-pe-el 1 tingkat Assessed, se-pe-el 6 tingkat Mastery, se-pe-el 7 tingkat Reinforced, se-pe-el 8 tingkat Assessed, se-pe-el 9 tingkat Assessed, se-pe-el 10 tingkat Assessed. Prasyarat: Lulus seluruh em-ka semester I–VI, min. 118 es-ka-es. Mata kuliah ini adalah titik asesmen untuk se-pe-el 1, se-pe-el 8, se-pe-el 9, se-pe-el 10. er-pe-es belum disusun.",
 "SMT-8": "Semester VIII. Beban 8 es-ka-es, terdiri atas 1 mata kuliah. kepston Design atau Tugas Akhir, 8 es-ka-es.",
 "MK-52": "kepston Design atau Tugas Akhir. Semester VIII, 8 es-ka-es, setara 360 jam per semester. Kelompok kepston. Bentuk pembelajaran: Proyek rancang bangun atau penelitian terapan. Pengetahuan penopang: seluruh P. Memikul se-pe-el 1 tingkat Reinforced, se-pe-el 2 tingkat Mastery, se-pe-el 3 tingkat Assessed, se-pe-el 4 tingkat Assessed, se-pe-el 5 tingkat Assessed, se-pe-el 6 tingkat Mastery, se-pe-el 7 tingkat Mastery, se-pe-el 8 tingkat Assessed, se-pe-el 9 tingkat Assessed, se-pe-el 10 tingkat Assessed. Prasyarat: Magang Industri, Metodologi Penelitian Terapan, Perancangan Konstruksi Mesin. Mata kuliah ini adalah titik asesmen untuk se-pe-el 3, se-pe-el 4, se-pe-el 5, se-pe-el 8, se-pe-el 9, se-pe-el 10. er-pe-es belum disusun.",
 "IRMA": "Peta Kurikulum i, er, em, a. Matriks lima puluh dua mata kuliah ditambah enam baris pe-ka-em terhadap sepuluh Capaian Pembelajaran Lulusan. Tingkat I berarti Introduced, diperkenalkan; R berarti Reinforced, diperkuat; M berarti Mastery, dikuasai; A berarti Assessed, menjadi titik asesmen resmi. Seluruhnya ada seratus empat puluh sel terisi dan dua puluh lima titik asesmen.",
 "AP": "Assessment Plan tahap satu. Dua puluh lima titik asesmen tersebar pada sepuluh capaian, masing-masing dengan instrumen penilaiannya. Ambang kelulusan: skor tiga setara nilai enam puluh lima untuk tiap mahasiswa, dan tujuh puluh persen kohort pada tingkat program studi. Bila tiga puluh persen atau lebih mahasiswa tidak mencapai ambang, tindak lanjut perbaikan wajib dilakukan."
};

/* --- Pengetahuan (P) & Materi Pembelajaran (MP) --- */
const PILAR = {
 "F": "Fondasi",
 "P1": "Pilar 1 — Materials and Manufacturing Processes",
 "P2": "Pilar 2 — Product, Tooling and Assembly Engineering",
 "P3": "Pilar 3 — Manufacturing Systems and Operations",
 "P4": "Pilar 4 — Manufacturing Competitiveness",
 "PP": "Penunjang Profesional"
};
const P_LIST = [
 {
  "id": "P1",
  "no": 1,
  "nama": "Matematika terapan dan statistika",
  "pilar": "F",
  "pilarNama": "Fondasi",
  "sks": 7,
  "mk": "Matematika Terapan I (2) · Matematika Terapan II (2) · Statistika & Desain Eksperimen (3)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#CE93D8",
   "#6A1B9A"
  ],
  "ikon": "p1",
  "cpl": [
   "CPL-2",
   "CPL-3",
   "CPL-5"
  ],
  "mp": [
   {
    "kode": "MP1.1",
    "teks": "Aljabar, trigonometri, dan fungsi untuk penyelesaian persoalan keteknikan"
   },
   {
    "kode": "MP1.2",
    "teks": "Kalkulus diferensial dan integral serta penerapannya pada laju, luas bidang, volume, dan titik berat"
   },
   {
    "kode": "MP1.3",
    "teks": "Vektor, matriks, dan sistem persamaan linear untuk analisis gaya dan kinematika mekanisme"
   },
   {
    "kode": "MP1.4",
    "teks": "Statistika deskriptif: penyajian data, ukuran pemusatan, dan ukuran penyebaran"
   },
   {
    "kode": "MP1.5",
    "teks": "Distribusi peluang, penarikan sampel, pendugaan parameter, dan pengujian hipotesis"
   },
   {
    "kode": "MP1.6",
    "teks": "Rancangan percobaan: rancangan faktorial, metode Taguchi, dan analisis variansi (ANOVA)"
   }
  ]
 },
 {
  "id": "P2",
  "no": 2,
  "nama": "Fisika terapan, termodinamika, dan mekanika fluida",
  "pilar": "F",
  "pilarNama": "Fondasi",
  "sks": 5,
  "mk": "Fisika Terapan (2) · Termodinamika & Mekanika Fluida (3)",
  "v2": 4,
  "ubah": "nama diperluas · 4 → 9 MP",
  "catatan": "",
  "warna": [
   "#B39DDB",
   "#4527A0"
  ],
  "ikon": "p2",
  "cpl": [
   "CPL-2"
  ],
  "mp": [
   {
    "kode": "MP2.1",
    "teks": "Kinematika dan dinamika benda: gaya, momen, usaha, energi, dan momentum"
   },
   {
    "kode": "MP2.2",
    "teks": "Getaran mekanis dan bunyi serta pengaruhnya pada mesin perkakas"
   },
   {
    "kode": "MP2.3",
    "teks": "Kalor, suhu, pemuaian bahan, dan sifat termal logam"
   },
   {
    "kode": "MP2.4",
    "teks": "Perpindahan panas: konduksi, konveksi, dan radiasi"
   },
   {
    "kode": "MP2.5",
    "teks": "Hukum pertama termodinamika: kerja, kalor, dan energi dalam pada sistem tertutup dan terbuka"
   },
   {
    "kode": "MP2.6",
    "teks": "Hukum kedua termodinamika, entropi, dan efisiensi siklus daya"
   },
   {
    "kode": "MP2.7",
    "teks": "Statika fluida: tekanan, gaya hidrostatis, dan daya apung"
   },
   {
    "kode": "MP2.8",
    "teks": "Dinamika fluida: asas kekekalan massa, persamaan Bernoulli, dan penerapannya"
   },
   {
    "kode": "MP2.9",
    "teks": "Aliran dalam saluran tertutup: bilangan Reynolds, kerugian gesek, dan kerugian setempat"
   }
  ]
 },
 {
  "id": "P3",
  "no": 3,
  "nama": "Ilmu bahan teknik, metalurgi, dan kimia material",
  "pilar": "P1",
  "pilarNama": "Pilar 1 — Materials and Manufacturing Processes",
  "sks": 7,
  "mk": "Teknologi Bahan I (2) · Teknologi Bahan II (2) · Praktek Pengujian Bahan (3)",
  "v2": 9,
  "ubah": "9 → 10 MP",
  "catatan": "",
  "warna": [
   "#90CAF9",
   "#0D47A1"
  ],
  "ikon": "p3",
  "cpl": [
   "CPL-2",
   "CPL-5"
  ],
  "mp": [
   {
    "kode": "MP3.1",
    "teks": "Struktur atom, ikatan, dan struktur kristal logam serta cacat kristal"
   },
   {
    "kode": "MP3.2",
    "teks": "Diagram fasa dan diagram besi–karbon"
   },
   {
    "kode": "MP3.3",
    "teks": "Sifat mekanis bahan: kekuatan, kekerasan, keuletan, dan ketangguhan"
   },
   {
    "kode": "MP3.4",
    "teks": "Prosedur uji bahan merusak: uji tarik, uji kekerasan, dan uji impak Charpy"
   },
   {
    "kode": "MP3.5",
    "teks": "Pengujian tak merusak (NDT): penetran, partikel magnetik, ultrasonik, dan radiografi"
   },
   {
    "kode": "MP3.6",
    "teks": "Perlakuan panas baja: pengerasan, pelunakan, penormalan, dan penemperan"
   },
   {
    "kode": "MP3.7",
    "teks": "Logam non-ferro dan paduannya: aluminium, tembaga, dan paduan ringan"
   },
   {
    "kode": "MP3.8",
    "teks": "Teori korosi: mekanisme elektrokimia, jenis korosi, dan asas pengendaliannya"
   },
   {
    "kode": "MP3.9",
    "teks": "Analisis kegagalan material: patah ulet, patah getas, lelah (fatigue), dan mulur (creep)"
   },
   {
    "kode": "MP3.10",
    "teks": "Bahan bukan logam: polimer, keramik, dan komposit — struktur dan sifatnya"
   }
  ]
 },
 {
  "id": "P4",
  "no": 4,
  "nama": "Proses pemesinan konvensional dan CNC",
  "pilar": "P1",
  "pilarNama": "Pilar 1 — Materials and Manufacturing Processes",
  "sks": 15.5,
  "mk": "Teknologi Mekanik (sebagian) · Praktek Teknologi Mekanik I (job kerja bangku & tool grinding) · Praktek Teknologi Mekanik II (3) · Proses Manufaktur (2) · Praktek Proses Manufaktur I (3) · Praktek Proses Manufaktur II (3) · Praktek EDM & Pengolahan Plastik (sebagian)",
  "v2": 8,
  "ubah": "8 → 11 MP (termasuk MP4.9 kerja bangku)",
  "catatan": "",
  "warna": [
   "#64B5F6",
   "#1565C0"
  ],
  "ikon": "p4",
  "cpl": [
   "CPL-2",
   "CPL-6"
  ],
  "mp": [
   {
    "kode": "MP4.1",
    "teks": "Teori pemotongan logam: pembentukan geram, geometri pahat, serta gaya dan daya potong"
   },
   {
    "kode": "MP4.2",
    "teks": "Proses bubut: jenis pekerjaan, perkakas, parameter potong, dan perhitungan waktu"
   },
   {
    "kode": "MP4.3",
    "teks": "Proses frais dan sekrap: jenis pekerjaan, perkakas, dan parameter potong"
   },
   {
    "kode": "MP4.4",
    "teks": "Proses gurdi, bor, reamer, serta pembuatan ulir dengan mesin"
   },
   {
    "kode": "MP4.5",
    "teks": "Dasar mesin CNC: sistem koordinat, titik nol, lintasan gerak, dan orientasi perkakas"
   },
   {
    "kode": "MP4.6",
    "teks": "Pemrograman CNC (kode G dan M) serta penyetelan mesin, perkakas, dan benda kerja"
   },
   {
    "kode": "MP4.7",
    "teks": "Proses gerinda: gerinda datar, gerinda silindris, pemilihan batu gerinda, dan pengasahan pahat (tool grinding)"
   },
   {
    "kode": "MP4.8",
    "teks": "Keselamatan kerja mesin perkakas: bahaya, alat pelindung diri, dan prosedur aman"
   },
   {
    "kode": "MP4.9",
    "teks": "Kerja bangku: menandai, menggergaji, mengikir, mengebor, mengetap, dan menyenai"
   },
   {
    "kode": "MP4.10",
    "teks": "Pemesinan nonkonvensional: EDM sinking dan wire-cut"
   },
   {
    "kode": "MP4.11",
    "teks": "Perencanaan proses pemesinan: urutan pengerjaan, pemilihan mesin dan pahat, serta lembar proses"
   }
  ]
 },
 {
  "id": "P5",
  "no": 5,
  "nama": "Proses pengelasan dan pembentukan logam",
  "pilar": "P1",
  "pilarNama": "Pilar 1 — Materials and Manufacturing Processes",
  "sks": 2,
  "mk": "Teknologi Mekanik — bagian fabrikasi (sebagian) · Praktek Teknologi Mekanik I — job las MMA & las gas (sebagian)",
  "v2": 7,
  "ubah": "7 → 8 MP (ditambah las gas)",
  "catatan": "MP5.4 (MIG/TIG) diajarkan pada tingkat teori saja — tanpa job praktikum. Lihat Temuan 1.",
  "warna": [
   "#42A5F5",
   "#1976D2"
  ],
  "ikon": "p5",
  "cpl": [
   "CPL-2",
   "CPL-4"
  ],
  "mp": [
   {
    "kode": "MP5.1",
    "teks": "Dasar pengelasan dan fabrikasi: klasifikasi proses, jenis sambungan, posisi pengelasan, dan simbol las"
   },
   {
    "kode": "MP5.2",
    "teks": "Las gas (oksi-asetilena): peralatan, jenis nyala api, teknik pengelasan, serta brazing dan soldering"
   },
   {
    "kode": "MP5.3",
    "teks": "Las busur elektroda terbungkus (SMAW): mesin, elektroda, parameter, dan teknik pengelasan"
   },
   {
    "kode": "MP5.4",
    "teks": "Las busur gas logam (GMAW/MIG) dan las busur gas tungsten (GTAW/TIG): asas kerja, peralatan, dan bidang penerapannya — tingkat pengenalan teoretis"
   },
   {
    "kode": "MP5.5",
    "teks": "Metalurgi lasan: daerah terpengaruh panas, distorsi, dan tegangan sisa"
   },
   {
    "kode": "MP5.6",
    "teks": "Cacat lasan: jenis, penyebab, dan pencegahannya"
   },
   {
    "kode": "MP5.7",
    "teks": "Pengujian tak merusak sambungan las dan kriteria penerimaan mutu lasan"
   },
   {
    "kode": "MP5.8",
    "teks": "Proses pembentukan logam: pengerolan, penekukan, pemotongan pelat, dan pembentukan lembaran"
   }
  ]
 },
 {
  "id": "P6",
  "no": 6,
  "nama": "Proses pengecoran logam",
  "pilar": "P1",
  "pilarNama": "Pilar 1 — Materials and Manufacturing Processes",
  "sks": 3,
  "mk": "Praktek Pengecoran Logam (3)",
  "v2": 8,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#7986CB",
   "#283593"
  ],
  "ikon": "p6",
  "cpl": [
   "CPL-2",
   "CPL-5",
   "CPL-7"
  ],
  "mp": [
   {
    "kode": "MP6.1",
    "teks": "Dasar pengecoran: pembekuan logam, fenomena aliran logam cair, dan penyusutan"
   },
   {
    "kode": "MP6.2",
    "teks": "Pola cor: jenis, bahan, kelonggaran, dan pembuatannya"
   },
   {
    "kode": "MP6.3",
    "teks": "Pasir cetak: komposisi, pengujian sifat pasir, dan pembuatan cetakan"
   },
   {
    "kode": "MP6.4",
    "teks": "Inti (core): bahan, pembuatan, pemasangan, dan pembongkarannya"
   },
   {
    "kode": "MP6.5",
    "teks": "Perancangan sistem saluran dan penambah (gating and riser design)"
   },
   {
    "kode": "MP6.6",
    "teks": "Peleburan logam: jenis tungku, pengendalian suhu, dan perlakuan logam cair aluminium"
   },
   {
    "kode": "MP6.7",
    "teks": "Cacat coran: jenis, penyebab, dan pencegahannya"
   },
   {
    "kode": "MP6.8",
    "teks": "Pembongkaran, pembersihan, dan penyelesaian produk cor"
   }
  ]
 },
 {
  "id": "P7",
  "no": 7,
  "nama": "Teknik pelapisan dan rekayasa permukaan",
  "pilar": "P1",
  "pilarNama": "Pilar 1 — Materials and Manufacturing Processes",
  "sks": 3,
  "mk": "Praktek Teknik Pelapisan (3)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#5C6BC0",
   "#1A237E"
  ],
  "ikon": "p7",
  "cpl": [
   "CPL-2",
   "CPL-5",
   "CPL-7"
  ],
  "mp": [
   {
    "kode": "MP7.1",
    "teks": "Persiapan permukaan: pembersihan, penghilangan lemak, dan pengasaman"
   },
   {
    "kode": "MP7.2",
    "teks": "Elektroplating: asas elektrokimia, susunan larutan, rapat arus, dan parameter proses"
   },
   {
    "kode": "MP7.3",
    "teks": "Pelapisan bukan listrik: pencelupan panas, pengecatan, dan pelapisan konversi"
   },
   {
    "kode": "MP7.4",
    "teks": "Perlakuan permukaan lanjut: anodisasi dan pengerasan permukaan"
   },
   {
    "kode": "MP7.5",
    "teks": "Pengujian mutu lapisan: ketebalan, daya lekat, dan ketahanan korosi"
   },
   {
    "kode": "MP7.6",
    "teks": "Pengelolaan limbah cair pelapisan dan keselamatan penanganan bahan kimia"
   }
  ]
 },
 {
  "id": "P8",
  "no": 8,
  "nama": "Pemrosesan polimer dan daur ulang material",
  "pilar": "P1",
  "pilarNama": "Pilar 1 — Materials and Manufacturing Processes",
  "sks": 1.5,
  "mk": "Praktek EDM & Pengolahan Plastik (sebagian)",
  "v2": 7,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#9FA8DA",
   "#3949AB"
  ],
  "ikon": "p8",
  "cpl": [
   "CPL-5",
   "CPL-7"
  ],
  "mp": [
   {
    "kode": "MP8.1",
    "teks": "Jenis polimer termoplastik dan termoset, kode resin, dan sifat prosesnya"
   },
   {
    "kode": "MP8.2",
    "teks": "Proses cetak injeksi: siklus kerja, parameter proses, dan pengendalian mutu produk"
   },
   {
    "kode": "MP8.3",
    "teks": "Penyetelan mesin injeksi: suhu, tekanan, waktu, serta penanganan cacat produk"
   },
   {
    "kode": "MP8.4",
    "teks": "Proses ekstrusi, cetak tiup (blow molding), dan termoforming"
   },
   {
    "kode": "MP8.5",
    "teks": "Pencetakan tiga dimensi (3D printing): proses FDM, bahan filamen, dan parameter cetak"
   },
   {
    "kode": "MP8.6",
    "teks": "Rantai daur ulang plastik: pencacahan, pencucian, pengeringan, dan pembuatan pelet"
   },
   {
    "kode": "MP8.7",
    "teks": "Penurunan mutu polimer daur ulang dan pengujian sifat bahan hasil daur ulang"
   }
  ]
 },
 {
  "id": "P9",
  "no": 9,
  "nama": "Gambar teknik, GD&T, dan CAD",
  "pilar": "P2",
  "pilarNama": "Pilar 2 — Product, Tooling and Assembly Engineering",
  "sks": 8,
  "mk": "Gambar Teknik (3) · CAD I (3) · CAD II (2)",
  "v2": 6,
  "ubah": "6 → 8 MP",
  "catatan": "",
  "warna": [
   "#80DEEA",
   "#00838F"
  ],
  "ikon": "p9",
  "cpl": [
   "CPL-4",
   "CPL-6"
  ],
  "mp": [
   {
    "kode": "MP9.1",
    "teks": "Dasar gambar teknik: jenis garis, huruf, skala, dan kaidah penyajian"
   },
   {
    "kode": "MP9.2",
    "teks": "Proyeksi ortogonal, proyeksi piktorial, dan pembacaan gambar kerja"
   },
   {
    "kode": "MP9.3",
    "teks": "Gambar potongan, penyajian khusus, dan penyederhanaan gambar"
   },
   {
    "kode": "MP9.4",
    "teks": "Pemberian ukuran, suaian (fit), dan toleransi linear"
   },
   {
    "kode": "MP9.5",
    "teks": "Toleransi geometri (GD&T): lambang, datum, dan penafsirannya"
   },
   {
    "kode": "MP9.6",
    "teks": "Gambar susunan, daftar bagian, dan tanda pengerjaan permukaan"
   },
   {
    "kode": "MP9.7",
    "teks": "CAD dua dimensi: penggambaran, penyuntingan, pemberian ukuran, dan pencetakan"
   },
   {
    "kode": "MP9.8",
    "teks": "CAD tiga dimensi: pemodelan solid, perakitan, dan pembuatan gambar kerja otomatis"
   }
  ]
 },
 {
  "id": "P10",
  "no": 10,
  "nama": "Mekanika teknik dan elemen mesin",
  "pilar": "P2",
  "pilarNama": "Pilar 2 — Product, Tooling and Assembly Engineering",
  "sks": 9,
  "mk": "Mekanika Teknik I (2) · Mekanika Teknik II (2) · Elemen Mesin I (2) · Elemen Mesin II (2) · Perancangan Konstruksi Mesin (sebagian)",
  "v2": 6,
  "ubah": "6 → 9 MP",
  "catatan": "",
  "warna": [
   "#4DD0E1",
   "#006064"
  ],
  "ikon": "p10",
  "cpl": [
   "CPL-2",
   "CPL-3",
   "CPL-4"
  ],
  "mp": [
   {
    "kode": "MP10.1",
    "teks": "Statika: sistem gaya, kesetimbangan, jenis tumpuan, dan diagram benda bebas"
   },
   {
    "kode": "MP10.2",
    "teks": "Analisis rangka batang dan penentuan gaya dalam"
   },
   {
    "kode": "MP10.3",
    "teks": "Tegangan dan regangan: tarik, tekan, geser, serta penetapan tegangan izin"
   },
   {
    "kode": "MP10.4",
    "teks": "Gaya lintang, momen lentur, dan tegangan lentur pada batang"
   },
   {
    "kode": "MP10.5",
    "teks": "Puntiran, defleksi, dan tekuk (buckling) pada batang"
   },
   {
    "kode": "MP10.6",
    "teks": "Sambungan: baut, keling, dan las — perhitungan kekuatannya"
   },
   {
    "kode": "MP10.7",
    "teks": "Poros, pasak, dan kopling"
   },
   {
    "kode": "MP10.8",
    "teks": "Bantalan luncur dan bantalan gelinding: pemilihan dan perhitungan umur pakai"
   },
   {
    "kode": "MP10.9",
    "teks": "Transmisi daya: roda gigi, sabuk, rantai, dan pegas"
   }
  ]
 },
 {
  "id": "P11",
  "no": 11,
  "nama": "Perancangan perkakas pembentuk — press tool dan mold",
  "pilar": "P2",
  "pilarNama": "Pilar 2 — Product, Tooling and Assembly Engineering",
  "sks": 5,
  "mk": "Mold Design (2) · Press Tools Design (2) · Perancangan Konstruksi Mesin (sebagian)",
  "v2": 9,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#80CBC4",
   "#00695C"
  ],
  "ikon": "p11",
  "cpl": [
   "CPL-4"
  ],
  "mp": [
   {
    "kode": "MP11.1",
    "teks": "Dasar perancangan perkakas tekan: jenis press tool dan tahapan perancangannya"
   },
   {
    "kode": "MP11.2",
    "teks": "Proses potong pelat (blanking, piercing): kelonggaran potong, gaya potong, dan tata letak benda kerja (strip layout)"
   },
   {
    "kode": "MP11.3",
    "teks": "Proses tekuk: perhitungan gaya tekuk, panjang bentangan, dan pembalikan pegas (springback)"
   },
   {
    "kode": "MP11.4",
    "teks": "Proses tarik dalam (deep drawing): perbandingan tarik, gaya tarik, dan cacat produk"
   },
   {
    "kode": "MP11.5",
    "teks": "Komponen perkakas tekan, pemilihan mesin press, dan keselamatan operasi press"
   },
   {
    "kode": "MP11.6",
    "teks": "Dasar perancangan cetakan injeksi: jenis cetakan, susunan pelat, dan sistem pemandu"
   },
   {
    "kode": "MP11.7",
    "teks": "Sistem saluran cetakan injeksi: sprue, runner, gate, dan penempatannya"
   },
   {
    "kode": "MP11.8",
    "teks": "Sistem pendingin, sistem pelepas produk (ejector), dan kemiringan dinding (draft)"
   },
   {
    "kode": "MP11.9",
    "teks": "Pemilihan bahan perkakas dan penetapan spesifikasi perlakuan panasnya"
   }
  ]
 },
 {
  "id": "P12",
  "no": 12,
  "nama": "Perancangan alat bantu produksi — jig dan fixture",
  "pilar": "P2",
  "pilarNama": "Pilar 2 — Product, Tooling and Assembly Engineering",
  "sks": 2,
  "mk": "Jig & Fixture Design (2)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#4DB6AC",
   "#00796B"
  ],
  "ikon": "p12",
  "cpl": [
   "CPL-4"
  ],
  "mp": [
   {
    "kode": "MP12.1",
    "teks": "Asas pemosisian benda kerja: enam derajat kebebasan dan kaidah 3-2-1"
   },
   {
    "kode": "MP12.2",
    "teks": "Unsur pemosisi (locator): jenis, penempatan, dan ketelitiannya"
   },
   {
    "kode": "MP12.3",
    "teks": "Unsur pencekam (clamp): jenis, perhitungan gaya cekam, dan asas pencekaman"
   },
   {
    "kode": "MP12.4",
    "teks": "Perancangan jig gurdi: bus pengarah, badan jig, dan toleransinya"
   },
   {
    "kode": "MP12.5",
    "teks": "Perancangan fixture frais dan fixture las"
   },
   {
    "kode": "MP12.6",
    "teks": "Penumpukan toleransi (tolerance stack-up) dan pengaruhnya terhadap ketelitian produk"
   }
  ]
 },
 {
  "id": "P13",
  "no": 13,
  "nama": "CAM dan integrasi rantai desain–manufaktur",
  "pilar": "P2",
  "pilarNama": "Pilar 2 — Product, Tooling and Assembly Engineering",
  "sks": 3,
  "mk": "CAD/CAM (3)",
  "v2": 5,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#A5D6A7",
   "#1B5E20"
  ],
  "ikon": "p13",
  "cpl": [
   "CPL-4",
   "CPL-6"
  ],
  "mp": [
   {
    "kode": "MP13.1",
    "teks": "Alur kerja CAD–CAM–CNC dan pertukaran berkas (IGES, STEP, DXF)"
   },
   {
    "kode": "MP13.2",
    "teks": "Pemilihan strategi pemesinan: pengasaran, penyelesaian, dan penetapan lintasan pahat"
   },
   {
    "kode": "MP13.3",
    "teks": "Penetapan parameter pemotongan dan pengelolaan pustaka perkakas pada perangkat lunak CAM"
   },
   {
    "kode": "MP13.4",
    "teks": "Simulasi lintasan pahat, deteksi tabrakan, dan pembangkitan kode NC (post-processing)"
   },
   {
    "kode": "MP13.5",
    "teks": "Pengalihan program ke mesin, verifikasi benda kerja pertama, dan dokumentasi proses"
   }
  ]
 },
 {
  "id": "P14",
  "no": 14,
  "nama": "Metrologi, pengendalian dan penjaminan mutu",
  "pilar": "P3",
  "pilarNama": "Pilar 3 — Manufacturing Systems and Operations",
  "sks": 3,
  "mk": "Metrologi & Pengendalian Mutu (3)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#FFE082",
   "#F9A825"
  ],
  "ikon": "p14",
  "cpl": [
   "CPL-5"
  ],
  "mp": [
   {
    "kode": "MP14.1",
    "teks": "Asas metrologi: satuan, ketertelusuran, ketelitian, kecermatan, dan kalibrasi"
   },
   {
    "kode": "MP14.2",
    "teks": "Pengukuran dimensi: jangka sorong, mikrometer, jam ukur, dan blok ukur"
   },
   {
    "kode": "MP14.3",
    "teks": "Pengukuran geometri dan kekasaran permukaan serta pemeriksaan GD&T"
   },
   {
    "kode": "MP14.4",
    "teks": "Pengendalian proses statistik (SPC): peta kendali dan kemampuan proses (Cp, Cpk)"
   },
   {
    "kode": "MP14.5",
    "teks": "Pemeriksaan penerimaan, pengambilan sampel, dan penanganan produk tidak sesuai"
   },
   {
    "kode": "MP14.6",
    "teks": "Sistem manajemen mutu ISO 9001 dan perkakas perbaikan mutu (diagram sebab-akibat, Pareto, 5 Mengapa)"
   }
  ]
 },
 {
  "id": "P15",
  "no": 15,
  "nama": "Teknik listrik dan elektronika industri",
  "pilar": "P3",
  "pilarNama": "Pilar 3 — Manufacturing Systems and Operations",
  "sks": 2,
  "mk": "Praktek Teknik Listrik & Elektronika (2)",
  "v2": 5,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#FFCC80",
   "#EF6C00"
  ],
  "ikon": "p15",
  "cpl": [
   "CPL-6"
  ],
  "mp": [
   {
    "kode": "MP15.1",
    "teks": "Rangkaian listrik arus searah dan arus bolak-balik serta pengukuran besaran listrik"
   },
   {
    "kode": "MP15.2",
    "teks": "Keselamatan kelistrikan: bahaya sengatan, pembumian, dan pengamanan rangkaian"
   },
   {
    "kode": "MP15.3",
    "teks": "Motor listrik dan pengendalinya: motor induksi, kontaktor, dan rangkaian kendali"
   },
   {
    "kode": "MP15.4",
    "teks": "Komponen elektronika dasar dan rangkaian catu daya"
   },
   {
    "kode": "MP15.5",
    "teks": "Pembacaan diagram kelistrikan mesin dan penelusuran gangguan sederhana"
   }
  ]
 },
 {
  "id": "P16",
  "no": 16,
  "nama": "Otomasi, PLC, hidrolik–pneumatik",
  "pilar": "P3",
  "pilarNama": "Pilar 3 — Manufacturing Systems and Operations",
  "sks": 8,
  "mk": "Pneumatik & Hidrolik (2) · Automasi Industri I (3) · Automasi Industri II (3)",
  "v2": 7,
  "ubah": "7 → 8 MP",
  "catatan": "",
  "warna": [
   "#FFAB91",
   "#D84315"
  ],
  "ikon": "p16",
  "cpl": [
   "CPL-4",
   "CPL-6"
  ],
  "mp": [
   {
    "kode": "MP16.1",
    "teks": "Dasar sistem pneumatik: sumber udara, komponen, simbol, dan rangkaian dasar"
   },
   {
    "kode": "MP16.2",
    "teks": "Dasar sistem hidrolik: pompa, katup, aktuator, dan rangkaian dasar"
   },
   {
    "kode": "MP16.3",
    "teks": "Rangkaian kendali elektropneumatik dan elektrohidrolik"
   },
   {
    "kode": "MP16.4",
    "teks": "Dasar PLC: arsitektur, modul masukan–keluaran, dan pengalamatan"
   },
   {
    "kode": "MP16.5",
    "teks": "Pemrograman PLC: diagram tangga, pewaktu, pencacah, dan kendali berurutan"
   },
   {
    "kode": "MP16.6",
    "teks": "Robot industri: struktur, sistem koordinat, serta pemrograman dan simulasi gerak"
   },
   {
    "kode": "MP16.7",
    "teks": "Keselamatan sistem otomasi: penjagaan mesin, henti darurat, dan prosedur LOTO"
   },
   {
    "kode": "MP16.8",
    "teks": "Pemaduan sistem otomasi: sensor, aktuator, dan antarmuka operator (HMI)"
   }
  ]
 },
 {
  "id": "P17",
  "no": 17,
  "nama": "Sensor, IoT, SCADA, analitik data, dan dasar kecerdasan artifisial",
  "pilar": "P3",
  "pilarNama": "Pilar 3 — Manufacturing Systems and Operations",
  "sks": 4,
  "mk": "Pemrograman Komputer & Dasar Kecerdasan Artifisial (2) · Literasi Digital & Akuisisi Data Manufaktur (2)",
  "v2": 6,
  "ubah": "nama diperluas · 6 → 8 MP",
  "catatan": "",
  "warna": [
   "#FFD180",
   "#FF6F00"
  ],
  "ikon": "p17",
  "cpl": [
   "CPL-3",
   "CPL-6"
  ],
  "mp": [
   {
    "kode": "MP17.1",
    "teks": "Dasar algoritma dan pemrograman terstruktur: struktur kendali, tipe data, dan fungsi"
   },
   {
    "kode": "MP17.2",
    "teks": "Sensor industri: jenis, asas kerja, dan kaidah pemilihannya"
   },
   {
    "kode": "MP17.3",
    "teks": "Akuisisi data: pengubah analog-digital, laju cuplik, dan penanganan derau"
   },
   {
    "kode": "MP17.4",
    "teks": "Jaringan industri, Internet of Things (IoT), dan asas sistem SCADA"
   },
   {
    "kode": "MP17.5",
    "teks": "Pengolahan dan penyajian visual data proses manufaktur"
   },
   {
    "kode": "MP17.6",
    "teks": "Analitik data manufaktur: kecenderungan, korelasi, dan penarikan simpulan dari data mesin"
   },
   {
    "kode": "MP17.7",
    "teks": "Dasar kecerdasan artifisial: ruang lingkup, jenis pembelajaran mesin, dan keterbatasannya"
   },
   {
    "kode": "MP17.8",
    "teks": "Penerapan kecerdasan artifisial di manufaktur: pemeriksaan visual, perawatan prediktif, dan etika penggunaannya"
   }
  ]
 },
 {
  "id": "P18",
  "no": 18,
  "nama": "Perawatan dan keandalan mesin",
  "pilar": "P3",
  "pilarNama": "Pilar 3 — Manufacturing Systems and Operations",
  "sks": 3,
  "mk": "Perawatan & Keandalan Mesin (3)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#FFB74D",
   "#E65100"
  ],
  "ikon": "p18",
  "cpl": [
   "CPL-6"
  ],
  "mp": [
   {
    "kode": "MP18.1",
    "teks": "Strategi perawatan: korektif, preventif, prediktif, dan perawatan mandiri operator"
   },
   {
    "kode": "MP18.2",
    "teks": "Pelumasan: jenis pelumas, sistem pelumasan, dan jadwal penggantian"
   },
   {
    "kode": "MP18.3",
    "teks": "Pemantauan kondisi: getaran, suhu, kebisingan, dan analisis pelumas"
   },
   {
    "kode": "MP18.4",
    "teks": "Keandalan: laju kegagalan, MTBF, MTTR, dan ketersediaan mesin"
   },
   {
    "kode": "MP18.5",
    "teks": "Perencanaan dan penjadwalan perawatan serta pengelolaan suku cadang"
   },
   {
    "kode": "MP18.6",
    "teks": "Analisis kerusakan mesin: penelusuran akar masalah dan penetapan tindakan perbaikan"
   }
  ]
 },
 {
  "id": "P19",
  "no": 19,
  "nama": "PPIC dan rantai pasok",
  "pilar": "P3",
  "pilarNama": "Pilar 3 — Manufacturing Systems and Operations",
  "sks": 2,
  "mk": "PPIC & Manajemen Rantai Pasok (2)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#F0B27A",
   "#A04000"
  ],
  "ikon": "p19",
  "cpl": [
   "CPL-9"
  ],
  "mp": [
   {
    "kode": "MP19.1",
    "teks": "Peramalan permintaan dan perencanaan produksi agregat"
   },
   {
    "kode": "MP19.2",
    "teks": "Jadwal induk produksi dan perencanaan kebutuhan bahan (MRP)"
   },
   {
    "kode": "MP19.3",
    "teks": "Pengendalian persediaan: EOQ, persediaan pengaman, dan titik pemesanan ulang"
   },
   {
    "kode": "MP19.4",
    "teks": "Penjadwalan produksi dan pengurutan pekerjaan di lantai pabrik"
   },
   {
    "kode": "MP19.5",
    "teks": "Manajemen rantai pasok: pemasok, pengadaan, distribusi, dan pengukuran kinerjanya"
   },
   {
    "kode": "MP19.6",
    "teks": "Pengenalan tata letak fasilitas dan sistem informasi manufaktur (ERP/MES)"
   }
  ]
 },
 {
  "id": "P20",
  "no": 20,
  "nama": "Ekonomi teknik dan manajemen proyek",
  "pilar": "P4",
  "pilarNama": "Pilar 4 — Manufacturing Competitiveness",
  "sks": 2,
  "mk": "Ekonomi Teknik & Manajemen Proyek (2)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#D7A07A",
   "#8D4A1F"
  ],
  "ikon": "p20",
  "cpl": [
   "CPL-3",
   "CPL-9"
  ],
  "mp": [
   {
    "kode": "MP20.1",
    "teks": "Nilai waktu uang, bunga, dan penyusunan aliran kas proyek"
   },
   {
    "kode": "MP20.2",
    "teks": "Penilaian kelayakan investasi: NPV, IRR, periode pengembalian, dan titik impas"
   },
   {
    "kode": "MP20.3",
    "teks": "Perhitungan biaya produksi: biaya bahan, upah kerja, dan biaya tak langsung"
   },
   {
    "kode": "MP20.4",
    "teks": "Perencanaan proyek: lingkup, struktur rincian kerja, penjadwalan CPM dan diagram Gantt"
   },
   {
    "kode": "MP20.5",
    "teks": "Manajemen risiko proyek: identifikasi, penilaian, dan penanganan risiko"
   },
   {
    "kode": "MP20.6",
    "teks": "Pengendalian biaya dan waktu proyek serta dasar kontrak pengadaan"
   }
  ]
 },
 {
  "id": "P21",
  "no": 21,
  "nama": "Kewirausahaan technopreneur dan inovasi produk",
  "pilar": "P4",
  "pilarNama": "Pilar 4 — Manufacturing Competitiveness",
  "sks": 2,
  "mk": "Kewirausahaan Technopreneur (2)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#F48FB1",
   "#AD1457"
  ],
  "ikon": "p21",
  "cpl": [
   "CPL-9"
  ],
  "mp": [
   {
    "kode": "MP21.1",
    "teks": "Pola pikir kewirausahaan, intrapreneurship, dan pengenalan peluang usaha"
   },
   {
    "kode": "MP21.2",
    "teks": "Riset pasar sederhana dan pengenalan kebutuhan pengguna"
   },
   {
    "kode": "MP21.3",
    "teks": "Model bisnis dan proposisi nilai produk berbasis teknologi"
   },
   {
    "kode": "MP21.4",
    "teks": "Pengembangan produk: purwarupa, uji pasar, dan perbaikan berulang"
   },
   {
    "kode": "MP21.5",
    "teks": "Penyusunan rencana usaha dan perhitungan kelayakannya"
   },
   {
    "kode": "MP21.6",
    "teks": "Legalitas usaha, perlindungan kekayaan intelektual produk, dan penyajian gagasan kepada calon mitra"
   }
  ]
 },
 {
  "id": "P22",
  "no": 22,
  "nama": "Konversi energi dan energi baru terbarukan — PENCIRI",
  "pilar": "P4",
  "pilarNama": "Pilar 4 — Manufacturing Competitiveness",
  "sks": 3,
  "mk": "Teknologi Konversi Energi & EBT (3)",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#A5D6A7",
   "#2E7D32"
  ],
  "ikon": "p22",
  "cpl": [
   "CPL-5",
   "CPL-7"
  ],
  "mp": [
   {
    "kode": "MP22.1",
    "teks": "Asas konversi energi, neraca energi, dan efisiensi"
   },
   {
    "kode": "MP22.2",
    "teks": "Mesin fluida: pompa, kompresor, dan turbin — asas kerja dan unjuk kerjanya"
   },
   {
    "kode": "MP22.3",
    "teks": "Pembangkit tenaga air skala kecil: pikohidro dan mikrohidro"
   },
   {
    "kode": "MP22.4",
    "teks": "Turbin air aliran silang (cross flow): asas kerja, bagian utama, dan perhitungan daya"
   },
   {
    "kode": "MP22.5",
    "teks": "Sumber energi terbarukan lain: surya, angin, dan biomassa"
   },
   {
    "kode": "MP22.6",
    "teks": "Efisiensi energi di industri dan audit energi sederhana"
   }
  ]
 },
 {
  "id": "P23",
  "no": 23,
  "nama": "K3L, keberlanjutan, dan manufaktur sirkular — PENCIRI",
  "pilar": "P4",
  "pilarNama": "Pilar 4 — Manufacturing Competitiveness",
  "sks": 1,
  "mk": "K3 & Hukum Ketenagakerjaan (sebagian) · menyertai seluruh MK praktek",
  "v2": 6,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#C5E1A5",
   "#558B2F"
  ],
  "ikon": "p23",
  "cpl": [
   "CPL-1",
   "CPL-7"
  ],
  "mp": [
   {
    "kode": "MP23.1",
    "teks": "Dasar K3: perundangan, kelembagaan, dan budaya keselamatan"
   },
   {
    "kode": "MP23.2",
    "teks": "Identifikasi bahaya dan penilaian risiko keselamatan kerja (HIRADC)"
   },
   {
    "kode": "MP23.3",
    "teks": "Alat pelindung diri, rambu keselamatan, dan tanggap darurat di bengkel dan pabrik"
   },
   {
    "kode": "MP23.4",
    "teks": "Pengelolaan lingkungan industri: limbah padat, limbah cair, dan emisi"
   },
   {
    "kode": "MP23.5",
    "teks": "Manufaktur sirkular: pemanfaatan kembali sumber daya, daur ulang, dan jejak karbon"
   },
   {
    "kode": "MP23.6",
    "teks": "Keberlanjutan dalam perancangan produk: biaya daur hidup dan rancangan ramah lingkungan"
   }
  ]
 },
 {
  "id": "P24",
  "no": 24,
  "nama": "Etika profesi, hukum ketenagakerjaan, dan nilai kebangsaan",
  "pilar": "PP",
  "pilarNama": "Penunjang Profesional",
  "sks": 9,
  "mk": "Pendidikan Agama (2) · Pancasila (2) · Pendidikan Kewarganegaraan (2) · Etika Profesi (2) · K3 & Hukum Ketenagakerjaan (sebagian)",
  "v2": 5,
  "ubah": "nama diperluas · 5 → 8 MP",
  "catatan": "",
  "warna": [
   "#EF9A9A",
   "#B71C1C"
  ],
  "ikon": "p24",
  "cpl": [
   "CPL-1"
  ],
  "mp": [
   {
    "kode": "MP24.1",
    "teks": "Pancasila sebagai dasar negara, ideologi, dan sistem nilai bangsa"
   },
   {
    "kode": "MP24.2",
    "teks": "Kewarganegaraan: identitas nasional, hak dan kewajiban warga negara, serta wawasan nusantara"
   },
   {
    "kode": "MP24.3",
    "teks": "Nilai keagamaan, akhlak, dan kerukunan dalam kehidupan bermasyarakat"
   },
   {
    "kode": "MP24.4",
    "teks": "Etika akademik, kejujuran ilmiah, dan pencegahan plagiarisme"
   },
   {
    "kode": "MP24.5",
    "teks": "Etika profesi keinsinyuran: kode etik, tanggung jawab profesi, dan pengambilan keputusan etis"
   },
   {
    "kode": "MP24.6",
    "teks": "Hukum ketenagakerjaan: hubungan kerja, hak dan kewajiban pekerja, dan penyelesaian perselisihan"
   },
   {
    "kode": "MP24.7",
    "teks": "Tanggung jawab profesi terhadap keselamatan publik dan kelestarian lingkungan"
   },
   {
    "kode": "MP24.8",
    "teks": "Penghormatan atas kekayaan intelektual pihak lain dan penjagaan kerahasiaan data perusahaan"
   }
  ]
 },
 {
  "id": "P25",
  "no": 25,
  "nama": "Komunikasi teknis, bahasa, dan kerja tim",
  "pilar": "PP",
  "pilarNama": "Penunjang Profesional",
  "sks": 6,
  "mk": "Bahasa Indonesia (2) · Komunikasi Teknis (2) · Bahasa Inggris Teknik (2)",
  "v2": 6,
  "ubah": "6 → 7 MP",
  "catatan": "",
  "warna": [
   "#F8BBD0",
   "#C2185B"
  ],
  "ikon": "p25",
  "cpl": [
   "CPL-8",
   "CPL-10"
  ],
  "mp": [
   {
    "kode": "MP25.1",
    "teks": "Bahasa Indonesia ragam ilmiah: ejaan, kalimat efektif, dan pengembangan paragraf"
   },
   {
    "kode": "MP25.2",
    "teks": "Penulisan laporan teknis: struktur, penyajian data, tabel, dan gambar"
   },
   {
    "kode": "MP25.3",
    "teks": "Penyajian lisan dan teknik presentasi teknis"
   },
   {
    "kode": "MP25.4",
    "teks": "Dokumen teknis dan korespondensi kerja: surat, memo, notula, dan spesifikasi"
   },
   {
    "kode": "MP25.5",
    "teks": "Bahasa Inggris teknik: pembacaan manual mesin, standar, dan katalog"
   },
   {
    "kode": "MP25.6",
    "teks": "Bahasa Inggris teknik: penulisan ringkas dan percakapan di lingkungan kerja"
   },
   {
    "kode": "MP25.7",
    "teks": "Kerja tim: pembagian peran, dinamika kelompok, penyelesaian konflik, dan kepemimpinan regu"
   }
  ]
 },
 {
  "id": "P26",
  "no": 26,
  "nama": "Metodologi penelitian terapan dan penelusuran literatur",
  "pilar": "PP",
  "pilarNama": "Penunjang Profesional",
  "sks": 2,
  "mk": "Metodologi Penelitian Terapan (2)",
  "v2": 5,
  "ubah": "",
  "catatan": "",
  "warna": [
   "#CE93D8",
   "#7B1FA2"
  ],
  "ikon": "p26",
  "cpl": [
   "CPL-3",
   "CPL-5",
   "CPL-10"
  ],
  "mp": [
   {
    "kode": "MP26.1",
    "teks": "Penelusuran literatur: pangkalan data, jurnal, standar, dan penilaian mutu sumber"
   },
   {
    "kode": "MP26.2",
    "teks": "Perumusan masalah, tujuan, dan kerangka berpikir penelitian terapan"
   },
   {
    "kode": "MP26.3",
    "teks": "Rancangan penelitian terapan, penetapan variabel, dan instrumen pengumpulan data"
   },
   {
    "kode": "MP26.4",
    "teks": "Pengolahan dan penafsiran data penelitian serta penarikan simpulan"
   },
   {
    "kode": "MP26.5",
    "teks": "Penulisan proposal dan laporan penelitian serta tata cara perujukan (sitasi)"
   }
  ]
 }
];
const TOT_MP = 185;
const CPLxP = [
 [
  "CPL-1",
  "Sikap, Etika, dan Tanggung Jawab Profesi",
  "P23, P24"
 ],
 [
  "CPL-2",
  "Pengetahuan Keteknikan",
  "P1, P2, P3, P4, P5, P6, P7, P10"
 ],
 [
  "CPL-3",
  "Analisis Masalah dan Pengambilan Keputusan",
  "P1, P10, P17, P20, P26"
 ],
 [
  "CPL-4",
  "Perancangan dan Pengembangan Solusi",
  "P5, P9, P10, P11, P12, P13, P16"
 ],
 [
  "CPL-5",
  "Investigasi, Pengujian, dan Pengendalian Mutu",
  "P1, P3, P6, P7, P8, P14, P22, P26"
 ],
 [
  "CPL-6",
  "Penggunaan dan Pemeliharaan Perangkat Modern",
  "P4, P9, P13, P15, P16, P17, P18"
 ],
 [
  "CPL-7",
  "Keteknikan, Masyarakat, dan Keberlanjutan",
  "P6, P7, P8, P22, P23"
 ],
 [
  "CPL-8",
  "Kerja Tim dan Komunikasi",
  "P25"
 ],
 [
  "CPL-9",
  "Manajemen Proyek, Ekonomi Teknik, dan Kewirausahaan",
  "P19, P20, P21"
 ],
 [
  "CPL-10",
  "Pembelajar Sepanjang Hayat",
  "P25, P26"
 ]
];

/* --- Struktur Mata Kuliah per semester --- */
const SMT_LIST = [
 {
  "id": "SMT-1",
  "no": 1,
  "romawi": "I",
  "sks": 20,
  "ket": "20 sks · 9 MK + PKM (minggu ke-9)",
  "warna": [
   "#90CAF9",
   "#0D47A1"
  ],
  "ikon": "smt1",
  "pkm": {
   "nama": "PKM / PKTOS — minggu ke-9",
   "cpl": {
    "8": "R",
    "9": "I",
    "10": "I"
   }
  },
  "mk": [
   {
    "id": "MK-1",
    "no": 1,
    "nama": "Bahasa Indonesia",
    "sks": 2,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "8": "I"
    },
    "p": [
     "P25"
    ],
    "pra": [],
    "kel": "MKWN",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#F8BBD0",
     "#C2185B"
    ],
    "ikon": "p25",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-2",
    "no": 2,
    "nama": "Matematika Terapan I",
    "sks": 2,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "2": "I",
     "3": "I"
    },
    "p": [
     "P1"
    ],
    "pra": [],
    "kel": "Dasar",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#CE93D8",
     "#6A1B9A"
    ],
    "ikon": "p1",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-3",
    "no": 3,
    "nama": "Fisika Terapan",
    "sks": 2,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "2": "I"
    },
    "p": [
     "P2"
    ],
    "pra": [],
    "kel": "Dasar",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#B39DDB",
     "#4527A0"
    ],
    "ikon": "p2",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-4",
    "no": 4,
    "nama": "Gambar Teknik",
    "sks": 3,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "4": "I",
     "8": "I"
    },
    "p": [
     "P9"
    ],
    "pra": [],
    "kel": "Dasar",
    "bentuk": "Teori + studio gambar",
    "catat": "",
    "warna": [
     "#80DEEA",
     "#00838F"
    ],
    "ikon": "p9",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-5",
    "no": 5,
    "nama": "Teknologi Bahan I",
    "sks": 2,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "2": "I"
    },
    "p": [
     "P3"
    ],
    "pra": [],
    "kel": "Dasar",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#90CAF9",
     "#0D47A1"
    ],
    "ikon": "p3",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-6",
    "no": 6,
    "nama": "Teknologi Mekanik",
    "sks": 2,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "2": "I",
     "6": "I"
    },
    "p": [
     "P4",
     "P5"
    ],
    "pra": [],
    "kel": "Inti",
    "bentuk": "Teori",
    "catat": "Memuat bagian fabrikasi: tipe-tipe pengelasan, material, dan materi penunjangnya — karena itu menopang P4 dan P5 sekaligus (Temuan 1).",
    "warna": [
     "#64B5F6",
     "#1565C0"
    ],
    "ikon": "p4",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-7",
    "no": 7,
    "nama": "Praktek Teknologi Mekanik I",
    "sks": 3,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "6": "I",
     "8": "I"
    },
    "p": [
     "P4",
     "P5",
     "P25"
    ],
    "pra": [],
    "kel": "Praktek",
    "bentuk": "Praktek bengkel · 4 job",
    "catat": "Empat job: kerja bangku · tool grinding · las MMA · las gas. Berjalan serentak dengan Teknologi Mekanik.",
    "warna": [
     "#64B5F6",
     "#1565C0"
    ],
    "ikon": "p5",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-8",
    "no": 8,
    "nama": "K3 & Hukum Ketenagakerjaan",
    "sks": 2,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "1": "I",
     "7": "I"
    },
    "p": [
     "P23",
     "P24"
    ],
    "pra": [],
    "kel": "Penciri K3L",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#C5E1A5",
     "#558B2F"
    ],
    "ikon": "p23",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-9",
    "no": 9,
    "nama": "Pemrograman Komputer & Dasar Kecerdasan Artifisial",
    "sks": 2,
    "smt": "I",
    "smtNo": 1,
    "kode": "TMA …",
    "irma": {
     "3": "I",
     "6": "I"
    },
    "p": [
     "P17"
    ],
    "pra": [],
    "kel": "Dasar digital",
    "bentuk": "Teori + laboratorium komputer",
    "catat": "Mata kuliah baru — lahir dari pemecahan MK Literasi Digital kurikulum berjalan.",
    "warna": [
     "#FFD180",
     "#FF6F00"
    ],
    "ikon": "p17",
    "asesmen": [],
    "jam": 90
   }
  ]
 },
 {
  "id": "SMT-2",
  "no": 2,
  "romawi": "II",
  "sks": 20,
  "ket": "20 sks · 9 MK + PKM (minggu ke-9)",
  "warna": [
   "#80DEEA",
   "#00838F"
  ],
  "ikon": "smt2",
  "pkm": {
   "nama": "PKM / PKTOS — minggu ke-9",
   "cpl": {
    "8": "R",
    "9": "R",
    "10": "R"
   }
  },
  "mk": [
   {
    "id": "MK-10",
    "no": 10,
    "nama": "Pendidikan Agama",
    "sks": 2,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "1": "R"
    },
    "p": [
     "P24"
    ],
    "pra": [],
    "kel": "MKWN",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#EF9A9A",
     "#B71C1C"
    ],
    "ikon": "p24",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-11",
    "no": 11,
    "nama": "Pancasila",
    "sks": 2,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "1": "R"
    },
    "p": [
     "P24"
    ],
    "pra": [],
    "kel": "MKWN",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#EF9A9A",
     "#B71C1C"
    ],
    "ikon": "p24",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-12",
    "no": 12,
    "nama": "Matematika Terapan II",
    "sks": 2,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "3": "R"
    },
    "p": [
     "P1"
    ],
    "pra": [
     "Matematika Terapan I"
    ],
    "kel": "Dasar",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#CE93D8",
     "#6A1B9A"
    ],
    "ikon": "p1",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-13",
    "no": 13,
    "nama": "Teknologi Bahan II",
    "sks": 2,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "5": "I"
    },
    "p": [
     "P3"
    ],
    "pra": [
     "Teknologi Bahan I"
    ],
    "kel": "Dasar",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#90CAF9",
     "#0D47A1"
    ],
    "ikon": "p3",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-14",
    "no": 14,
    "nama": "Mekanika Teknik I",
    "sks": 2,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "3": "R"
    },
    "p": [
     "P10"
    ],
    "pra": [
     "Fisika Terapan"
    ],
    "kel": "Inti",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#4DD0E1",
     "#006064"
    ],
    "ikon": "p10",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-15",
    "no": 15,
    "nama": "CAD I",
    "sks": 3,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "4": "R",
     "6": "R"
    },
    "p": [
     "P9"
    ],
    "pra": [
     "Gambar Teknik"
    ],
    "kel": "Inti",
    "bentuk": "Laboratorium komputer",
    "catat": "",
    "warna": [
     "#80DEEA",
     "#00838F"
    ],
    "ikon": "p9",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-16",
    "no": 16,
    "nama": "Praktek Teknik Listrik & Elektronika",
    "sks": 2,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "1": "R",
     "6": "R",
     "8": "R"
    },
    "p": [
     "P15",
     "P23",
     "P25"
    ],
    "pra": [],
    "kel": "Praktek",
    "bentuk": "Praktek laboratorium",
    "catat": "",
    "warna": [
     "#FFCC80",
     "#EF6C00"
    ],
    "ikon": "p15",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-17",
    "no": 17,
    "nama": "Praktek Teknologi Mekanik II",
    "sks": 3,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "1": "R",
     "2": "R",
     "6": "R",
     "8": "R"
    },
    "p": [
     "P4",
     "P23",
     "P25"
    ],
    "pra": [
     "Praktek Teknologi Mekanik I"
    ],
    "kel": "Praktek",
    "bentuk": "Praktek bengkel",
    "catat": "🔴 Rincian job belum dipastikan kepada dosen pengampu. Untuk sementara ditandai menopang P4 saja — bila berisi kerja pelat atau pengelasan lanjut, sebagian beban berpindah ke P5 (Temuan 1, butir terbuka).",
    "warna": [
     "#64B5F6",
     "#1565C0"
    ],
    "ikon": "p4",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-18",
    "no": 18,
    "nama": "Komunikasi Teknis",
    "sks": 2,
    "smt": "II",
    "smtNo": 2,
    "kode": "TMA …",
    "irma": {
     "8": "R"
    },
    "p": [
     "P25"
    ],
    "pra": [
     "Bahasa Indonesia"
    ],
    "kel": "Penunjang",
    "bentuk": "Teori + praktik penyajian",
    "catat": "",
    "warna": [
     "#F8BBD0",
     "#C2185B"
    ],
    "ikon": "p25",
    "asesmen": [],
    "jam": 90
   }
  ]
 },
 {
  "id": "SMT-3",
  "no": 3,
  "romawi": "III",
  "sks": 20,
  "ket": "20 sks · 9 MK + PKM (minggu ke-9)",
  "warna": [
   "#A5D6A7",
   "#1B5E20"
  ],
  "ikon": "smt3",
  "pkm": {
   "nama": "PKM / PKTOS — minggu ke-9",
   "cpl": {
    "8": "R",
    "9": "R",
    "10": "R"
   }
  },
  "mk": [
   {
    "id": "MK-19",
    "no": 19,
    "nama": "Pendidikan Kewarganegaraan",
    "sks": 2,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "1": "R"
    },
    "p": [
     "P24"
    ],
    "pra": [],
    "kel": "MKWN",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#EF9A9A",
     "#B71C1C"
    ],
    "ikon": "p24",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-20",
    "no": 20,
    "nama": "Mekanika Teknik II",
    "sks": 2,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "3": "R"
    },
    "p": [
     "P10"
    ],
    "pra": [
     "Mekanika Teknik I"
    ],
    "kel": "Inti",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#4DD0E1",
     "#006064"
    ],
    "ikon": "p10",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-21",
    "no": 21,
    "nama": "Elemen Mesin I",
    "sks": 2,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "4": "R"
    },
    "p": [
     "P10"
    ],
    "pra": [
     "Mekanika Teknik I"
    ],
    "kel": "Inti",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#4DD0E1",
     "#006064"
    ],
    "ikon": "p10",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-22",
    "no": 22,
    "nama": "Proses Manufaktur",
    "sks": 2,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "2": "A",
     "4": "R"
    },
    "p": [
     "P4"
    ],
    "pra": [
     "Teknologi Mekanik"
    ],
    "kel": "Inti",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#64B5F6",
     "#1565C0"
    ],
    "ikon": "p4",
    "asesmen": [
     {
      "cpl": "CPL-2",
      "instrumen": "Ujian komprehensif berbasis soal terapan lintas proses"
     }
    ],
    "jam": 90
   },
   {
    "id": "MK-23",
    "no": 23,
    "nama": "CAD II",
    "sks": 2,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "4": "R",
     "6": "R"
    },
    "p": [
     "P9"
    ],
    "pra": [
     "CAD I"
    ],
    "kel": "Inti",
    "bentuk": "Laboratorium komputer",
    "catat": "",
    "warna": [
     "#80DEEA",
     "#00838F"
    ],
    "ikon": "p9",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-24",
    "no": 24,
    "nama": "Praktek Pengujian Bahan",
    "sks": 3,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "5": "R",
     "8": "R"
    },
    "p": [
     "P3",
     "P25"
    ],
    "pra": [
     "Teknologi Bahan II"
    ],
    "kel": "Praktek",
    "bentuk": "Praktek laboratorium uji bahan",
    "catat": "",
    "warna": [
     "#90CAF9",
     "#0D47A1"
    ],
    "ikon": "p3",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-25",
    "no": 25,
    "nama": "Praktek Proses Manufaktur I",
    "sks": 3,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "6": "R",
     "8": "R"
    },
    "p": [
     "P4",
     "P25"
    ],
    "pra": [
     "Praktek Teknologi Mekanik II"
    ],
    "kel": "Praktek",
    "bentuk": "Praktek bengkel",
    "catat": "",
    "warna": [
     "#64B5F6",
     "#1565C0"
    ],
    "ikon": "p4",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-26",
    "no": 26,
    "nama": "Bahasa Inggris Teknik",
    "sks": 2,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "8": "R",
     "10": "R"
    },
    "p": [
     "P25"
    ],
    "pra": [],
    "kel": "Penunjang",
    "bentuk": "Teori + praktik bahasa",
    "catat": "",
    "warna": [
     "#F8BBD0",
     "#C2185B"
    ],
    "ikon": "p25",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-27",
    "no": 27,
    "nama": "Pneumatik & Hidrolik",
    "sks": 2,
    "smt": "III",
    "smtNo": 3,
    "kode": "TMA …",
    "irma": {
     "4": "R",
     "6": "R"
    },
    "p": [
     "P16"
    ],
    "pra": [
     "Fisika Terapan"
    ],
    "kel": "Inti",
    "bentuk": "Teori + laboratorium",
    "catat": "",
    "warna": [
     "#FFAB91",
     "#D84315"
    ],
    "ikon": "p16",
    "asesmen": [],
    "jam": 90
   }
  ]
 },
 {
  "id": "SMT-4",
  "no": 4,
  "romawi": "IV",
  "sks": 20,
  "ket": "20 sks · 7 MK + PKM (minggu ke-9)",
  "warna": [
   "#FFE082",
   "#F9A825"
  ],
  "ikon": "smt4",
  "pkm": {
   "nama": "PKM / PKTOS — minggu ke-9",
   "cpl": {
    "8": "R",
    "9": "R",
    "10": "R"
   }
  },
  "mk": [
   {
    "id": "MK-28",
    "no": 28,
    "nama": "Statistika & Desain Eksperimen",
    "sks": 3,
    "smt": "IV",
    "smtNo": 4,
    "kode": "TMA …",
    "irma": {
     "3": "A",
     "5": "R"
    },
    "p": [
     "P1"
    ],
    "pra": [
     "Matematika Terapan II"
    ],
    "kel": "Inti",
    "bentuk": "Teori + pengolahan data",
    "catat": "",
    "warna": [
     "#CE93D8",
     "#6A1B9A"
    ],
    "ikon": "p1",
    "asesmen": [
     {
      "cpl": "CPL-3",
      "instrumen": "Laporan rancangan percobaan + pembelaan atas keputusan yang diambil"
     }
    ],
    "jam": 135
   },
   {
    "id": "MK-29",
    "no": 29,
    "nama": "Termodinamika & Mekanika Fluida",
    "sks": 3,
    "smt": "IV",
    "smtNo": 4,
    "kode": "TMA …",
    "irma": {
     "2": "R",
     "7": "R"
    },
    "p": [
     "P2"
    ],
    "pra": [
     "Fisika Terapan"
    ],
    "kel": "Inti",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#B39DDB",
     "#4527A0"
    ],
    "ikon": "p2",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-30",
    "no": 30,
    "nama": "Elemen Mesin II",
    "sks": 2,
    "smt": "IV",
    "smtNo": 4,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "4": "R"
    },
    "p": [
     "P10"
    ],
    "pra": [
     "Elemen Mesin I"
    ],
    "kel": "Inti",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#4DD0E1",
     "#006064"
    ],
    "ikon": "p10",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-31",
    "no": 31,
    "nama": "CAD/CAM",
    "sks": 3,
    "smt": "IV",
    "smtNo": 4,
    "kode": "TMA …",
    "irma": {
     "4": "R",
     "6": "A"
    },
    "p": [
     "P13"
    ],
    "pra": [
     "CAD II"
    ],
    "kel": "Inti",
    "bentuk": "Laboratorium komputer + mesin CNC",
    "catat": "",
    "warna": [
     "#A5D6A7",
     "#1B5E20"
    ],
    "ikon": "p13",
    "asesmen": [
     {
      "cpl": "CPL-6",
      "instrumen": "Proyek rantai CAD → CAM → CNC sampai benda jadi"
     }
    ],
    "jam": 135
   },
   {
    "id": "MK-32",
    "no": 32,
    "nama": "Metrologi & Pengendalian Mutu",
    "sks": 3,
    "smt": "IV",
    "smtNo": 4,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "5": "A"
    },
    "p": [
     "P14"
    ],
    "pra": [
     "Gambar Teknik"
    ],
    "kel": "Inti",
    "bentuk": "Teori + laboratorium metrologi",
    "catat": "",
    "warna": [
     "#FFE082",
     "#F9A825"
    ],
    "ikon": "p14",
    "asesmen": [
     {
      "cpl": "CPL-5",
      "instrumen": "Tugas pengukuran ber-traceability + peta kendali (SPC) dari data nyata"
     }
    ],
    "jam": 135
   },
   {
    "id": "MK-33",
    "no": 33,
    "nama": "Praktek Proses Manufaktur II",
    "sks": 3,
    "smt": "IV",
    "smtNo": 4,
    "kode": "TMA …",
    "irma": {
     "2": "A",
     "6": "R",
     "8": "R"
    },
    "p": [
     "P4",
     "P25"
    ],
    "pra": [
     "Praktek Proses Manufaktur I"
    ],
    "kel": "Praktek",
    "bentuk": "Praktek bengkel + CNC",
    "catat": "",
    "warna": [
     "#64B5F6",
     "#1565C0"
    ],
    "ikon": "p4",
    "asesmen": [
     {
      "cpl": "CPL-2",
      "instrumen": "Penilaian benda kerja + lembar proses (process sheet)"
     }
    ],
    "jam": 135
   },
   {
    "id": "MK-34",
    "no": 34,
    "nama": "Perawatan & Keandalan Mesin",
    "sks": 3,
    "smt": "IV",
    "smtNo": 4,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "6": "A"
    },
    "p": [
     "P18"
    ],
    "pra": [
     "Elemen Mesin I"
    ],
    "kel": "Inti",
    "bentuk": "Teori + praktik perawatan",
    "catat": "",
    "warna": [
     "#FFB74D",
     "#E65100"
    ],
    "ikon": "p18",
    "asesmen": [
     {
      "cpl": "CPL-6",
      "instrumen": "Rencana perawatan + analisis kegagalan mesin nyata di bengkel"
     }
    ],
    "jam": 135
   }
  ]
 },
 {
  "id": "SMT-5",
  "no": 5,
  "romawi": "V",
  "sks": 20,
  "ket": "20 sks · 8 MK + PKM (minggu ke-9)",
  "warna": [
   "#FFAB91",
   "#D84315"
  ],
  "ikon": "smt5",
  "pkm": {
   "nama": "PKM / PKTOS — minggu ke-9",
   "cpl": {
    "8": "R",
    "9": "R",
    "10": "R"
   }
  },
  "mk": [
   {
    "id": "MK-35",
    "no": 35,
    "nama": "Automasi Industri I",
    "sks": 3,
    "smt": "V",
    "smtNo": 5,
    "kode": "TMA …",
    "irma": {
     "4": "R",
     "6": "R"
    },
    "p": [
     "P16"
    ],
    "pra": [
     "Pneumatik & Hidrolik",
     "Praktek Teknik Listrik & Elektronika"
    ],
    "kel": "Inti",
    "bentuk": "Teori + laboratorium PLC",
    "catat": "",
    "warna": [
     "#FFAB91",
     "#D84315"
    ],
    "ikon": "p16",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-36",
    "no": 36,
    "nama": "Mold Design",
    "sks": 2,
    "smt": "V",
    "smtNo": 5,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "4": "M"
    },
    "p": [
     "P11"
    ],
    "pra": [
     "CAD II",
     "Teknologi Bahan II"
    ],
    "kel": "Inti perancangan",
    "bentuk": "Perancangan (studio)",
    "catat": "",
    "warna": [
     "#80CBC4",
     "#00695C"
    ],
    "ikon": "p11",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-37",
    "no": 37,
    "nama": "Press Tools Design",
    "sks": 2,
    "smt": "V",
    "smtNo": 5,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "4": "M"
    },
    "p": [
     "P11"
    ],
    "pra": [
     "CAD II",
     "Mekanika Teknik II"
    ],
    "kel": "Inti perancangan",
    "bentuk": "Perancangan (studio)",
    "catat": "",
    "warna": [
     "#80CBC4",
     "#00695C"
    ],
    "ikon": "p11",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-38",
    "no": 38,
    "nama": "Praktek Pengecoran Logam",
    "sks": 3,
    "smt": "V",
    "smtNo": 5,
    "kode": "TMA …",
    "irma": {
     "1": "R",
     "2": "R",
     "7": "R",
     "8": "A"
    },
    "p": [
     "P6",
     "P23",
     "P25"
    ],
    "pra": [
     "Teknologi Bahan II"
    ],
    "kel": "Praktek",
    "bentuk": "Praktek bengkel pengecoran",
    "catat": "",
    "warna": [
     "#7986CB",
     "#283593"
    ],
    "ikon": "p6",
    "asesmen": [
     {
      "cpl": "CPL-8",
      "instrumen": "Rubrik kerja tim regu pengecoran: pembagian peran, koordinasi peleburan dan penuangan, kepatuhan aba-aba dan K3"
     }
    ],
    "jam": 135
   },
   {
    "id": "MK-39",
    "no": 39,
    "nama": "Praktek Teknik Pelapisan",
    "sks": 3,
    "smt": "V",
    "smtNo": 5,
    "kode": "TMA …",
    "irma": {
     "1": "R",
     "5": "R",
     "7": "A",
     "8": "R"
    },
    "p": [
     "P7",
     "P23",
     "P25"
    ],
    "pra": [
     "Teknologi Bahan II"
    ],
    "kel": "Praktek",
    "bentuk": "Praktek bengkel elektroplating",
    "catat": "",
    "warna": [
     "#5C6BC0",
     "#1A237E"
    ],
    "ikon": "p7",
    "asesmen": [
     {
      "cpl": "CPL-7",
      "instrumen": "Laporan pengelolaan limbah proses + penilaian risiko lingkungan"
     }
    ],
    "jam": 135
   },
   {
    "id": "MK-40",
    "no": 40,
    "nama": "Praktek EDM & Pengolahan Plastik",
    "sks": 3,
    "smt": "V",
    "smtNo": 5,
    "kode": "TMA …",
    "irma": {
     "6": "R",
     "7": "R",
     "8": "R"
    },
    "p": [
     "P4",
     "P8",
     "P25"
    ],
    "pra": [
     "Praktek Proses Manufaktur II"
    ],
    "kel": "Praktek",
    "bentuk": "Praktek bengkel EDM + injection molding + 3D printing",
    "catat": "",
    "warna": [
     "#64B5F6",
     "#1565C0"
    ],
    "ikon": "p8",
    "asesmen": [],
    "jam": 135
   },
   {
    "id": "MK-41",
    "no": 41,
    "nama": "Ekonomi Teknik & Manajemen Proyek",
    "sks": 2,
    "smt": "V",
    "smtNo": 5,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "9": "R"
    },
    "p": [
     "P20"
    ],
    "pra": [
     "Matematika Terapan II"
    ],
    "kel": "Penunjang",
    "bentuk": "Teori",
    "catat": "",
    "warna": [
     "#D7A07A",
     "#8D4A1F"
    ],
    "ikon": "p20",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-42",
    "no": 42,
    "nama": "Kewirausahaan Technopreneur",
    "sks": 2,
    "smt": "V",
    "smtNo": 5,
    "kode": "TMA …",
    "irma": {
     "9": "R",
     "10": "R"
    },
    "p": [
     "P21"
    ],
    "pra": [],
    "kel": "PENCIRI",
    "bentuk": "Teori + proyek usaha",
    "catat": "",
    "warna": [
     "#F48FB1",
     "#AD1457"
    ],
    "ikon": "p21",
    "asesmen": [],
    "jam": 90
   }
  ]
 },
 {
  "id": "SMT-6",
  "no": 6,
  "romawi": "VI",
  "sks": 18,
  "ket": "18 sks · 8 MK + PKM (minggu ke-9)",
  "warna": [
   "#CE93D8",
   "#6A1B9A"
  ],
  "ikon": "smt6",
  "pkm": {
   "nama": "PKM / PKTOS — minggu ke-9",
   "cpl": {
    "8": "R",
    "9": "R",
    "10": "R"
   }
  },
  "mk": [
   {
    "id": "MK-43",
    "no": 43,
    "nama": "Automasi Industri II",
    "sks": 3,
    "smt": "VI",
    "smtNo": 6,
    "kode": "TMA …",
    "irma": {
     "4": "R",
     "6": "A"
    },
    "p": [
     "P16"
    ],
    "pra": [
     "Automasi Industri I"
    ],
    "kel": "Inti",
    "bentuk": "Teori + laboratorium integrasi",
    "catat": "",
    "warna": [
     "#FFAB91",
     "#D84315"
    ],
    "ikon": "p16",
    "asesmen": [
     {
      "cpl": "CPL-6",
      "instrumen": "Proyek integrasi sistem otomasi (PLC–pneumatik–sensor)"
     }
    ],
    "jam": 135
   },
   {
    "id": "MK-44",
    "no": 44,
    "nama": "Jig & Fixture Design",
    "sks": 2,
    "smt": "VI",
    "smtNo": 6,
    "kode": "TMA …",
    "irma": {
     "4": "M",
     "5": "R"
    },
    "p": [
     "P12"
    ],
    "pra": [
     "Press Tools Design",
     "Praktek Proses Manufaktur II"
    ],
    "kel": "Inti perancangan",
    "bentuk": "Perancangan (studio)",
    "catat": "",
    "warna": [
     "#4DB6AC",
     "#00796B"
    ],
    "ikon": "p12",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-45",
    "no": 45,
    "nama": "Teknologi Konversi Energi & EBT",
    "sks": 3,
    "smt": "VI",
    "smtNo": 6,
    "kode": "TMA …",
    "irma": {
     "5": "R",
     "7": "A"
    },
    "p": [
     "P22"
    ],
    "pra": [
     "Termodinamika & Mekanika Fluida"
    ],
    "kel": "PENCIRI",
    "bentuk": "Teori + proyek turbin",
    "catat": "",
    "warna": [
     "#A5D6A7",
     "#2E7D32"
    ],
    "ikon": "p22",
    "asesmen": [
     {
      "cpl": "CPL-7",
      "instrumen": "Studi kasus efisiensi energi / rancangan pemanfaatan EBT"
     }
    ],
    "jam": 135
   },
   {
    "id": "MK-46",
    "no": 46,
    "nama": "PPIC & Manajemen Rantai Pasok",
    "sks": 2,
    "smt": "VI",
    "smtNo": 6,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "9": "A"
    },
    "p": [
     "P19"
    ],
    "pra": [
     "Ekonomi Teknik & Manajemen Proyek"
    ],
    "kel": "Inti",
    "bentuk": "Teori + studi kasus",
    "catat": "",
    "warna": [
     "#F0B27A",
     "#A04000"
    ],
    "ikon": "p19",
    "asesmen": [
     {
      "cpl": "CPL-9",
      "instrumen": "Studi kasus perencanaan produksi: penjadwalan, kebutuhan bahan, pembelaan atas prioritas"
     }
    ],
    "jam": 90
   },
   {
    "id": "MK-47",
    "no": 47,
    "nama": "Literasi Digital & Akuisisi Data Manufaktur",
    "sks": 2,
    "smt": "VI",
    "smtNo": 6,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "6": "R"
    },
    "p": [
     "P17"
    ],
    "pra": [
     "Pemrograman Komputer & Dasar Kecerdasan Artifisial"
    ],
    "kel": "PENCIRI",
    "bentuk": "Teori + laboratorium akuisisi data",
    "catat": "",
    "warna": [
     "#FFD180",
     "#FF6F00"
    ],
    "ikon": "p17",
    "asesmen": [],
    "jam": 90
   },
   {
    "id": "MK-48",
    "no": 48,
    "nama": "Perancangan Konstruksi Mesin",
    "sks": 2,
    "smt": "VI",
    "smtNo": 6,
    "kode": "TMA …",
    "irma": {
     "3": "R",
     "4": "A",
     "8": "A"
    },
    "p": [
     "P10",
     "P11",
     "P25"
    ],
    "pra": [
     "Elemen Mesin II",
     "CAD II"
    ],
    "kel": "Inti perancangan",
    "bentuk": "Perancangan (studio) + design review",
    "catat": "",
    "warna": [
     "#4DD0E1",
     "#006064"
    ],
    "ikon": "p10",
    "asesmen": [
     {
      "cpl": "CPL-4",
      "instrumen": "Berkas rancangan lengkap (gambar kerja + perhitungan) + design review"
     },
     {
      "cpl": "CPL-8",
      "instrumen": "Design review: presentasi rancangan di hadapan panel + berkas gambar kerja yang terbaca pihak lain"
     }
    ],
    "jam": 90
   },
   {
    "id": "MK-49",
    "no": 49,
    "nama": "Metodologi Penelitian Terapan",
    "sks": 2,
    "smt": "VI",
    "smtNo": 6,
    "kode": "TMA …",
    "irma": {
     "3": "M",
     "10": "A"
    },
    "p": [
     "P26"
    ],
    "pra": [
     "Statistika & Desain Eksperimen"
    ],
    "kel": "Penunjang",
    "bentuk": "Teori + penyusunan proposal",
    "catat": "",
    "warna": [
     "#CE93D8",
     "#7B1FA2"
    ],
    "ikon": "p26",
    "asesmen": [
     {
      "cpl": "CPL-10",
      "instrumen": "Proposal penelitian terapan + kajian pustaka dengan sumber primer berbahasa Inggris"
     }
    ],
    "jam": 90
   },
   {
    "id": "MK-50",
    "no": 50,
    "nama": "Etika Profesi",
    "sks": 2,
    "smt": "VI",
    "smtNo": 6,
    "kode": "TMA …",
    "irma": {
     "1": "A",
     "10": "R"
    },
    "p": [
     "P24"
    ],
    "pra": [
     "K3 & Hukum Ketenagakerjaan"
    ],
    "kel": "Penunjang",
    "bentuk": "Teori + studi kasus",
    "catat": "",
    "warna": [
     "#EF9A9A",
     "#B71C1C"
    ],
    "ikon": "p24",
    "asesmen": [
     {
      "cpl": "CPL-1",
      "instrumen": "Studi kasus dilema etika keinsinyuran + rubrik penalaran etis"
     }
    ],
    "jam": 90
   }
  ]
 },
 {
  "id": "SMT-7",
  "no": 7,
  "romawi": "VII",
  "sks": 20,
  "ket": "20 sks · 1 MK",
  "warna": [
   "#9FA8DA",
   "#283593"
  ],
  "ikon": "smt7",
  "pkm": null,
  "mk": [
   {
    "id": "MK-51",
    "no": 51,
    "nama": "Magang Industri",
    "sks": 20,
    "smt": "VII",
    "smtNo": 7,
    "kode": "TMA …",
    "irma": {
     "1": "A",
     "6": "M",
     "7": "R",
     "8": "A",
     "9": "A",
     "10": "A"
    },
    "p": [
     "seluruh P"
    ],
    "pra": [
     "Lulus seluruh MK semester I–VI (min. 118 sks)"
    ],
    "kel": "Magang wajib vokasi",
    "bentuk": "Magang industri penuh satu semester",
    "catat": "Memenuhi ketentuan magang wajib vokasi minimal 20 sks / 1 semester (Panduan PNP 2025, hlm. 36). Kurikulum berjalan hanya 8 sks — inilah salah satu dari empat perbaikan kepatuhan.",
    "warna": [
     "#9FA8DA",
     "#283593"
    ],
    "ikon": "smt7",
    "asesmen": [
     {
      "cpl": "CPL-1",
      "instrumen": "Penilaian sikap, kedisiplinan, dan kepatuhan K3 oleh pembimbing industri + logbook"
     },
     {
      "cpl": "CPL-8",
      "instrumen": "Laporan magang + presentasi + penilaian kerja tim oleh pembimbing industri"
     },
     {
      "cpl": "CPL-9",
      "instrumen": "Penilaian prakarsa dan kontribusi di unit kerja (intrapreneurship)"
     },
     {
      "cpl": "CPL-10",
      "instrumen": "Logbook mingguan + rubrik kemandirian belajar"
     }
    ],
    "jam": 900
   }
  ]
 },
 {
  "id": "SMT-8",
  "no": 8,
  "romawi": "VIII",
  "sks": 8,
  "ket": "8 sks · 1 MK",
  "warna": [
   "#EF9A9A",
   "#B71C1C"
  ],
  "ikon": "smt8",
  "pkm": null,
  "mk": [
   {
    "id": "MK-52",
    "no": 52,
    "nama": "Capstone Design / Tugas Akhir",
    "sks": 8,
    "smt": "VIII",
    "smtNo": 8,
    "kode": "TMA …",
    "irma": {
     "1": "R",
     "2": "M",
     "3": "A",
     "4": "A",
     "5": "A",
     "6": "M",
     "7": "M",
     "8": "A",
     "9": "A",
     "10": "A"
    },
    "p": [
     "seluruh P"
    ],
    "pra": [
     "Magang Industri",
     "Metodologi Penelitian Terapan",
     "Perancangan Konstruksi Mesin"
    ],
    "kel": "Capstone",
    "bentuk": "Proyek rancang bangun / penelitian terapan",
    "catat": "Dua jalur: (1) Energi baru terbarukan — turbin air aliran silang; (2) Manufaktur sirkular — daur ulang plastik: pencacah, pelet, injection molding, 3D printing dengan filler botol bekas.",
    "warna": [
     "#EF9A9A",
     "#B71C1C"
    ],
    "ikon": "smt8",
    "asesmen": [
     {
      "cpl": "CPL-3",
      "instrumen": "Rubrik dimensi analisis & pemilihan alternatif pada sidang TA"
     },
     {
      "cpl": "CPL-4",
      "instrumen": "Rubrik dimensi mutu rancangan & manufacturability"
     },
     {
      "cpl": "CPL-5",
      "instrumen": "Rubrik dimensi pengujian & keabsahan data"
     },
     {
      "cpl": "CPL-8",
      "instrumen": "Rubrik dimensi laporan & sidang"
     },
     {
      "cpl": "CPL-9",
      "instrumen": "Rubrik dimensi kelayakan teknis–ekonomis"
     },
     {
      "cpl": "CPL-10",
      "instrumen": "Rubrik dimensi penelusuran literatur & kemandirian"
     }
    ],
    "jam": 360
   }
  ]
 }
];
const ALOKASI_SMT1 = {
 "MK-1": "MP25.1 Bahasa Indonesia ragam ilmiah · MP25.2 Penulisan laporan teknis (dasar) · MP25.3 Penyajian lisan (dasar)",
 "MK-2": "MP1.1 Aljabar, trigonometri, dan fungsi · MP1.2 Kalkulus diferensial dan integral",
 "MK-3": "MP2.1 Kinematika dan dinamika benda · MP2.3 Kalor, suhu, pemuaian · pengantar MP2.2 dan MP2.4",
 "MK-4": "MP9.1 Dasar gambar teknik · MP9.2 Proyeksi · MP9.3 Gambar potongan · MP9.4 Ukuran, suaian, toleransi linear · MP9.6 Gambar susunan",
 "MK-5": "MP3.1 Struktur atom dan kristal · MP3.2 Diagram fasa · MP3.3 Sifat mekanis bahan",
 "MK-6": "MP4.1 Teori pemotongan logam · MP4.2 Proses bubut · MP4.3 Proses frais dan sekrap · MP4.4 Gurdi, bor, reamer · MP4.8 Keselamatan mesin perkakas · MP5.1 Dasar pengelasan dan fabrikasi · MP5.4 GMAW/GTAW (teoretis)",
 "MK-7": "MP4.9 Kerja bangku · MP4.7 Gerinda dan tool grinding · MP4.8 Keselamatan mesin perkakas · MP5.2 Las gas · MP5.3 SMAW · MP25.7 Kerja tim",
 "MK-8": "MP23.1 Dasar K3 · MP23.2 HIRADC · MP23.3 APD dan tanggap darurat · MP24.6 Hukum ketenagakerjaan",
 "MK-9": "MP17.1 Dasar algoritma dan pemrograman · MP17.5 Pengolahan dan penyajian data · MP17.7 Dasar kecerdasan artifisial"
};

/* --- RPS yang sudah tersedia --- */
const RPS = {
 "MK-6": {
  "status": "ada",
  "kode": "TMA …",
  "form": "No.1/PL9.22/KR.01.02/2024 (Revisi 3) — ditetapkan PPMPP",
  "cplBeban": [
   [
    "CPL-1",
    "Aspek Sikap",
    "Menunjukkan sikap religius, berakhlak mulia, dan berkarakter sesuai nilai-nilai Pancasila, serta menerapkan etika profesi keinsinyuran, tanggung jawab keselamatan dan kesehatan kerja, dan kepatuhan terhadap standar, norma, dan peraturan yang berlaku dalam melaksanakan pekerjaan di bidang teknik manufaktur."
   ],
   [
    "CPL-2",
    "Aspek Pengetahuan",
    "Mampu menerapkan pengetahuan matematika, sains alam, dasar-dasar keteknikan, dan pengetahuan spesialis bidang teknik manufaktur untuk menyelesaikan permasalahan keteknikan yang terdefinisi secara luas pada lingkup pekerjaannya."
   ],
   [
    "CPL-6",
    "Aspek Keterampilan Khusus",
    "Mampu memilih, menggunakan, dan memelihara perangkat lunak serta perangkat keras modern bidang manufaktur — meliputi CAD/CAM/CAE, mesin CNC, kendali terprogram (PLC), sistem hidrolik dan pneumatik, sensor dan IoT, SCADA, simulasi sistem robotik, serta perkakas analitik data — dengan memahami keterbatasan masing-masing perangkat dan menjaga keandalan operasinya."
   ]
  ],
  "cpmk": [
   [
    "CPMK-1",
    "Mampu menjelaskan prinsip pembentukan geram serta pengaruh geometri pahat, bahan pahat, dan keausan terhadap hasil pemesinan.",
    [
     "CPL-2"
    ]
   ],
   [
    "CPMK-2",
    "Mampu menjelaskan prinsip kerja dan bagian utama mesin perkakas konvensional — bubut, gurdi, frais, dan gerinda — serta menentukan mesin dan cara pengerjaan yang sesuai untuk bentuk benda kerja tertentu.",
    [
     "CPL-2",
     "CPL-6"
    ]
   ],
   [
    "CPMK-3",
    "Mampu menetapkan parameter pemotongan dari tabel dan rumus untuk pekerjaan pemesinan sederhana serta memperkirakan waktu pengerjaannya.",
    [
     "CPL-2"
    ]
   ],
   [
    "CPMK-4",
    "Mampu menjelaskan fungsi cairan pemotong, bahaya kerja mesin perkakas, penanganan geram, dan perawatan dasar mesin perkakas sesuai prosedur yang berlaku.",
    [
     "CPL-1",
     "CPL-6"
    ]
   ]
  ],
  "deskripsi": "Mata kuliah Teknologi Mekanik mempelajari dasar-dasar proses pemesinan pada mesin perkakas konvensional, meliputi teori pembentukan geram, geometri dan bahan pahat, gaya potong dan daya pemotongan, keausan dan umur pahat, prinsip kerja mesin bubut, gurdi, frais, dan gerinda, penetapan parameter pemotongan, serta cairan pemotong, penanganan geram, dan keselamatan kerja mesin perkakas. Mata kuliah ini berjalan serentak dengan Praktek Teknologi Mekanik I sehingga teori yang dipelajari langsung berpasangan dengan pekerjaan bengkel pada minggu yang sama. Melalui pendekatan Case Method dan Team Based Project, mahasiswa menyusun lembar rencana proses untuk sebuah benda kerja nyata, lengkap dengan urutan pengerjaan, pemilihan mesin dan pahat, parameter pemotongan, dan perkiraan waktu.",
  "catatanMinggu": "Minggu kalender ke-9 adalah PKM — tidak ada perkuliahan; 16 pertemuan tetap utuh, pertemuan ke-9 jatuh pada minggu kalender ke-10.",
  "minggu": [
   [
    1,
    "Mampu menjelaskan ruang lingkup dan kedudukan proses pemesinan dalam rantai manufaktur serta mengenali bahaya kerja mesin perkakas, dan menyepakati kontrak perkuliahan dengan penuh tanggung jawab.",
    "Pengantar Teknologi Mekanik; kontrak kuliah; sistem penilaian; keselamatan kerja mesin perkakas (MP4.8).",
    "Tatap muka; kuliah interaktif; Student Centered Learning (SCL); ceramah, diskusi, tanya jawab.",
    "2 × 50",
    "Menyimak kontrak kuliah, mengamati tayangan kerja bengkel, menandai lima potensi bahaya beserta pengendaliannya.",
    "Aktivitas partisipatif",
    "Ketepatan menyebut jenis bahaya dan pengendaliannya serta keaktifan dalam diskusi kontrak kuliah.",
    2,
    "CM"
   ],
   [
    2,
    "Mampu menjelaskan mekanisme pembentukan geram dan membedakan jenis geram beserta sebab terbentuknya.",
    "Teori pemotongan logam; mekanisme pembentukan geram; jenis geram (MP4.1).",
    "Tatap muka; SCL; Case Method (CM); diskusi kelompok atas contoh geram nyata.",
    "2 × 50",
    "Mengamati contoh geram nyata dan menghubungkannya dengan kondisi pemotongan yang menghasilkannya.",
    "Aktivitas partisipatif",
    "Ketepatan menghubungkan jenis geram dengan kondisi pemotongan.",
    2,
    "CM"
   ],
   [
    3,
    "Mampu menjelaskan sudut-sudut pahat dan memilih bahan pahat yang sesuai dengan bahan benda kerja.",
    "Geometri pahat: sudut baji, sudut bebas, sudut garuk; bahan pahat HSS, karbida, keramik (MP4.1).",
    "Tatap muka; SCL; ceramah dan latihan terbimbing menggambar geometri pahat.",
    "2 × 50",
    "Menggambar geometri pahat bubut, menandai sudut-sudutnya, memilih bahan pahat untuk tiga bahan benda kerja berbeda.",
    "Penugasan individu (TGS)",
    "Ketepatan penamaan sudut pahat dan kesesuaian pemilihan bahan pahat.",
    5,
    "TGS"
   ],
   [
    4,
    "Mampu menghitung gaya potong dan daya pemotongan untuk pekerjaan bubut sederhana.",
    "Gaya potong, daya pemotongan, dan kaitannya dengan daya motor mesin (MP4.1).",
    "Tatap muka; SCL; latihan soal terbimbing dengan data nyata mesin bengkel PNP.",
    "2 × 50",
    "Mengerjakan tiga soal perhitungan gaya dan daya memakai data mesin bubut yang ada di bengkel.",
    "Penugasan individu (TGS)",
    "Kebenaran perhitungan, kesesuaian satuan, dan kelogisan penafsiran hasil terhadap daya mesin.",
    5,
    "TGS"
   ],
   [
    5,
    "Mampu menjelaskan mekanisme keausan pahat dan pengaruhnya terhadap umur pahat serta mutu permukaan.",
    "Keausan tepi dan keausan kawah; umur pahat; persamaan Taylor sederhana (MP4.1).",
    "Tatap muka; SCL; Case Method; pemeriksaan pahat bekas pakai dari bengkel.",
    "2 × 50",
    "Memeriksa pahat bekas pakai, mengenali pola keausannya, memperkirakan sebabnya.",
    "Kuis (QIZ)",
    "Ketepatan mengenali pola keausan dan menjelaskan sebabnya.",
    5,
    "QIZ"
   ],
   [
    6,
    "Mampu menjelaskan bagian utama, gerakan, dan cara pencekaman pada mesin bubut.",
    "Mesin bubut: bagian utama, gerakan utama dan gerakan makan, alat cekam (MP4.2).",
    "Tatap muka; SCL; ceramah disertai demonstrasi singkat di bengkel.",
    "2 × 50",
    "Menandai bagian mesin bubut pada gambar dan pada mesin sebenarnya, memilih alat cekam untuk tiga bentuk benda kerja.",
    "Aktivitas partisipatif",
    "Ketepatan penamaan bagian mesin dan pemilihan alat cekam.",
    2,
    "CM"
   ],
   [
    7,
    "Mampu menentukan urutan pengerjaan bubut untuk benda kerja bertingkat, tirus, dan berulir, serta menetapkan benda kerja yang akan dianalisis sepanjang semester.",
    "Pekerjaan bubut: membubut rata, bertingkat, tirus, dan ulir; penetapan benda kerja proyek dan pembentukan kelompok (MP4.2).",
    "Tatap muka; Team Based Project (TBP); kerja kelompok terstruktur penyusunan urutan kerja.",
    "2 × 50",
    "Kelompok memilih satu gambar kerja, menyusun urutan pengerjaan awal, mempresentasikan alasan pemilihannya.",
    "Penugasan kelompok (TBP)",
    "Kelogisan urutan pengerjaan dan kesesuaian dengan acuan pencekaman.",
    3,
    "TBP"
   ],
   [
    8,
    "UJIAN TENGAH SEMESTER — Mampu menjelaskan dan menghitung pokok bahasan pertemuan 1–7 secara terpadu.",
    "Bahan pertemuan 1–7.",
    "Ujian tertulis.",
    "100",
    "Mengerjakan soal terapan lintas topik.",
    "Ujian Tengah Semester (UTS)",
    "Ketepatan jawaban, ketepatan prosedur, analisis konsep, dan kerapian penyajian.",
    20,
    "UTS"
   ],
   [
    9,
    "Mampu menjelaskan pekerjaan pengeboran, pengetapan, dan penyenaian serta memilih parameter dan ukuran alat yang sesuai.",
    "Mesin gurdi; mata bor; pengetapan dan penyenaian; penetapan diameter bor untuk ulir (MP4.2).",
    "Tatap muka; SCL; latihan pembacaan tabel.",
    "2 × 50",
    "Menetapkan diameter bor untuk lima ukuran ulir dari tabel dan memeriksanya dengan perhitungan.",
    "Kuis (QIZ)",
    "Ketepatan pembacaan tabel dan pemilihan ukuran alat.",
    5,
    "QIZ"
   ],
   [
    10,
    "Mampu menjelaskan bagian utama mesin frais, jenis pisau, dan arah gerakan pemakanan.",
    "Mesin frais: bagian utama, jenis pisau frais, frais naik dan frais turun (MP4.3).",
    "Tatap muka; SCL; ceramah disertai demonstrasi singkat di bengkel.",
    "2 × 50",
    "Menandai bagian mesin frais dan mencocokkan jenis pisau dengan bentuk hasil pengerjaan.",
    "Aktivitas partisipatif",
    "Ketepatan pencocokan jenis pisau dengan bentuk pengerjaan.",
    2,
    "CM"
   ],
   [
    11,
    "Mampu menentukan cara pengerjaan frais untuk bidang datar, alur, dan pembagian sederhana.",
    "Pekerjaan frais: bidang datar, alur, dan kepala pembagi; perhitungan pembagian (MP4.3).",
    "Tatap muka; SCL; latihan perhitungan pembagian terbimbing.",
    "2 × 50",
    "Menghitung putaran kepala pembagi untuk tiga jumlah bagian yang berbeda.",
    "Penugasan individu (TGS)",
    "Kebenaran perhitungan pembagian dan kesesuaian pemilihan piring pembagi.",
    5,
    "TGS"
   ],
   [
    12,
    "Mampu menjelaskan proses gerinda dan proses penyelesaian permukaan serta menempatkannya dalam urutan pengerjaan.",
    "Mesin gerinda; batu gerinda; proses penyelesaian permukaan dan kedudukannya dalam urutan kerja (MP4.3).",
    "Tatap muka; TBP; kerja kelompok melanjutkan lembar rencana proses.",
    "2 × 50",
    "Kelompok menyisipkan tahap penyelesaian ke dalam urutan pengerjaan benda kerja proyeknya.",
    "Penugasan kelompok (TBP)",
    "Ketepatan menempatkan tahap gerinda dan kesesuaiannya dengan tuntutan toleransi.",
    4,
    "TBP"
   ],
   [
    13,
    "Mampu menetapkan kecepatan potong, gerak makan, dan kedalaman potong dari tabel untuk pekerjaan tertentu.",
    "Parameter pemesinan: kecepatan potong, gerak makan, kedalaman potong; pembacaan tabel (MP4.4).",
    "Tatap muka; SCL; Case Method; latihan berbasis kasus pekerjaan nyata.",
    "2 × 50",
    "Menetapkan parameter untuk satu pekerjaan nyata dan membelanya di depan kelas.",
    "Aktivitas partisipatif",
    "Ketepatan parameter dan kekuatan alasan pemilihannya.",
    2,
    "CM"
   ],
   [
    14,
    "Mampu memperkirakan waktu pengerjaan dan mengenali pertukaran antara mutu permukaan, waktu pengerjaan, dan umur pahat.",
    "Perhitungan waktu pemesinan; optimasi kondisi potong; pertukaran mutu–waktu–umur pahat (MP4.4).",
    "Tatap muka; TBP; kerja kelompok melengkapi lembar rencana proses.",
    "2 × 50",
    "Kelompok melengkapi lembar rencana proses dengan parameter potong dan perkiraan waktu, membandingkan dua pilihan kondisi potong.",
    "Penugasan kelompok (TBP)",
    "Kebenaran perhitungan waktu dan kelogisan pertimbangan pertukaran.",
    4,
    "TBP"
   ],
   [
    15,
    "Mampu menjelaskan fungsi cairan pemotong, penanganan geram, dan perawatan dasar mesin perkakas, serta mempresentasikan lembar rencana proses kelompok.",
    "Cairan pemotong; penanganan geram; perawatan dasar mesin perkakas (MP4.8); presentasi proyek semester.",
    "Tatap muka; TBP; presentasi kelompok dan diskusi.",
    "2 × 50",
    "Kelompok mempresentasikan lembar rencana proses dan menyusun daftar periksa perawatan harian satu mesin bengkel PNP.",
    "Presentasi kelompok (TBP)",
    "Kelengkapan lembar rencana proses, kualitas penyajian, dan kemampuan menjawab pertanyaan.",
    4,
    "TBP"
   ],
   [
    16,
    "UJIAN AKHIR SEMESTER — Mampu menerapkan seluruh pokok bahasan secara terpadu untuk memilih proses, menetapkan parameter, dan memperkirakan waktu pengerjaan.",
    "Bahan pertemuan 9–15, terpadu dengan pertemuan 1–7.",
    "Ujian tertulis.",
    "100",
    "Mengerjakan soal terapan terpadu berbasis gambar kerja.",
    "Ujian Akhir Semester (UAS)",
    "Ketepatan jawaban, ketepatan prosedur, analisis konsep, dan kerapian penyajian.",
    30,
    "UAS"
   ]
  ],
  "evaluasi": [
   [
    1,
    "Aktivitas Partisipatif (Case Method)",
    "CM",
    "Mahasiswa mampu berpartisipasi aktif dalam diskusi dan kegiatan pembelajaran",
    "Students are able to actively participate in discussion and learning activities",
    10
   ],
   [
    2,
    "Hasil Proyek (Team Based Project)",
    "TBP",
    "Mahasiswa mampu menyusun lembar rencana proses sebuah benda kerja secara lengkap dan mempresentasikannya",
    "Students are able to develop a complete process plan for a workpiece and present it",
    15
   ],
   [
    3,
    "Kognitif/Pengetahuan — Tugas",
    "TGS",
    "Mahasiswa mampu melaksanakan tugas individu dengan baik",
    "Students are able to complete individual assignments properly",
    15
   ],
   [
    4,
    "Kognitif/Pengetahuan — Kuis",
    "QIZ",
    "Mahasiswa mampu menjawab soal kuis dengan tepat",
    "Students are able to answer quiz questions accurately",
    10
   ],
   [
    5,
    "Kognitif/Pengetahuan — UTS",
    "UTS",
    "Mahasiswa mampu menjawab soal UTS dengan tepat dan sistematis",
    "Students are able to answer mid-term exam questions accurately and systematically",
    20
   ],
   [
    6,
    "Kognitif/Pengetahuan — UAS",
    "UAS",
    "Mahasiswa mampu menjawab soal UAS dengan tepat dan sistematis",
    "Students are able to answer final exam questions accurately and systematically",
    30
   ]
  ],
  "rubrikE": {
   "judul": "Rubrik E — Lembar Rencana Proses (disusun khusus; Rubrik A–D diambil utuh dari formulir resmi)",
   "pita": "80–100 (skor 4) · 65–79 (skor 3) · 55–64 (skor 2) · 0–54 (skor 1)",
   "baris": [
    [
     "Kelengkapan Rencana Proses",
     "Seluruh unsur (urutan pengerjaan, mesin, pahat, parameter, tahap penyelesaian, waktu) lengkap dan mendalam",
     "Sebagian besar unsur lengkap dengan sedikit kekurangan",
     "Beberapa unsur kurang lengkap atau dangkal",
     "Banyak unsur tidak ada atau tidak relevan"
    ],
    [
     "Ketepatan Teknis",
     "Pemilihan mesin, pahat, dan parameter tepat serta sesuai kemampuan bengkel PNP",
     "Pemilihan sebagian besar tepat dengan sedikit kesalahan",
     "Pemilihan cukup tepat namun kurang konsisten",
     "Pemilihan tidak tepat atau tidak dapat dikerjakan"
    ],
    [
     "Pertimbangan Keselamatan dan Efisiensi",
     "Aspek keselamatan kerja, penanganan geram, dan efisiensi waktu dipertimbangkan eksplisit dan kuantitatif",
     "Sebagian besar aspek dipertimbangkan",
     "Hanya satu–dua aspek dipertimbangkan, kurang mendalam",
     "Tidak ada pertimbangan keselamatan maupun efisiensi"
    ],
    [
     "Kualitas Penyajian",
     "Presentasi sangat sistematis, gambar dan tabel menjelaskan sendiri, mudah dipahami",
     "Penyajian cukup sistematis dan jelas",
     "Penyajian kurang sistematis",
     "Tidak sistematis dan sulit dipahami"
    ],
    [
     "Kemampuan Menjawab Pertanyaan",
     "Menjawab semua pertanyaan dengan tepat, percaya diri, dan berargumen dengan data",
     "Sebagian besar pertanyaan dijawab dengan baik",
     "Menjawab beberapa pertanyaan, kurang argumentatif",
     "Tidak mampu menjawab pertanyaan dengan tepat"
    ]
   ]
  },
  "peringatan": "Rujukan kode MP di dalam RPS ini masih memakai penomoran berkas v2 (MP4.3 dan MP4.4). Pada daftar v3, MP4.3 = proses frais dan sekrap, sedangkan parameter potong masuk ke MP4.1. Seluruh rujukan MP wajib dicocokkan sekali lagi sebelum RPS disahkan (Temuan 3)."
 }
};

/* --- Peta I/R/M/A & Assessment Plan --- */
const IRMA = {
 "sem": [
  {
   "smt": "I",
   "sks": 20,
   "ket": "20 sks · 9 MK + PKM (minggu ke-9)",
   "rows": [
    [
     1,
     "Bahasa Indonesia",
     2,
     {
      "8": "I"
     }
    ],
    [
     2,
     "Matematika Terapan I",
     2,
     {
      "2": "I",
      "3": "I"
     }
    ],
    [
     3,
     "Fisika Terapan",
     2,
     {
      "2": "I"
     }
    ],
    [
     4,
     "Gambar Teknik",
     3,
     {
      "4": "I",
      "8": "I"
     }
    ],
    [
     5,
     "Teknologi Bahan I",
     2,
     {
      "2": "I"
     }
    ],
    [
     6,
     "Teknologi Mekanik",
     2,
     {
      "2": "I",
      "6": "I"
     }
    ],
    [
     7,
     "Praktek Teknologi Mekanik I",
     3,
     {
      "2": "R",
      "6": "I",
      "8": "I"
     }
    ],
    [
     8,
     "K3 & Hukum Ketenagakerjaan",
     2,
     {
      "1": "I",
      "7": "I"
     }
    ],
    [
     9,
     "Pemrograman Komputer & Dasar Kecerdasan Artifisial",
     2,
     {
      "3": "I",
      "6": "I"
     }
    ],
    [
     "★",
     "PKM / PKTOS — minggu ke-9",
     "—",
     {
      "8": "R",
      "9": "I",
      "10": "I"
     }
    ]
   ]
  },
  {
   "smt": "II",
   "sks": 20,
   "ket": "20 sks · 9 MK + PKM (minggu ke-9)",
   "rows": [
    [
     10,
     "Pendidikan Agama",
     2,
     {
      "1": "R"
     }
    ],
    [
     11,
     "Pancasila",
     2,
     {
      "1": "R"
     }
    ],
    [
     12,
     "Matematika Terapan II",
     2,
     {
      "2": "R",
      "3": "R"
     }
    ],
    [
     13,
     "Teknologi Bahan II",
     2,
     {
      "2": "R",
      "5": "I"
     }
    ],
    [
     14,
     "Mekanika Teknik I",
     2,
     {
      "2": "R",
      "3": "R"
     }
    ],
    [
     15,
     "CAD I",
     3,
     {
      "4": "R",
      "6": "R"
     }
    ],
    [
     16,
     "Praktek Teknik Listrik & Elektronika",
     2,
     {
      "1": "R",
      "6": "R",
      "8": "R"
     }
    ],
    [
     17,
     "Praktek Teknologi Mekanik II",
     3,
     {
      "1": "R",
      "2": "R",
      "6": "R",
      "8": "R"
     }
    ],
    [
     18,
     "Komunikasi Teknis",
     2,
     {
      "8": "R"
     }
    ],
    [
     "★",
     "PKM / PKTOS — minggu ke-9",
     "—",
     {
      "8": "R",
      "9": "R",
      "10": "R"
     }
    ]
   ]
  },
  {
   "smt": "III",
   "sks": 20,
   "ket": "20 sks · 9 MK + PKM (minggu ke-9)",
   "rows": [
    [
     19,
     "Pendidikan Kewarganegaraan",
     2,
     {
      "1": "R"
     }
    ],
    [
     20,
     "Mekanika Teknik II",
     2,
     {
      "2": "R",
      "3": "R"
     }
    ],
    [
     21,
     "Elemen Mesin I",
     2,
     {
      "2": "R",
      "4": "R"
     }
    ],
    [
     22,
     "Proses Manufaktur",
     2,
     {
      "2": "A",
      "4": "R"
     }
    ],
    [
     23,
     "CAD II",
     2,
     {
      "4": "R",
      "6": "R"
     }
    ],
    [
     24,
     "Praktek Pengujian Bahan",
     3,
     {
      "2": "R",
      "5": "R",
      "8": "R"
     }
    ],
    [
     25,
     "Praktek Proses Manufaktur I",
     3,
     {
      "2": "R",
      "6": "R",
      "8": "R"
     }
    ],
    [
     26,
     "Bahasa Inggris Teknik",
     2,
     {
      "8": "R",
      "10": "R"
     }
    ],
    [
     27,
     "Pneumatik & Hidrolik",
     2,
     {
      "4": "R",
      "6": "R"
     }
    ],
    [
     "★",
     "PKM / PKTOS — minggu ke-9",
     "—",
     {
      "8": "R",
      "9": "R",
      "10": "R"
     }
    ]
   ]
  },
  {
   "smt": "IV",
   "sks": 20,
   "ket": "20 sks · 7 MK + PKM (minggu ke-9)",
   "rows": [
    [
     28,
     "Statistika & Desain Eksperimen",
     3,
     {
      "3": "A",
      "5": "R"
     }
    ],
    [
     29,
     "Termodinamika & Mekanika Fluida",
     3,
     {
      "2": "R",
      "7": "R"
     }
    ],
    [
     30,
     "Elemen Mesin II",
     2,
     {
      "3": "R",
      "4": "R"
     }
    ],
    [
     31,
     "CAD/CAM",
     3,
     {
      "4": "R",
      "6": "A"
     }
    ],
    [
     32,
     "Metrologi & Pengendalian Mutu",
     3,
     {
      "3": "R",
      "5": "A"
     }
    ],
    [
     33,
     "Praktek Proses Manufaktur II",
     3,
     {
      "2": "A",
      "6": "R",
      "8": "R"
     }
    ],
    [
     34,
     "Perawatan & Keandalan Mesin",
     3,
     {
      "3": "R",
      "6": "A"
     }
    ],
    [
     "★",
     "PKM / PKTOS — minggu ke-9",
     "—",
     {
      "8": "R",
      "9": "R",
      "10": "R"
     }
    ]
   ]
  },
  {
   "smt": "V",
   "sks": 20,
   "ket": "20 sks · 8 MK + PKM (minggu ke-9)",
   "rows": [
    [
     35,
     "Automasi Industri I",
     3,
     {
      "4": "R",
      "6": "R"
     }
    ],
    [
     36,
     "Mold Design",
     2,
     {
      "3": "R",
      "4": "M"
     }
    ],
    [
     37,
     "Press Tools Design",
     2,
     {
      "3": "R",
      "4": "M"
     }
    ],
    [
     38,
     "Praktek Pengecoran Logam",
     3,
     {
      "1": "R",
      "2": "R",
      "7": "R",
      "8": "A"
     }
    ],
    [
     39,
     "Praktek Teknik Pelapisan",
     3,
     {
      "1": "R",
      "5": "R",
      "7": "A",
      "8": "R"
     }
    ],
    [
     40,
     "Praktek EDM & Pengolahan Plastik",
     3,
     {
      "6": "R",
      "7": "R",
      "8": "R"
     }
    ],
    [
     41,
     "Ekonomi Teknik & Manajemen Proyek",
     2,
     {
      "3": "R",
      "9": "R"
     }
    ],
    [
     42,
     "Kewirausahaan Technopreneur",
     2,
     {
      "9": "R",
      "10": "R"
     }
    ],
    [
     "★",
     "PKM / PKTOS — minggu ke-9",
     "—",
     {
      "8": "R",
      "9": "R",
      "10": "R"
     }
    ]
   ]
  },
  {
   "smt": "VI",
   "sks": 18,
   "ket": "18 sks · 8 MK + PKM (minggu ke-9)",
   "rows": [
    [
     43,
     "Automasi Industri II",
     3,
     {
      "4": "R",
      "6": "A"
     }
    ],
    [
     44,
     "Jig & Fixture Design",
     2,
     {
      "4": "M",
      "5": "R"
     }
    ],
    [
     45,
     "Teknologi Konversi Energi & EBT",
     3,
     {
      "5": "R",
      "7": "A"
     }
    ],
    [
     46,
     "PPIC & Manajemen Rantai Pasok",
     2,
     {
      "3": "R",
      "9": "A"
     }
    ],
    [
     47,
     "Literasi Digital & Akuisisi Data Manufaktur",
     2,
     {
      "3": "R",
      "6": "R"
     }
    ],
    [
     48,
     "Perancangan Konstruksi Mesin",
     2,
     {
      "3": "R",
      "4": "A",
      "8": "A"
     }
    ],
    [
     49,
     "Metodologi Penelitian Terapan",
     2,
     {
      "3": "M",
      "10": "A"
     }
    ],
    [
     50,
     "Etika Profesi",
     2,
     {
      "1": "A",
      "10": "R"
     }
    ],
    [
     "★",
     "PKM / PKTOS — minggu ke-9",
     "—",
     {
      "8": "R",
      "9": "R",
      "10": "R"
     }
    ]
   ]
  },
  {
   "smt": "VII",
   "sks": 20,
   "ket": "20 sks · 1 MK",
   "rows": [
    [
     51,
     "Magang Industri",
     20,
     {
      "1": "A",
      "6": "M",
      "7": "R",
      "8": "A",
      "9": "A",
      "10": "A"
     }
    ]
   ]
  },
  {
   "smt": "VIII",
   "sks": 8,
   "ket": "8 sks · 1 MK",
   "rows": [
    [
     52,
     "Capstone Design / Tugas Akhir",
     8,
     {
      "1": "R",
      "2": "M",
      "3": "A",
      "4": "A",
      "5": "A",
      "6": "M",
      "7": "M",
      "8": "A",
      "9": "A",
      "10": "A"
     }
    ]
   ]
  }
 ],
 "cpl": [
  [
   1,
   "Sikap, Etika, dan Tanggung Jawab Profesi"
  ],
  [
   2,
   "Pengetahuan Keteknikan"
  ],
  [
   3,
   "Analisis Masalah dan Pengambilan Keputusan"
  ],
  [
   4,
   "Perancangan dan Pengembangan Solusi"
  ],
  [
   5,
   "Investigasi, Pengujian, dan Pengendalian Mutu"
  ],
  [
   6,
   "Penggunaan dan Pemeliharaan Perangkat Modern"
  ],
  [
   7,
   "Keteknikan, Masyarakat, dan Keberlanjutan"
  ],
  [
   8,
   "Kerja Tim dan Komunikasi"
  ],
  [
   9,
   "Manajemen Proyek, Ekonomi Teknik, dan Kewirausahaan"
  ],
  [
   10,
   "Pembelajar Sepanjang Hayat"
  ]
 ],
 "rekap": [
  [
   "CPL-1",
   11,
   21,
   "1/8/0/2",
   1,
   "Etika Profesi (VI) · Magang Industri (VII)"
  ],
  [
   "CPL-2",
   18,
   41,
   "4/11/1/2",
   2,
   "Proses Manufaktur (III) · Praktek Proses Manufaktur II (IV)"
  ],
  [
   "CPL-3",
   17,
   35,
   "2/12/1/2",
   1,
   "Statistika & Desain Eksperimen (IV) · Capstone/TA (VIII)"
  ],
  [
   "CPL-4",
   15,
   33,
   "1/9/3/2",
   1,
   "Perancangan Konstruksi Mesin (VI) · Capstone/TA (VIII)"
  ],
  [
   "CPL-5",
   8,
   19,
   "1/5/0/2",
   1,
   "Metrologi & Pengendalian Mutu (IV) · Capstone/TA (VIII)"
  ],
  [
   "CPL-6",
   18,
   42,
   "3/10/2/3",
   3,
   "CAD/CAM (IV) · Perawatan & Keandalan Mesin (IV) · Automasi Industri II (VI)"
  ],
  [
   "CPL-7",
   8,
   17,
   "1/4/1/2",
   2,
   "Praktek Teknik Pelapisan (V) · Teknologi Konversi Energi & EBT (VI)"
  ],
  [
   "CPL-8",
   22,
   37,
   "3/15/0/4",
   2,
   "Praktek Pengecoran Logam (V) · Perancangan Konstruksi Mesin (VI) · Magang (VII) · Capstone/TA (VIII)"
  ],
  [
   "CPL-9",
   11,
   6,
   "1/7/0/3",
   1,
   "PPIC & Rantai Pasok (VI) · Magang (VII) · Capstone/TA (VIII)"
  ],
  [
   "CPL-10",
   12,
   8,
   "1/8/0/3",
   1,
   "Metodologi Penelitian Terapan (VI) · Magang (VII) · Capstone/TA (VIII)"
  ]
 ],
 "profil": [
  [
   "I",
   20,
   17,
   2,
   0,
   0
  ],
  [
   "II",
   20,
   1,
   20,
   0,
   0
  ],
  [
   "III",
   20,
   0,
   21,
   0,
   1
  ],
  [
   "IV",
   20,
   0,
   13,
   0,
   5
  ],
  [
   "V",
   20,
   0,
   20,
   2,
   2
  ],
  [
   "VI",
   18,
   0,
   11,
   2,
   7
  ],
  [
   "VII",
   20,
   0,
   1,
   1,
   4
  ],
  [
   "VIII",
   8,
   0,
   1,
   3,
   6
  ]
 ],
 "asesmen": [
  [
   "CPL-1",
   "Etika Profesi (VI)",
   "Studi kasus dilema etika keinsinyuran + rubrik penalaran etis"
  ],
  [
   "CPL-1",
   "Magang Industri (VII)",
   "Penilaian sikap, kedisiplinan, dan kepatuhan K3 oleh pembimbing industri + logbook"
  ],
  [
   "CPL-2",
   "Proses Manufaktur (III)",
   "Ujian komprehensif berbasis soal terapan lintas proses"
  ],
  [
   "CPL-2",
   "Praktek Proses Manufaktur II (IV)",
   "Penilaian benda kerja + lembar proses (process sheet)"
  ],
  [
   "CPL-3",
   "Statistika & Desain Eksperimen (IV)",
   "Laporan rancangan percobaan + pembelaan atas keputusan yang diambil"
  ],
  [
   "CPL-3",
   "Capstone Design / TA (VIII)",
   "Rubrik dimensi analisis & pemilihan alternatif pada sidang TA"
  ],
  [
   "CPL-4",
   "Perancangan Konstruksi Mesin (VI)",
   "Berkas rancangan lengkap (gambar kerja + perhitungan) + design review"
  ],
  [
   "CPL-4",
   "Capstone Design / TA (VIII)",
   "Rubrik dimensi mutu rancangan & manufacturability"
  ],
  [
   "CPL-5",
   "Metrologi & Pengendalian Mutu (IV)",
   "Tugas pengukuran ber-traceability + peta kendali (SPC) dari data nyata"
  ],
  [
   "CPL-5",
   "Capstone Design / TA (VIII)",
   "Rubrik dimensi pengujian & keabsahan data"
  ],
  [
   "CPL-6",
   "CAD/CAM (IV)",
   "Proyek rantai CAD → CAM → CNC sampai benda jadi"
  ],
  [
   "CPL-6",
   "Perawatan & Keandalan Mesin (IV)",
   "Rencana perawatan + analisis kegagalan mesin nyata di bengkel"
  ],
  [
   "CPL-6",
   "Automasi Industri II (VI)",
   "Proyek integrasi sistem otomasi (PLC–pneumatik–sensor)"
  ],
  [
   "CPL-7",
   "Praktek Teknik Pelapisan (V)",
   "Laporan pengelolaan limbah proses + penilaian risiko lingkungan"
  ],
  [
   "CPL-7",
   "Teknologi Konversi Energi & EBT (VI)",
   "Studi kasus efisiensi energi / rancangan pemanfaatan EBT"
  ],
  [
   "CPL-8",
   "Praktek Pengecoran Logam (V)",
   "Rubrik kerja tim regu pengecoran: pembagian peran, koordinasi peleburan dan penuangan, kepatuhan aba-aba dan K3"
  ],
  [
   "CPL-8",
   "Perancangan Konstruksi Mesin (VI)",
   "Design review: presentasi rancangan di hadapan panel + berkas gambar kerja yang terbaca pihak lain"
  ],
  [
   "CPL-8",
   "Magang Industri (VII)",
   "Laporan magang + presentasi + penilaian kerja tim oleh pembimbing industri"
  ],
  [
   "CPL-8",
   "Capstone Design / TA (VIII)",
   "Rubrik dimensi laporan & sidang"
  ],
  [
   "CPL-9",
   "PPIC & Manajemen Rantai Pasok (VI)",
   "Studi kasus perencanaan produksi: penjadwalan, kebutuhan bahan, pembelaan atas prioritas"
  ],
  [
   "CPL-9",
   "Magang Industri (VII)",
   "Penilaian prakarsa dan kontribusi di unit kerja (intrapreneurship)"
  ],
  [
   "CPL-9",
   "Capstone Design / TA (VIII)",
   "Rubrik dimensi kelayakan teknis–ekonomis"
  ],
  [
   "CPL-10",
   "Metodologi Penelitian Terapan (VI)",
   "Proposal penelitian terapan + kajian pustaka dengan sumber primer berbahasa Inggris"
  ],
  [
   "CPL-10",
   "Magang Industri (VII)",
   "Logbook mingguan + rubrik kemandirian belajar"
  ],
  [
   "CPL-10",
   "Capstone Design / TA (VIII)",
   "Rubrik dimensi penelusuran literatur & kemandirian"
  ]
 ]
};

/* --- Menu enam laman --- */
const MENU = [
 {
  "id": "MENU-1",
  "no": 1,
  "berkas": "index.html",
  "judul": "Beranda",
  "ket": "Profil prodi · Visi",
  "ikon": "kampus",
  "warna": [
   "#CE93D8",
   "#6A1B9A"
  ]
 },
 {
  "id": "MENU-2",
  "no": 2,
  "berkas": "2-ppm-cpl.html",
  "judul": "PPM & CPL",
  "ket": "4 PPM · 10 CPL",
  "ikon": "target",
  "warna": [
   "#4FC3F7",
   "#1565C0"
  ]
 },
 {
  "id": "MENU-3",
  "no": 3,
  "berkas": "3-pengetahuan.html",
  "judul": "Pengetahuan (P)",
  "ket": "26 P · Four Pillars SME",
  "ikon": "daftarP",
  "warna": [
   "#80DEEA",
   "#00838F"
  ]
 },
 {
  "id": "MENU-4",
  "no": 4,
  "berkas": "4-materi-pembelajaran.html",
  "judul": "Materi Pembelajaran",
  "ket": "185 MP di bawah 26 P",
  "ikon": "tumpukMP",
  "warna": [
   "#A5D6A7",
   "#2E7D32"
  ]
 },
 {
  "id": "MENU-5",
  "no": 5,
  "berkas": "5-struktur-mk.html",
  "judul": "Struktur MK",
  "ket": "52 MK · 146 sks · 8 semester",
  "ikon": "kalender",
  "warna": [
   "#FFCC80",
   "#E8590C"
  ]
 },
 {
  "id": "MENU-6",
  "no": 6,
  "berkas": "6-irma-asesmen.html",
  "judul": "I/R/M/A & Asesmen",
  "ket": "Peta kurikulum + 25 titik asesmen",
  "ikon": "timbang",
  "warna": [
   "#EF9A9A",
   "#B71C1C"
  ]
 }
];

window.DATA_OBE = {PILAR,P_LIST,TOT_MP,CPLxP,SMT_LIST,ALOKASI_SMT1,RPS,IRMA,MENU,TEKS_SUARA};
