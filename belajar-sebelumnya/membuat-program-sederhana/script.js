const tUbahWarna = document.getElementById('tUbahWarna');
// function gantiWarna() {
//     // document.body.setAttribute('class', 'biru-muda')
//     document.body.classList.toggle('biru-muda')
// }
tUbahWarna.onclick = function(){
    document.body.classList.toggle('biru-muda')
}

const tAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.append(teksTombol)
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});

// const sMerah = document.querySelector('input[name=sMerah]');

// function scaleMerah(){
//     alert('OK')
// }

window.onload = function(){
    const sMerah = document.getElementById('scaleMerahid')
    const sHijau = document.getElementById('scaleHijauid')
    const sBiru =  document.getElementById('scaleBiruid')
    // window.onload = function (){
        sMerah.addEventListener('click', function(){
            const r = sMerah.value;
            const g = sHijau.value;
            const b = sBiru.value;
            document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
    })
    // }
    // window.onload = function (){
        sHijau.addEventListener('click', function(){
            const r = sMerah.value;
            const g = sHijau.value;
            const b = sBiru.value;
            document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
    })
    // } 

    // window.onload = function(){
        sBiru.addEventListener('click', function(){
            const r = sMerah.value;
            const g = sHijau.value;
            const b = sBiru.value;
            document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')'
    })
    // }
}

window.onload = function(){
document.addEventListener('mousemove', function(event){
    // console.log(event.clientX)

    //ukuran width
    console.log(window.innerWidth)
    const xPos = Math.round((event.clientX / window.innerWidth) * 255)
    const yPos = Math.round((event.clientY / window.innerWidth) * 255)
    document.body.style.backgroundColor = 'rgb('+yPos+', 100, '+yPos+')'
})}

