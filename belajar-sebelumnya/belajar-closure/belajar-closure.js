// Fungsinya untuk membuat function factories dan private method/variable


//function factories
// function init(nama) {
//     return function (hari) {
//         return function (bulan) {
//             return console.log(`Perkenalkan nama saya ${nama}, hari ini hari ${hari}, bulan ${bulan}`)
//         }
//     }
// }
// let perkenalanakb = init('Muhammad Aulia Akb')
// let bulan = perkenalanakb('Rabu')
// bulan('Februari')

//private variable
let count = function () {
    let var_a = 0;
    return function () {
        return var_a += 1
    }

}
let a = count()

for (let b = 0; b < 10; b++)
    console.log(a())


console.log(a())
console.log(a())
let var_a = 100
console.log(a())
console.log(a())

