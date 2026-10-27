const prompt = require('prompt-sync')({sigint: true});
console.log('----------------------------')
console.log("MENGHITUNG JARAK DUA TANGGAL")
console.log('----------------------------');

let day1 = Number(prompt("Masukkan Hari Pertama: "));
let month1 = Number(prompt("Masukkan bulan pertama: "))
let year1 = Number(prompt("Masukkan tahun pertama: "))

let day2 = Number(prompt("Masukkan Hari Kedua: "))
let month2 = Number(prompt("Masukkan bulan kedua: "))
let year2 = Number(prompt("Masukkan taun kedua: "))

let total1 = (year1 * 365) + (month1 * 30) + day1
let total2 = (year2 * 365) + (month2 * 30) + day2

let selisih = total2 - total1
if (selisih < 0) {
    selisih = total1 - total2
}

let tahun = parseInt(selisih / 365);
let sisa = selisih % 365;
let bulan = parseInt(sisa / 30);
let hari = sisa % 30;

console.log(`
    TAHUN  : ${tahun}
    BULAN  : ${bulan}
    HARI   : ${hari} `)

