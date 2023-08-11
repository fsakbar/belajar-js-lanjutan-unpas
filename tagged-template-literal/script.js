const nama = 'Muhammad Aulia Akbar'
const umur = 33;
const email = 'royaleaulia@gmial'

function coba (strings, ...values) {
    // Menggunakan Foreach
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`
    // })
    // return result;

    // Mengguankan Reduce
    // return strings.reduce((result, str, i) => `${result}${str}${values[i]|| ''}`, '')


    // Mengguankan Reduce Highlight
    return strings.reduce((result, str, i) => `${result}${str} <span class="hl">${values[i]|| ''}</span>`, '')
}

const str = coba `Halo, Nama Saya ${nama}, Saya Berumur ${umur} tahun. dan Email Saya ${email}`;
console.log(str)

document.body.innerHTML = str


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred:`;