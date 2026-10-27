const prompt = require('prompt-sync')({sigint: true});

console.log("-----------------")
console.log("BERAT BADAN IDEAL")
console.log("_________________");

let t = Number(prompt("masukkan tinggi badan: "));

let hasil = t - 100
let beratIdeal = hasil - (hasil * 10 / 100);

console.log(`
    Jika tinggi badan nya adalah ${t}, berat badan ideal nya adalah ${beratIdeal} kg `)