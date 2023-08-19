//callback
//Synchronous Callback -> akan jarang digunakan
// function halo(nama){
//     alert(`Halo, ${nama}`)
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukan Nama: ')
//     callback(nama)
// }

// tampilkanPesan(halo)
// Bisa juga menggunakan arrow function dan function tanpa nama
// tampilkanPesan(nama => alert(`Halo, ${nama}`))

// const mhs = [
//     {
//         "nama": "Muhammad Aulia Akbar",
//         "nrp": "2010817210023",
//         "email": "royaleaulia@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Fiony Alveria Tantri",
//         "nrp": "20108189443",
//         "email": "fiony@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Cornelia Vanisa",
//         "nrp": "201343232323",
//         "email": "oniel@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },  
// ];


// mhs.forEach(m => console.log(m.nama))


//Asynchronous Callback
//Ajax
// function getDataMahasiswa(url, succes, error){
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function(){
//         if (xhr.readyState = 4){
//             if(xhr.status === 200){
//                 succes(xhr.response);
//             }else if(xhr.status === 404){
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }

// getDataMahasiswa('data/mahasiswa.json', 
// results => {
//     const mhs = JSON.parse(results)
//     mhs.forEach(m => console.log(m.nama))
// }, 
// () => {

// });


//JQuery
console.log('Mulai')
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    },
    error: (e) => {
        console.log(e.responseText);// Callback Response Text sudah ada dalam function error
    }
})

// Dalam Vanila JS sudah ada function baru menggantikan ajax yaitu fetch

