//filter adalah memfilter suatu array dan menjadikannya array baru
//map berfungsi untuk membuat setiap array memiliki fungsi dan menjadikannya array baru
//reduce berfungsi menggabungkan isi array menjadi satu
//ketiga array bisa digabungkan menjadi method chaining

const angka = [-2, 3, 6, 7, -6, 34, 65, -3, 2, 10];
const NewAngka = []
for (let i = 0; i <= angka.length; i++) {
    if (angka[i] >= 3) {
        NewAngka.push(angka[i])
    }
}
console.log(NewAngka)

//a adalah sembarang untuk representasi setiap element di dalam anggkar
// const NewAngka2 = angka.filter(function(a){
//     return a >= 3
// })

const NewAngka2 = angka.filter((a) => {
    return a >= 3
})
console.log(NewAngka2)

//jika tidak ingin menggukanak return maka kurung kurawalnya bisa dihilangkan
const NewAngka3 = angka.map((a) => {
    return a * 2
})
console.log(NewAngka3)

// reduce memiliki dua argument
// accumulator adalah hasil akumulasi
// currentValue adalah value  setelah terakumulasi
// untuk nilai awal entah mengapa tidak bisa menggunakan return
const NewAngka4 = angka.reduce((accumulator, currentValue) =>
    accumulator + currentValue, 4
)
console.log(NewAngka4)


//Method Chaining adalah menggabungkan semuanya
const NewAngka5 = angka.filter((a) => { return a > 3 })
    .map((a) => { return a * 3 })
    .reduce((accumulator, currentValue) => { return accumulator + currentValue })
console.log(NewAngka5)


