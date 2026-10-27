const prompt = require('prompt-sync')({sigint: true});

let detik = Number(prompt('Masukkan jumlah detik: '))
const HARI_KE_DETIK = 24 * 60 * 60
const JAM_KE_DETIK = 60 * 60
const MENIT_KE_DETIIK = 60

let hari = jam = menit = sisa = 0

hari = parseInt(detik / HARI_KE_DETIK)
sisa = detik % HARI_KE_DETIK

jam = parseInt(sisa / JAM_KE_DETIK)
sisa = sisa % JAM_KE_DETIK

menit = parseInt(sisa / MENIT_KE_DETIIK)
sisa %= MENIT_KE_DETIIK;

console.log(`
    ${hari} hari ${jam} jam ${menit} menit ${sisa} detik
    `)