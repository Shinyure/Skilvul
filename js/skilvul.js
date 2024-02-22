// Deklarasi Variable
let animal;

// Tipe Data JavaScript
let namaSaya = "Adhy Maulana F";
const umurSaya = 18

// Operator Aritmatik
const penjumlahan = 5 + 10;
const modulus = penjumlahan % 6;
const pangkat = modulus ** 9;

// Assignment Operator
let umur = 10;

umur += 5;

// String Operator
let kalimat = 'Hello';

kalimat += ' World';
console.log(kalimat)

// Deklarasi Fungsi
function namaSaya(){
    return "Daffa"
}

// Parameter & Argument
function luasPersegi(s){
    var luas = s * s;
    return luas;
}
var sisi_persegi = 5;
var hasil = luasPersegi(sisi_persegi);
console.log("Hasilnya adalah " + hasil);

// Deklarasi Objek
var saya = {
    nama: "Adhy Maulana F",
    umur: 18
};

console.log(saya);

// Add new Properti
let manusia = {
    kepala: true,
    badan: true,
    tangan: true
  };
  
  manusia.ekor = false;
  console.log(manusia);

// Delete Properti
let tubuh = {
    bugar: true,
    sehat: true,
    roda: 2
};

delete tubuh.roda

// Object Method
let kucing = {
    lucu: true,
    kaki: 4
};

kucing.suara = function() {
    return "Meong";
};
console.log(kucing.suara()); 

// Deklarasi Array
let hewan = ['kucing','naga','burung']

// Akses Data Array
A
fruits[fruits.length-1]

B
fruits[2]

// Edit Data Array
let hewan = ['kucing','naga','burung']

warna[3] = 'beyuang';
console.log(warna)

// Array Method
let fruits = ["Mangga", "Pisang", "Jambu"];
fruits.splice(2, 0, 'Semangka'); //output ---> ["Mangga", "Pisang", "semangka", "Jambu"] 

// Objeck Math Method
let bilangan = 9;  

let pow = Math.pow(bilangan, 2);
let sqrt = Math.sqrt(40 + bilangan);
let max = Math.max(bilangan, 3, 9);

console.log("Hasil pow:", pow);
console.log("Hasil sqrt:", sqrt);
console.log("Hasil max:", max);

// JS Conditional
function ganjilGenap(platNomor) {
    // Pemeriksaan apakah platNomor adalah bilangan ganjil atau genap
    if (platNomor % 2 === 1) {
        return "Ganjil";
    } else {
        return "Genap";
    }
}

console.log(ganjilGenap(7)); 
console.log(ganjilGenap(10));  
