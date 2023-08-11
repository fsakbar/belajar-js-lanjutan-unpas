// Yang bisa diganti style hanya element
//DOM Selection

// document.getElementById() -> element
const judul = document.getElementById('judul') //element
const psatu = document.getElementById('p')
judul.style.backgroundColor = 'red';
judul.style.color =  '#ccc';
judul.innerHTML = 'Muhammad Aulia Akbar'

// document.getElementsByTagName() -> HTMLCollection = sama seperti array adalah kumpulan element element
const paragraf = document.getElementsByTagName('p')
paragraf[2].style.backgroundColor = 'lightblue'
for (let i = 0; i < 3; i++){
    paragraf[i].style.backgroundColor = 'lightblue'
}

//document.getLementsByClassName() -> HTMLCollection 
const paragraf2 = document.getElementsByClassName('p1');
paragraf2[0].innerHTML = 'ini diubah';


//document.querySelector() -> element
//selector merupakan selector css
const paragraf4 = document.querySelector('#dua');
paragraf4.style.fontSize = '30px'



//querySelectorAll() ->NodeList
//memilih semua elemen selector yang ada di halaman contohnya halaman p
const pallsel= document.querySelectorAll('p')
pallsel[0].style.backgroundColor = 'red'

//noderoot
//