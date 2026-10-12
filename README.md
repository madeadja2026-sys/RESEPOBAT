# RESEP OBAT HARIAN — Puskesmas Ngalupolo

PWA responsif untuk pencatatan resep harian dan rekap sederhana. Repository ini menerbitkan antarmuka statis melalui GitHub Pages.

## Fitur versi awal
- Tambah, edit, hapus data resep di browser perangkat.
- Pencarian, filter tanggal, ringkasan KPI, ekspor CSV, cetak/PDF.
- Manifest dan service worker untuk pemasangan PWA serta cache halaman.
- Backend Google Apps Script awal tersedia di `apps-script/Code.gs`; backend belum terhubung dari antarmuka.

## Publikasi GitHub Pages
Workflow `.github/workflows/pages.yml` menjalankan deploy otomatis saat ada push ke `main`. Di GitHub, buka **Settings → Pages** dan pastikan sumber publikasi memakai **GitHub Actions**. Tunggu workflow selesai di tab **Actions**.

URL yang diharapkan: https://madeadja2026-sys.github.io/RESEPOBAT/

## Instalasi Android
1. Buka URL Pages yang aktif di Chrome.
2. Pilih menu Chrome (⋮) → **Instal aplikasi** atau **Tambahkan ke layar utama**.
3. Buka ikon aplikasi. Uji fungsi offline setelah halaman berhasil dimuat sekali.

## Menyiapkan Google Sheets / Apps Script
1. Buat Google Spreadsheet khusus milik fasilitas kesehatan.
2. Buka Extensions → Apps Script dan salin isi `apps-script/Code.gs` ke proyek Apps Script.
3. Di Project Settings → Script Properties, tambahkan `SPREADSHEET_ID` dengan ID spreadsheet.
4. Jalankan `setupSheet()` dari editor Apps Script dan berikan otorisasi yang diperlukan.
5. **Jangan deploy endpoint tulis sebagai API publik.** Kode backend saat ini belum memiliki autentikasi dan belum terhubung ke frontend. Tambahkan kontrol akses dan uji keamanan terlebih dahulu sebelum integrasi atau penggunaan data nyata.

## Catatan penting
Versi saat ini menyimpan data di `localStorage` browser masing-masing perangkat; data tidak tersinkron otomatis dan bisa hilang jika data browser dihapus. Jangan masukkan identitas pasien atau data kesehatan yang dapat mengidentifikasi seseorang sebelum pengamanan, otorisasi, backup, dan kebijakan privasi diselesaikan. Gunakan data dummy saat pengujian.
