const prompt = require('prompt-sync')({sigint: true});

console.log("-----------------------")
console.log("MENENTUKAN PECAHAN UANG")
console.log("_______________________");

let nilaiUang = Number(prompt("Nilai uang sebesar: "));

let seribu = parseInt(nilaiUang / 1000);
let sisa = nilaiUang % 1000;
let limaRatus = parseInt(sisa / 500);
sisa = sisa % 500;
let seratus = parseInt(sisa / 100);
sisa = sisa % 100;
let limaPuluh = parseInt(sisa / 50);
sisa = sisa % 50;
let duaPuluhLima = parseInt(sisa / 25);

console.log(`
    Uang sebesar Rp${nilaiUang} dapat ditukar menjadi:
    ${seribu} buah pecahan Rp1000
    ${limaRatus} buah pecahan Rp500
    ${seratus} buah pecahan Rp100
    ${limaPuluh} buah pecahan Rp50
    ${duaPuluhLima} buah pecahan Rp25 `)
