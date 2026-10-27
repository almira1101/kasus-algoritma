const prompt = require('prompt-sync')({sigint: true});

console.log("----------------------");
console.log("KONVERSI PANJANG BENDA");
console.log("______________________");

let p = Number(prompt("masukkan panjang benda (meter): "));

let inch = parseInt(p / 0.0254);
let feet = parseInt(p / 0.3048);
let yard = parseInt(p / 0.9144);

console.log(`
    ${inch} inch 
    ${feet} feet 
    ${yard} yard`);