// HTML Fragments
// const mhs = {
//     nama: 'Muhammad Aulia Akbar',
//     umur: 33,
//     nim: '2010817210023',
//     email: 'royaleaulia@gmail.com'
// };
// //
// let el = `<div class = "mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nim}</span>
// </div>`
// console.log(el)


const mhs = [
    {
        nama: 'Muhammad Aulia',
        email: 'royaleaulia@gmail.com'
    },
    {
        nama: 'Cornelia',
        email: 'corn@gmail.com'
    },
    {
        nama: 'Fiony Alveria',
        email: 'fiony@gmail.com'
    },
]

//loping
let el = `<div class="mhs">
${mhs.map(a => `<ul>
    <li>${a.nama}</li>
    <li>${a.email}</li>
</ul>`).join('')}
</div>`
// Menyisipkan ke dalam Body

//conditionals with ternary



const lagu = {
    judul: 'Kau Adalah',
    penyanyi: 'Isyana Saraswati',
    feat: 'Rayi Putra'
}

const el2 = `<div class="lagu">
<ul>
    <li>${lagu.penyanyi}
    <li>${lagu.judul} ${lagu.feat ? `feat ${lagu.feat}` : ''}
</ul>
</div>`



const mhs2 = [
    {
        nama: 'Muhammad Aulia',
        semester: 5,
        email: 'royaleaulia@gmail.com',
        mataKuliah: [
            'Rekayasa Web',
            'Analisis dan Perancangan Sistem Informasi',
            'Pemrograman Sistem Berorientasi Object',
            'Pemrograman Sistem Interaktif'
        ]
    },
    {
        nama: 'Cornelia',
        semester: 5,
        email: 'corn@gmail.com',
        mataKuliah: [
            'Rekayasa Web',
            'Analisis dan Perancangan Sistem Informasi',
            'Pemrograman Sistem Berorientasi Object',
            'Pemrograman Sistem Interaktif'
        ]
    },
    {
        nama: 'Fiony Alveria',
        semester: 5,
        email: 'fiony@gmail.com',
        mataKuliah: [
            'Rekayasa Web',
            'Analisis dan Perancangan Sistem Informasi',
            'Pemrograman Sistem Berorientasi Object',
            'Pemrograman Sistem Interaktif',
        ]
    },
]


// function cetakMataKulaih(mataKuliah){
//     return `<ol>
//         ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}    
//     </ol>`;
// }

const el3 = 
`<div class="mhs3">

${mhs2.map(a =>
`<ul>
<li>${a.nama}</li>
<li>${a.email}</li>
<li>Semester ${a.semester}</li>
<li>Mata Kuliah:</li>
<ol>
${a.mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
</ol>
</ul>`).join('')}
</div>`


document.body.innerHTML = el3
