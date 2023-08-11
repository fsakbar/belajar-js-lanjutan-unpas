//membuat variabel / DOM Selelction
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru')
//masukan teksPBaru ke PBaru 
pBaru.appendChild(teksPBaru)


//simpan pBaru di akhir Section A / DOM Selelction 
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)


// membuat variabel / DOM Selelction
const liBaru = document.createElement('li')
const teksBaru = document.createTextNode('Item Baru')
liBaru.appendChild(teksBaru)
//membuat variabel / DOM Selelction
const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')
ul.insertBefore(liBaru, li2)





const PJudulBaru = document.createElement('h2')
const judulbaru = document.createTextNode('JudulBaru')
PJudulBaru.appendChild(judulbaru)
const secB = document.getElementById('b')
const paragraf4 = document.querySelector('section#b p')
secB.replaceChild(PJudulBaru, paragraf4)


const a = document.querySelector('section#a a')
sectionA.removeChild(a)


pBaru.style.backgroundColor = 'lightgreen'
PJudulBaru.style.backgroundColor = 'lightgreen'
liBaru.style.backgroundColor = 'lightgreen'


