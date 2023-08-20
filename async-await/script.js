// const coba = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 2000);
// });

// coba.then(() => console.log(coba))


function cobaPromise(){
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000){
        setTimeout(() => {
            resolve('selesai');
        }, 2000);            
        } else{
            reject('kelamaan!')
        }

    });
}

//Mengguankan Then dan Catch
// const coba = cobaPromise();
// coba
//     .then(()=>console.log(coba))
//     .catch(()=>console.log(coba))


//Menggunakan Try dan Catch dalam Function
async function cobaAsync(){
    try{
        const coba = await cobaPromise();
        console.log(coba)
    } catch(err) {
        console.error(err)
    }
}
cobaAsync()


//Menggunakan Fetch?