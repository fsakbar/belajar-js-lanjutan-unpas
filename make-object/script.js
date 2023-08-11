// Cara untuk membuat Object pada javascript
// 1. Object Literal 
// Progblem Tidak Efektif dengan objek yang banyak. (Tidak Bisa Memiliki Nama Variabel yang sama)
let mahasiswa = {
    nama: 'Muhammad Aulia Akbar',
    umur: 21,
    prodi: 'Teknologi Informasi',
    energi: 10,
    makan: function(porsi){
        this.energi = this.energi+porsi;
        console.log (`Selamat Datang ${this.nama}, selamat makan! `);
    }
}


//2. Function Declaration (Membuat Templatenya 1 Tinggal bikin instansinya yang lain)
// Problem Melakukan Duplikasi Walaupun properti atau method yang akan dipanggil tidak terpakai
function Mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi){
        this.energi = this.energi+porsi;
        console.log(`Selamat Datang ${this.nama}, selamat makan! `);
    }
    mahasiswa.main = function(jam){
        this.energi = this.energi-jam;
        console.log(`Selamat Datang ${this.nama}, Selamat Main!`);
    }


    return mahasiswa;
}
let akbar = Mahasiswa('Akbar', 10);
let jujo = Mahasiswa('Jujo', 10)




// Constructor Function (Paling Sering Digunakan)
function CMahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi = this.energi+porsi;
        console.log(`Selamat Datang ${this.nama}, selamat makan! `);
    }
    this.main = function(jam){
        this.energi = this.energi-jam;
        console.log(`Selamat Datang ${this.nama}, Selamat Main!`);
    }
}

let aulia = new CMahasiswa('Aulia', 12);


//object.create() dalam kasus ini adalah gabungan antara objek literal dan function declaration guna menghemat memori dengan baik
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     },
//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat main!`)
//     },
//     tidur: function(jam){
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat main!`)
//     }
// };


// function C2Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa)
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let maboy = C2Mahasiswa('Maboy', 20)



// Prototype
function C3Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;
}

C3Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan!`
}
C3Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat Bermain!`
}
C3Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam*2;
    return `Halo ${this.nama}, Selamat Tidur`
}

let wibu = new C3Mahasiswa('Wibu', 25)



// Bentuk Dalam Versi Class
class C4Mahasiswa{
    constructor (nama, energi){
        this.nama = nama;
        this.energi = energi;

    }
    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat Makan!`
    }
    main(jam){
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat Bermain!`
    }
    tidur(jam){
        this.energi += jam*2;
        return `Halo ${this.nama}, Selamat Tidur`
    }
}

let sandhika = new C4Mahasiswa('Sandhika', 30)

let ara = []
let obj = {}