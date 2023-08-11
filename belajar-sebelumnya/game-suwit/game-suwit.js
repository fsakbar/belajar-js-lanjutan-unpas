function getpilihanComputer(){
    var comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';

}

function getHasil(comp, player){
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function putarGambar(){
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000){
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length){
            i = 0
        }
    }, 100)
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getpilihanComputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     const info = document.querySelector('.info')
//     info.innerHTML = ''
//     putarGambar()

//     setTimeout(function(){
//         const imgKomputer = document.querySelector('.img-komputer')
//         imgKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
   
//         info.innerHTML = hasil
//     }, 1000)

// })

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getpilihanComputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     const info = document.querySelector('.info')
//     info.innerHTML = ''
//     putarGambar()

//     setTimeout(function(){
//         const imgKomputer = document.querySelector('.img-komputer')
//         imgKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
 
//         info.innerHTML = hasil
//     }, 1000)

// })

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getpilihanComputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)
//     const info = document.querySelector('.info')
//     info.innerHTML = ''
//     putarGambar()

//     setTimeout(function(){
//         const imgKomputer = document.querySelector('.img-komputer')
//         imgKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
        
//         info.innerHTML = hasil
//     }, 1000)

// })

const pil = document.querySelectorAll('li img')
pil.forEach(function(pil){
    pil.addEventListener('click', function(){

        const pilihanComputer = getpilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        
        const info = document.querySelector('.info')
        info.innerHTML = ''
        putarGambar()
    
        setTimeout(function(){
            const imgKomputer = document.querySelector('.img-komputer')
            imgKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png')
            info.innerHTML = hasil
            
        }, 1500)
    })
})


