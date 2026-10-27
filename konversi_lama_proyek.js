const prompt = require('prompt-sync')({sigint: true});

let hari  = Number(prompt("Masukkan jumlah hari: "))

const TAHUN_KE_HARI = 365;
const BULAN_KE_HARI = 30;

let tahun = bulan = sisa = 0

tahun = parseInt(hari / TAHUN_KE_HARI)
sisa = hari % TAHUN_KE_HARI

bulan = parseInt(sisa/BULAN_KE_HARI)
sisa %= BULAN_KE_HARI

console.log(`
    ${tahun} tahun ${bulan} bulan ${sisa} hari
    `)