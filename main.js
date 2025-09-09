// script.js

// 1. Dapatkan referensi ke elemen-elemen HTML yang akan kita manipulasi
const profilGambar = document.getElementById('profil-gambar');
const ubahGambarBtn = document.getElementById('ubah-gambar-btn');

const namaSpan = document.getElementById('nama');
const usiaSpan = document.getElementById('usia');
const pekerjaanSpan = document.getElementById('pekerjaan');
const emailSpan = document.getElementById('email');
const editInfoBtn = document.getElementById('edit-info-btn');

let isDefaultImage = true; // Variabel untuk melacak gambar saat ini

// 2. Tambahkan event listener untuk tombol "Ubah Gambar"
ubahGambarBtn.addEventListener('click', function() {
    if (isDefaultImage) {
        profilGambar.src = 'https://picsum.photos/id/237/150/150'; // Ganti dengan gambar lain
        profilGambar.alt = 'Gambar Profil Baru';
        ubahGambarBtn.textContent = 'Kembalikan Gambar Asli';
    } else {
        profilGambar.src = 'https://via.placeholder.com/150'; // Kembalikan gambar placeholder
        profilGambar.alt = 'Foto Profil';
        ubahGambarBtn.textContent = 'Ubah Gambar';
    }
    isDefaultImage = !isDefaultImage; // Balik nilai variabel
});

// 3. Tambahkan event listener untuk tombol "Edit Info"
editInfoBtn.addEventListener('click', function() {
    // Meminta input baru dari pengguna
    let newNama = prompt('Masukkan Nama Baru:', namaSpan.textContent);
    if (newNama !== null && newNama.trim() !== '') {
        namaSpan.textContent = newNama;
    }

    let newUsia = prompt('Masukkan Usia Baru:', usiaSpan.textContent);
    // Contoh validasi sederhana untuk usia
    if (newUsia !== null && newUsia.trim() !== '' && !isNaN(parseInt(newUsia))) {
        usiaSpan.textContent = parseInt(newUsia) + ' tahun';
    }

    let newPekerjaan = prompt('Masukkan Pekerjaan Baru:', pekerjaanSpan.textContent);
    if (newPekerjaan !== null && newPekerjaan.trim() !== '') {
        pekerjaanSpan.textContent = newPekerjaan;
    }

    let newEmail = prompt('Masukkan Email Baru:', emailSpan.textContent);
    // Contoh validasi sederhana untuk email
    if (newEmail !== null && newEmail.trim() !== '' && newEmail.includes('@')) {
        emailSpan.textContent = newEmail;
    }
});

// Optional: Anda bisa menambahkan lebih banyak interaksi di sini,
// misalnya mengubah warna latar belakang secara acak, menambahkan mode gelap, dll.