// function init(){
//     let nama = 'Muhhamad'
//     let umur = 33
//     function tampilNama(){
//         console.log(nama);
//         console.log(umur)
//     }
//     console.dir(tampilNama);
// }
// init();


// //Salah Satu Penggunaan Closure
// function init2(){
//     function tampilNama(nama){
//         console.log(nama)
//     }
//     return tampilNama;
// }
// let panggilNama2 = init2()
// panggilNama2('Akbaaereasd')


// // menggunakan anonymous function
// function init3(){
//     return function(nama){
//         console.log(nama)
//     }
// }
// let panggilNama3 = init3();
// panggilNama3('Akbaaereasddfd')



// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama} Selamat ${waktu}, semoga harimu menyenangkan`)
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi')
// let selamatSiang = ucapkanSalam('Siang')
// let selamatMalam = ucapkanSalam('Selamat Malam')


// selamatPagi('Sandhika')
// selamatSiang('Mieke')

// console.dir(selamatMalam)


// let add = function(){
//     let counter = 0
//     return function(){
//         return counter = counter+1;
//     }
// }
// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());


// //Menggunakan imediately invoke function
// let add2 = (function(){
//     let counter = 0
//     return function(){
//         return counter = counter+1;
//     }
// })();
// console.log(add2());
// console.log(add2());
// console.log(add2());




//Arrow Function
// let tampilPesan = (nama) => {
//     alert ('Halo ' + nama)
// }
// tampilPesan('Sandika')


// const tampilNama2 = (nama, waktu) => {
//     return `Selamat ${waktu} Halo, ${nama}`
// }
// console.log(tampilNama2('Akbareu', 'Malam'))

// const tampilNama3 = nama => `Halo ${nama}`

// const tampilNama4 = () => `Hello World`

// let mahasiswa = ['Muhhammad', 'Doddy', 'Erriik']

// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) =>{
//     return nama.length;
// })
// console.log(jumlahHuruf)


// let jumlahHuruf2 = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf2)




//Konsep this pada Arrow Function
// const Mahasiswa

const mhs1 = {
    nama: 'Muhammad Aulia',
    umur: 21,
    sayHello: function() {
        console.log(this)
    }
} 

const Mahasiswa = function (){
    this.nama = 'Muhammad Aulia Akbar',
    this.umur = '21';
    this.sayHello = function(){

    }

    setInterval(function(){
        console.log(this.umur++);
    }, 500)
}

const Akbar = new Mahasiswa()