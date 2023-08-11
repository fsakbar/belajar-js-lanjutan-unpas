// Function

let kubus1 = 8;
let kubus2 = 3;
let total = jumlahVolumeDuaKubus(kubus1, kubus2)

console.log(total)


function jumlahVolumeDuaKubus(kubus1, kubus2){
    let hasil, vkubus1, vkubus2;
    vkubus1 = kubus1 * kubus1 * kubus1;
    vkubus2 = kubus2 * kubus2 * kubus2;
    hasil = vkubus1 + vkubus2
    return hasil;
}