/* =========================================================
   ASSESSMENT PLAN TAHAP 1 — format Lampiran 8 Panduan PNP 2025
   + dua rubrik penuh (Magang Industri & Capstone Design / TA)
   Sumber: dokumen Project "Assessment Plan dan Rubrik — Tahap 1" v2
   ========================================================= */

/* skala resmi PNP — dari contoh Rubrik Analitik Penilaian Tugas Kelompok */
const SKALA = [
 [4,"80 – 100","Sangat baik — melampaui yang diharapkan","Bekerja mandiri, dan menambahkan sesuatu yang tidak diminta tetapi bernilai"],
 [3,"65 – 79","Memadai — TARGET MINIMAL","Memenuhi seluruh yang diharapkan dari lulusan D4 pada tingkat ini. Inilah ambang ketercapaian CPL"],
 [2,"55 – 64","Berkembang — belum memadai","Sebagian terpenuhi; masih perlu arahan atau perbaikan berarti"],
 [1,"0 – 54","Belum memadai","Tidak memenuhi yang diharapkan"]
];

const AMBANG = [
 ["Target minimal per mahasiswa","<b>skor 3, yaitu nilai 65</b>","Mahasiswa dinyatakan mencapai CPL pada satu titik asesmen bila memperoleh skor 3 atau 4 (nilai ≥ 65)."],
 ["Ambang ketercapaian tingkat prodi","<b>70% mahasiswa</b>","Sebuah CPL tercapai bila ≥70% mahasiswa berskor ≥3 pada titik asesmen itu. Cerminan Lampiran 8: tindak lanjut wajib bila ≥30% tidak mencapai. <b>Jangan tertukar dengan angka 65 — 65 adalah nilai seorang mahasiswa, 70% adalah bagian dari seluruh angkatan.</b>"],
 ["Ambang kelulusan mata kuliah","mengikuti ketentuan akademik PNP","Perkara terpisah. Mahasiswa bisa lulus MK dengan skor 2 (nilai 55–64) pada satu dimensi CPL, dan itu tetap tercatat sebagai <b>tidak mencapai CPL</b>."]
];

/* 25 titik asesmen — matriks Lampiran 8 */
const AP25 = [
 ["CPL-1","Etika Profesi","VI","Naskah analisis kasus + lembar jawaban ujian","Rubrik analitik penalaran etis (1–4)","Dosen pengampu"],
 ["CPL-1","Magang Industri","VII","Lembar penilaian pembimbing industri + logbook","Rubrik Magang dimensi M1","Koordinator Magang & pembimbing industri"],
 ["CPL-2","Proses Manufaktur","III","Lembar jawaban ujian komprehensif","Kunci + peta soal→CPL, rubrik holistik","Dosen pengampu"],
 ["CPL-2","Praktek Proses Manufaktur II","IV","Benda kerja + lembar proses (process sheet)","Lembar penilaian benda kerja (dimensi, toleransi, kekasaran) + rubrik analitik","Instruktur/PLP & dosen pengampu"],
 ["CPL-3","Statistika & Desain Eksperimen","IV","Laporan rancangan percobaan + lembar pembelaan keputusan","Rubrik analitik (1–4)","Dosen pengampu"],
 ["CPL-3","Capstone Design / TA","VIII","Naskah TA + berita acara sidang","Rubrik TA dimensi D1","Koordinator TA & panel penguji"],
 ["CPL-4","Perancangan Konstruksi Mesin","VI","Berkas rancangan: gambar kerja + perhitungan","Rubrik design review (1–4)","Dosen pengampu & panel reviu"],
 ["CPL-4","Capstone Design / TA","VIII","Berkas rancangan TA + prototipe","Rubrik TA dimensi D2","Koordinator TA & panel penguji"],
 ["CPL-5","Metrologi & Pengendalian Mutu","IV","Laporan pengukuran + peta kendali (SPC)","Rubrik analitik (1–4)","Dosen pengampu & PLP lab metrologi"],
 ["CPL-5","Capstone Design / TA","VIII","Bab pengujian + data mentah","Rubrik TA dimensi D3","Koordinator TA & panel penguji"],
 ["CPL-6","CAD/CAM","IV","Model CAD, program NC, benda hasil CNC","Rubrik analitik rantai digital (1–4)","Dosen pengampu & PLP lab CNC"],
 ["CPL-6","Perawatan & Keandalan Mesin","IV","Rencana perawatan + laporan analisis kegagalan","Rubrik analitik (1–4)","Dosen pengampu"],
 ["CPL-6","Automasi Industri II","VI","Sistem otomasi terpasang + program PLC + laporan","Rubrik analitik unjuk kerja sistem (1–4)","Dosen pengampu & PLP lab otomasi"],
 ["CPL-7","Praktek Teknik Pelapisan","V","Laporan pengelolaan limbah + lembar penilaian risiko","Rubrik analitik (1–4)","Instruktur bengkel & dosen pengampu"],
 ["CPL-7","Teknologi Konversi Energi & EBT","VI","Laporan studi kasus efisiensi energi / rancangan EBT","Rubrik analitik (1–4)","Dosen pengampu"],
 ["CPL-8","Praktek Pengecoran Logam","V","Lembar observasi regu + laporan kelompok","Rubrik kerja tim — observasi terstruktur (1–4)","Instruktur bengkel"],
 ["CPL-8","Perancangan Konstruksi Mesin","VI","Presentasi design review + gambar kerja","Rubrik komunikasi teknis (1–4)","Panel reviu"],
 ["CPL-8","Magang Industri","VII","Laporan magang + presentasi + penilaian pembimbing industri","Rubrik Magang dimensi M2","Koordinator Magang"],
 ["CPL-8","Capstone Design / TA","VIII","Naskah TA + presentasi sidang","Rubrik TA dimensi D4","Panel penguji"],
 ["CPL-9","PPIC & Manajemen Rantai Pasok","VI","Laporan studi kasus perencanaan produksi","Rubrik analitik (1–4)","Dosen pengampu"],
 ["CPL-9","Magang Industri","VII","Bab usulan perbaikan pada laporan + penilaian penyelia","Rubrik Magang dimensi M3","Koordinator Magang & pembimbing industri"],
 ["CPL-9","Capstone Design / TA","VIII","Bab kelayakan teknis–ekonomis","Rubrik TA dimensi D5","Panel penguji"],
 ["CPL-10","Metodologi Penelitian Terapan","VI","Proposal + daftar pustaka beranotasi","Rubrik analitik penelusuran literatur (1–4)","Dosen pengampu"],
 ["CPL-10","Magang Industri","VII","Logbook mingguan","Rubrik Magang dimensi M4","Dosen pembimbing magang"],
 ["CPL-10","Capstone Design / TA","VIII","Kajian pustaka + catatan bimbingan","Rubrik TA dimensi D6","Pembimbing TA"]
];

/* rubrik Magang Industri — 20 sks · semester VII · 4 CPL */
const BUKTI_MAGANG = [
 ["Penilaian pembimbing industri","40%","Diisi penyelia di tempat magang, memakai formulir berbahasa industri","M1 · M2 · M3"],
 ["Logbook mingguan","25%","Diisi mahasiswa tiap minggu, diperiksa dan diparaf dosen pembimbing","M1 · M4"],
 ["Laporan akhir + presentasi","35%","Dinilai dosen pembimbing dan satu dosen penilai","M2 · M3 · M4"]
];
const RUBRIK_M = [
 ["M1","CPL-1 · Sikap, etika, tanggung jawab, dan K3","—",
  "Selain butir 3: <b>mengingatkan rekan</b> atas pelanggaran keselamatan dan <b>melaporkan kondisi tidak aman</b> kepada penyelia.",
  "Hadir tepat waktu. Memakai APD dan mengikuti prosedur keselamatan <b>tanpa perlu diingatkan</b>. Menjaga kerahasiaan data perusahaan.",
  "Hadir dan patuh <b>bila diawasi</b>. Sesekali masih perlu diingatkan soal APD atau prosedur.",
  "Sering terlambat atau tidak hadir tanpa keterangan. Perlu diingatkan berulang soal APD dan prosedur keselamatan."],
 ["M2","CPL-8 · Kerja tim dan komunikasi","—",
  "Selain butir 3: <b>menjembatani koordinasi lintas bagian</b>, dan pada presentasi mampu menjawab pertanyaan di luar naskah.",
  "<b>Berperan aktif</b> dalam tim unit kerja dan menyampaikan gagasan secara lisan maupun tulisan. Laporan dan presentasi <b>dapat dipahami kalangan teknis maupun non-teknis</b>.",
  "Ikut serta bila diminta. Laporan runtut tetapi gambar dan tabelnya tidak menjelaskan apa pun.",
  "Bekerja sendiri, jarang berkomunikasi dengan rekan sekerja. Laporan sulit dipahami."],
 ["M3","CPL-9 · Prakarsa dan tanggung jawab hasil kerja unit (intrapreneurship)","—",
  "Selain butir 3: usulannya <b>dicoba atau diterapkan</b> unit kerja, dengan hasil yang terukur.",
  "<b>Mengenali satu persoalan nyata</b> di unit kerjanya dan <b>mengusulkan perbaikan</b>, disertai perkiraan manfaat atau biayanya.",
  "Mengerjakan tugas yang diberikan sampai tuntas. Memahami alur kerja unit tempatnya bekerja.",
  "Menunggu perintah. Tidak mengenali alur kerja unitnya."],
 ["M4","CPL-10 · Kemandirian belajar","—",
  "Selain butir 3: <b>menetapkan sendiri sasaran belajar berikutnya</b> dan menunjukkan bukti pencapaiannya.",
  "Logbook memuat <b>hal baru yang dipelajari</b>, <b>dari mana</b> dipelajari (manual mesin, standar, penyelia, literatur), dan <b>bagaimana dipakai</b> dalam pekerjaan.",
  "Logbook terisi, tetapi berisi catatan kegiatan harian belaka.",
  "Logbook tidak diisi rutin. Tidak ada catatan tentang hal baru yang dipelajari."]
];

/* rubrik Capstone Design / TA — 8 sks · semester VIII · 6 CPL */
const RUBRIK_D = [
 ["D1","CPL-3 · Analisis masalah & pemilihan alternatif","15%",
  "Selain butir 3: kriteria <b>diberi bobot</b>, dan ditunjukkan <b>analisis kepekaan</b> — keputusan berubah atau tidak bila asumsi berubah.",
  "Masalah dirumuskan <b>dengan data terukur</b>. <b>Sekurang-kurangnya dua alternatif</b> dibandingkan memakai kriteria yang dinyatakan (biaya, kemampuan bengkel, keselamatan). Keputusan dibela dengan alasan.",
  "Masalah dirumuskan jelas. Alternatif disebut, tetapi pemilihannya tanpa kriteria.",
  "Masalah dinyatakan kabur. Hanya satu solusi dipertimbangkan, tanpa alasan."],
 ["D2","CPL-4 · Mutu rancangan & manufacturability","25%",
  "Selain butir 3: menunjukkan pertimbangan <b>design for manufacturing</b> yang eksplisit — penyederhanaan bentuk, pengurangan operasi, atau standardisasi komponen — beserta alasan penghematannya.",
  "Gambar kerja lengkap <b>dengan toleransi, bahan, dan proses</b>. Perhitungan kekuatan atau kinerja ada dan benar. <b>Rancangan dapat dibuat dengan mesin yang ada di bengkel PNP.</b>",
  "Gambar kerja lengkap, tetapi toleransi dan bahan tidak ditetapkan. Perhitungan sebagian.",
  "Gambar tidak lengkap atau tidak terbaca. Tidak ada perhitungan."],
 ["D3","CPL-5 · Pengujian & keabsahan data","20%",
  "Selain butir 3: <b>ketidakpastian pengukuran atau sebaran data diperhitungkan</b>, dan keterbatasan hasil dinyatakan dengan jujur.",
  "Prosedur pengujian dinyatakan. Alat ukur disebut <b>beserta ketelitiannya</b>. Pengukuran <b>diulang</b>. Data disajikan lengkap dengan satuan dan dianalisis. Kesimpulan sesuai data.",
  "Pengujian dilakukan tanpa prosedur baku. Data tunggal, tanpa pengulangan.",
  "Tidak ada pengujian, atau hanya pengamatan tanpa alat ukur."],
 ["D4","CPL-8 · Laporan & sidang","15%",
  "Selain butir 3: mampu <b>menjelaskan pekerjaannya kepada pendengar non-teknis</b>; menerima kritik dan menunjukkan perbaikan.",
  "Laporan runtut dengan <b>gambar dan tabel yang menjelaskan dirinya sendiri</b>. Presentasi jelas dan menjawab pertanyaan penguji dengan tepat. Pembagian kerja tim dinyatakan.",
  "Laporan lengkap secara format, tetapi alurnya melompat. Presentasi membaca naskah.",
  "Laporan tidak mengikuti kaidah. Presentasi terbata dan tidak dapat menjawab pertanyaan."],
 ["D5","CPL-9 · Kelayakan teknis–ekonomis","15%",
  "Selain butir 3: memuat <b>analisis risiko pelaksanaan</b> dan rencana penjadwalan yang terbukti diikuti.",
  "Rincian <b>biaya bahan, proses, dan waktu kerja</b> disusun. <b>Kelayakan dinilai</b> dengan pembanding — harga pasar, biaya proses lama, atau titik impas sederhana.",
  "Biaya bahan disebut. Tidak ada perbandingan maupun analisis kelayakan.",
  "Tidak ada perhitungan biaya."],
 ["D6","CPL-10 · Penelusuran literatur & kemandirian","10%",
  "Selain butir 3: menunjukkan <b>penelusuran mandiri di luar arahan pembimbing</b>, dan mampu menjelaskan mengapa sebuah sumber dipilih atau ditolak.",
  "Memuat <b>sekurang-kurangnya tiga sumber primer</b> — jurnal, standar, atau manual pabrikan — sebagian berbahasa Inggris, dan sumber itu <b>benar-benar dipakai</b> dalam pengambilan keputusan.",
  "Rujukan memadai, tetapi seluruhnya berbahasa Indonesia dan bersifat sekunder.",
  "Rujukan hanya blog atau sumber yang tidak jelas asalnya."]
];

/* closing the loop */
const LOOP = [
 ["Pengumpulan","Setiap penanggung jawab menyerahkan rekap skor 1–4 per mahasiswa per dimensi paling lambat 2 minggu setelah masa penilaian berakhir"],
 ["Rekapitulasi","Satu PJ tingkat prodi menggabungkan seluruh titik menjadi satu tabel ketercapaian 10 CPL per angkatan"],
 ["Analisis","Untuk tiap CPL dihitung % mahasiswa berskor ≥3. CPL dengan lebih dari satu titik asesmen dilaporkan <b>per titik — jangan dirata-ratakan</b>"],
 ["Ambang tindakan","Bila <b>≥30% mahasiswa tidak mencapai skor 3</b>, tindak lanjut <b>wajib</b> (Lampiran 8). Bukan pilihan"],
 ["Tindak lanjut","Metodologi telusur-balik BAB 6 panduan: CPL lemah → Pengetahuan (P) penunjangnya → mata kuliah penunjang P tersebut"],
 ["Pelaporan","Hasil & tindak lanjut dicatat pada kolom Tindak Lanjut Assessment Plan, menjadi bahan Evaluasi Kurikulum"]
];

const SISA = [
 ["Rubrik 15 titik asesmen selebihnya","15 rubrik","Menyusul RPS masing-masing MK. Pola sudah baku: analitik, 1–4, target minimal skor 3 (nilai 65)"],
 ["Formulir pembimbing industri versi bahasa kerja","1 halaman","<b>Paling mendesak</b> — terikat jadwal keberangkatan magang dan melibatkan pihak luar"],
 ["Rubrik PKM","1 rubrik","Empat butir sederhana. Menunggu keputusan rekognisi PKM"],
 ["Templat rekap ketercapaian CPL","1 berkas","Satu tabel: 10 CPL × angkatan × % mahasiswa berskor ≥3"],
 ["IK-CPL — indikator kinerja CPL","± 30 butir","2–4 indikator perilaku terukur per CPL. <b>Harus mendahului 15 rubrik yang belum ditulis dan seluruh RPS</b>"]
];

window.DATA_ASESMEN = {SKALA, AMBANG, AP25, BUKTI_MAGANG, RUBRIK_M, RUBRIK_D, LOOP, SISA};
