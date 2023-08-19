//Ajax JQuery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: (movies => console.log(movies))
// });

//Ajax Vanila JS Version
//     let xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function(){
//         if(xhr.status === 200){
//             if (xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response))
//             }
//             else if(xhr.status === 404){
//             error()
//         }
//     }
// }
// xhr.open('get','http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// xhr.send()

//Fetch
// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response))

//Promise = Janji


//Contoh Promise 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if(ditepati){
        resolve('Janji Telah Ditepati!')
    } else {
        reject('Ingkar janji')
    }
})
janji1
    .then(response => console.log(`OK! ${response}`))
    .catch(response =>  console.log(`Not OK! ${response}`))

//Contoh Promise 2

const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(()=>{
            resolve('Ditepati setelah menunggumu')
        }, 2000)
    }else{
        setTimeout(()=>{
            resolve('Tidak ditepati setelah menunggumu')
        }, 2000)
    }
})

console.log('mulai')
// console.log(janji2.then((response)=>{console.log(response)})) // Agar terlihat saat promisenya pending
janji2
    .finally(() => console.log('Selesai Menunggu') ) // Digunakan Saat Animasi Login
    .then(response => console.log(`OK! ${response}`))
    .catch(response =>  console.log(`Not OK! ${response}`))
console.log('selesai')


//Promise.all()
// Connect ke dua api yang berbeda
const film = new Promise( resolve => {
    setTimeout(()=>{
        resolve([{
            judul: 'Avengers',
            sutradara: 'Akbar',
            pemeran: 'Doddy, Erik'
        }])
    }, 2000)
})

const cuaca = new Promise ( resolve => {
    setTimeout(()=>{
        resolve([{
            kota: 'Banjarmasin',
            temp: 24,
            kondisi: 'Cerah'
        }])
    }, 1000)
})


film.then(response => console.log(response))
cuaca.then(response => console.log(response))

//Menjalankan Sekaligus
Promise.all([film, cuaca]).then(response => console.log(response)) // Berbentuh Array
// Untuk Memisahkan Array bisa menggunakn spread operator
.then(response => {
    const [film, cuaca] = response;
    console.log(film)
    console.log(cuaca)
})