// Mendengarkan sebuah aksi
// Event Handler ada dua Inline HTML Attribute, Element Method => menimpa perubahan
// AddEventListener => menambah perubahan
// Daftar event
// Mouse, Keyboard, Resources, Focus dll
// https://developer.mozilla.org/en-US/docs/Web/Events



//Inline HTML Attribute
const p3 = document.querySelector('.p3');
function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightblue'
}


//Element Method
function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightblue'
}
const p2 = document.querySelector('.p2')
p2.onclick = ubahWarnaP2


//addEventListener
const p4 = document.querySelector('section#b p')

function tambahlist(){
    const ul = document.querySelector('section#b ul')
    //menambahkan list baru di paragraf 4 dengan merangkai

        const liBaru = document.createElement('li')
        const teksLiBaru = document.createTextNode('item baru ')
        const tambah1 = document.createTextNode('tambah')
        liBaru.appendChild(teksLiBaru)
        liBaru.appendChild(tambah1)
        ul.appendChild(liBaru)          
}

p4.addEventListener('click', tambahlist) ;


