//membuat looping menjadi fungsi rekursif.

// function tampilAngka(n){
//     console.log(n);
//     if(n!=0){
//         return tampilAngka(n-1);
//     }
// }
// tampilAngka(10);


function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5))