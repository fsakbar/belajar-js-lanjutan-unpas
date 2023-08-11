// High order function adalah function yang beroperasi pada function yang lain
// js memperlakukan function sebagai object  
// kita dapat menggunakan function sebagai argument


// function kerjakantugas = higher order function
// selesai = callback atau memanggil ulang



function kerjakantugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`)
    selesai()
}

let selesai = function () {
    console.log('Selesai mengerjakan tugas..')
}

kerjakantugas('Matematika', selesai)

// setTimeout termasuk higher order function karena di dalam fungsi memiliki fungsi
// setTimeout(function () {
//     console.log('Hello World')
// }, 300)






//contoh higher order functino lainnya karena return adalah function
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
    }
}
let selamatMalam = ucapkanSalam('Sore')
selamatMalam('Akbaaaaaaar')

//Fungsi higher order function
//Abstraction
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}
repeat(10, console.log)

//Ada dua cara untuk merancang sebuah software yaitu pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas jelas tidak ada kekurangannya dan cara lainnya adalah untuk membuat programmnya sekompleks mungkin sehingga tidak ada kekurangan yang jelas
//melakukan paradigma functional programming agar lebih aman dan sederhana
//contoh hihger order function
//array.prototype.map()
//array.prototype.filter()
//array.prototype.reduce