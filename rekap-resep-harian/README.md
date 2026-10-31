# Rekap Resep Obat Harian – Puskesmas Ngalupolo

## Isi paket
- `index.html`: aplikasi utama.
- `manifest.webmanifest`: konfigurasi instalasi PWA.
- `sw.js`: service worker untuk cache/offline.

## Cara uji di komputer
Buka `index.html` di browser untuk uji dasar. Penyimpanan lokal bekerja pada browser yang mendukung localStorage. Untuk menguji instalasi PWA dan service worker, unggah folder ini ke hosting HTTPS (misalnya GitHub Pages).

## Cara publikasi GitHub Pages
1. Buat repository GitHub baru, misalnya `rekap-resep-obat`.
2. Unggah ketiga file pada root repository (bukan di dalam subfolder lain).
3. Buka Settings → Pages.
4. Pada Build and deployment pilih Deploy from a branch.
5. Pilih branch `main`, folder `/ (root)`, lalu Save.
6. Tunggu proses publikasi dan buka alamat Pages yang diberikan GitHub.
7. Di Android, buka alamat tersebut melalui Chrome → menu ⋮ → Tambahkan ke Layar utama / Install app.

## Penyimpanan dan privasi
- Data resep disimpan lokal pada browser/perangkat yang digunakan, bukan pada server.
- Jangan hapus data situs/browser sebelum melakukan ekspor cadangan JSON.
- Cadangan JSON memuat data pasien; simpan dengan aman dan batasi akses.
- Jangan gunakan perangkat bersama tanpa pengamanan layar.
- Untuk penggunaan operasional resmi, lakukan uji coba, validasi alur kerja, dan persetujuan penanggung jawab fasilitas terlebih dahulu.

## Fitur versi awal
Dashboard, input resep, parameter klinis, IMT otomatis, hingga 15 item obat, kajian resep checklist, riwayat edit/hapus, laporan harian/bulanan/tahunan, ekspor CSV, master obat, backup dan restore JSON, cetak/Simpan PDF melalui dialog cetak browser.

## Batasan yang perlu diketahui
- Kajian resep berupa checklist dokumentasi; aplikasi tidak menetapkan keputusan klinis otomatis.
- Nilai klinis tidak diberi label normal/abnormal otomatis. Interpretasi mengikuti pedoman dan penilaian tenaga kesehatan.
- Belum ada sinkronisasi antarperangkat atau akun pengguna.
- Penyimpanan browser dapat terhapus bila data situs dihapus. Backup berkala wajib dilakukan.