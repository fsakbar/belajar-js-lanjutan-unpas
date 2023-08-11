const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption'; 

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }
    
    this.classList.toggle(satu);
    //setTimeout ada di global karena dijalankan ketika hoisting
    setTimeout(()=>{
        this.classList.toggle(dua)
    }, 600);
});