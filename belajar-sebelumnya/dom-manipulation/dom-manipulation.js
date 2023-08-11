// DOM Manipulation Method
// element manipulation
// node manipulation


// method manipulaton element
// element.innerHTML = mengubah isi dari html boleh membuat tag atau apapun
// element.style.<properti>
// element.setAttribute() = menimpa
// element.getAttribut() = mengambil
// element.removeAttribute() = menghapus
// element.classList = Mengelola kelas
//     element.classList.add()
//     element.classList.remove()
//     element.classList.toggle()
//     element.classList.item() = mencari urutan class
//     element.classList.contains() = nanya ada gak kelas tersebut
//     element.classList.replace('', '') = menghapus class yang diinginkan dan mengganti kelas tersebut

const judul = document.getElementById('judul')
judul.innerHTML = "<div id='dontdie'><em>Dont Die</em></div>"
//membuat inner html maka akan hilang dan digantikan yang baru.


const dontDie = document.getElementById('dontdie')
dontDie.style.backgroundColor = 'red'

//setAttribute
judul.setAttribute('name', 'sandika')


const a = document.querySelector('section#a');
//getAttribute
a.getAttribute('href')


const p2 = document.getElementsByClassName('p2')[0];














