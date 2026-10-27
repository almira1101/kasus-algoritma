const prompt = require('prompt-sync')({sigint: true});

console.log("--------------------")
console.log("KONVERSI JARAK SEMUT")
console.log("____________________");

let jarak = Number(prompt("jarak yang di tempuh(cm): "))

let kilometer = parseInt(jarak / 100000);
let sisa = jarak % 100000;
let meter = parseInt(sisa / 1000);
let centimeter = sisa % 100;

console.log(`hasil konversinya adalah: 
    ${kilometer} km
    ${meter} m
    ${centimeter} cm`)
