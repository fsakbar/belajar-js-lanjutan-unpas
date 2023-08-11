const cards = document.querySelectorAll('.card'); // hanya menangkap satu elemen yaitu elemen pertama yang ditemukan
// const close = document.querySelector('.close')
const container = document.querySelector('.container')

// close.addEventListener('click', function(){
//     container.removeChild(card)
// })



const close = document.querySelectorAll('.close')

// for (let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
//         // close[i].parentElement.style.display = 'none';
//         console.log (e)
//         e.target.parentElement.style.display = 'none'
//     });
// }


//versi lebih singkat
// close.forEach(function(el) {
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none' //parentElement adalah dom transversal
//         e.preventDefault()// berfungsi untuk membuat agar tidak di refresh ulang
//         e.stopPropagation() // menghentikan bubbling dari parent yaitu card
//     })
    
// });

// DOM Transversal Node
// parentNode
// parentElement
// nextSibling
// nextElementSibling
// previousSIbling
// previousElementSibling

// const nama = document.querySelector('.nama');
// console.log(nama.nextSibling)

// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok')
//     })
// })

// event bubbling adalah element yang akan dijalankan di card walaupun di childElementnya maka akan tetap berjalan.
// ngasih event di parent.
// cara lebih mudah agar tidak terjadi event bubbling adalah dengan menggunakan class parentnya 
//contoh
container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})

