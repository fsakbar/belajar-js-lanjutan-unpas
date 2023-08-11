// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'))

//pilih hanya yang 'Javascript'
let jsLanjut = videos.filter((video) =>  video.textContent.includes('Javascript Lanjutan'))

// ambil durasi masing masing video
    .map(item => item.dataset.duration)

// Ubah durasi menjadi int, ubah menit mendjadi detik
    .map(waktu => {
        //10:30 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return parts[0] * 60 + parts[1];
    })

// jumlahkan semua detik
    .reduce((total, detik) => total + detik)

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600)
jsLanjut = jsLanjut - jam * 3600
const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60

// simpan di DOM

//Jumlah Durasi
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} Menit, ${detik} Detik.`

//Jumlah Video
const jVideos =  videos.filter((video) =>  video.textContent.includes('Javascript Lanjutan')).length;
const pJVideos = document.querySelector('.jumlah-video')
pJVideos.textContent = `Ada ${jVideos} Video Javascript Lanjutan`


console.log(jam)
console.log(menit)
console.log(jVideos)