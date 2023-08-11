// //make function declaration
// function makan(makanan) {
//     console.log(makanan)
// }
// makan('Nasi');


// //make function expresion, tidak akan kena hoisting
// let varminum = function (minuman) {
//     console.log(minuman)
// }
// varminum('Kopi');


// //make arrow 
// //bentuk lain yang lebih ringkas dari function expresion
// let varminum2 = (minuman) => {
//     console.log(minuman)
// }
// varminum2('Juice')



// //function map with arrow function
// let mahasiswa = ['Akbar', 'Ferdi Sambo', 'Julian']
// let jumlah_huruf = mahasiswa.map(nama => nama.length)
// console.log(jumlah_huruf)


// //function map with function expresion
// let mahasiswa2 = ['Akbar', 'Ferdi Sambo Oon', 'Julian']
// let jumlah_huruf2 = mahasiswa2.map(function (nama) {
//     return nama.length
// })
// console.log(jumlah_huruf2)


// //function map with arrow function use object
// let mahasiswa3 = ['Akbar', 'Ferdi Sambo Oon', 'Julian']
// let nama_jumlah_huruf = mahasiswa3.map(nama => ({ nama: nama, jmlhhrf: nama.length }))
// console.log(nama_jumlah_huruf)
// console.table(nama_jumlah_huruf)


// //constructor function
// let mahasiswa4 = function () {
//     this.nama = 'Muhamamd Al'
//     this.umur = '21'
//     this.sayHello = function () {
//         console.log(`Hallo nama Saya ${this.nama}, dan Saya berumur ${this.umur} tahun`)
//     }
// }
// //mengunakan constructor harus inisialisasi menggunakan new
// let varmahasiswa = new mahasiswa4
// varmahasiswa.sayHello()



// //konsep this pada arrow function
// //arrow function tidak menyimpan nilai this atau memilki konsep this.
// this di dalam declaration function mengacu pada variabel global karena terkena hoisting sedangkan function expresion tidak
// sedangkan di arrow function tidak meiliki konsep this. sehingga this akan pindah ke lexial scope
// Jadi gunakan this pada declaration function lalu di dalamnya gunakan arrow function agar fungsi dan variabel this bersifat lexical scope

const box = document.querySelector('.box')

box.addEventListener('click', function () {
    let satu = 'size'
    let dua = 'caption'
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }
    //classList untuk mengelola daftar list cssnya
    //toggle berfungsi untuk menambahkan jika tidak ada, dan menghilangkan jika ada
    this.classList.toggle('size');
    setTimeout(() => {
        console.log(this)
        this.classList.toggle('caption');
    }, 600);
    console.log(this)
})