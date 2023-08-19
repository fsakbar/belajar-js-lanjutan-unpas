// Spread Operator
// Memecah iterable mendjadi single element 
// Memecah Array menjadi single element string.
// mengeluarkan dari array atau kurung
// const mhs = ['Sandika', 'Sody', 'Efik']
// console.log(...mhs[0])

// Menggabungkan 2 Array
// const dosen = ['Ade', 'Fiony', 'Wanda'];
// const orang = [...mhs, ...dosen] //spread operator
// const orang = mhs.concat(dosen)
// console.log(orang)


// Meng-copy array
// const mhs2 = ['Sandika', 'Sody', 'Efik']
// const mhs21 = mhs2;
// const mhs21 = [...mhs] // copy array
// mhs21[0] = 'Akbar';
// console.log(mhs21)


// DOM Belajar Mengambil li Pada Index
// const liMhs = document.querySelectorAll('li')
// Menggunakan DOM
// const mhs3 = [];
// for (i = 0; i < liMhs.length; i++){
//     mhs3.push(liMhs[i].textContent);
// }
// console.log(mhs3);

//Menggunakan Spread Operator
// const mhs3 = [...liMhs].map(nilai => nilai.textContent) // mengubah nodelist menjadi array mengguanakan spread operator 
// console.log(mhs3)

// Menggunakan Spread Operator Untuk
// const nama = document.querySelector('.nama')
// const huruf = [...nama.textContent].map(h => `<span>  ${h}  </span>`).join('') // Mengubah Nodelist ke Array menggunakan spread operator
// nama.innerHTML = huruf


// Rest Parameter
function myFunc(a, b, ...arg){ // Merupakan Rest Parameter Yang Menjadi Array, ...arg hanya bisa diletakan di akhir
    return Array.from(arguments)
}
console.log(myFunc(1, 2, 3, 4, 5))

// Latihan Membuat Penjumalah Menggunakan For of
// function jumlahkan(...angka){
//     let total = 0;
//     for(const element of angka){
//         total+=element;
//     }
//     return total;
// }
// console.log(jumlahkan(1, 2, 3, 4, 5))

// Latihan Membuat Penjumlahan Menggunakan Reduce
function jumlahkan(...angka){
    return angka.reduce((total, detik) => total + detik);
}
console.log(jumlahkan(1, 2, 3, 4, 5))

// array destructuring
const kelompok1 = ['Linde', 'Arthur', 'John', 'Micah', 'Strauss', 'Jenepote']
const [ketua, wakil, ...anggota] = kelompok1
console.log(anggota)


// object destructuring
const team = {
    pm: 'Sandika',
    frontEnd1: 'Doddy',
    frontEnd2: 'Erik',
    backEnd: 'Fajar',
    ux: 'Hendra',
    devOps: 'Ferry'
}
const {pm, ...myTeam} = team
console.log(pm)

// Filtering
function filterBy(type, ...value){
    return value.filter(v => typeof v === type)
}
console.log(filterBy('boolean', 1,2, 'Sandika', false, 10, true, 'doddy'));
