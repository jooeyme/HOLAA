const hitung = require('./hitung')

var sisiPersegi = 20 ;
var panjangPersegiPanjang =  15;
var lebarPersegiPanjang = 10;

// menghitung luas persegi 
console.log(`Luas Persegi dengan sisi ${sisiPersegi} adalah : ` + hitung.luasPersegi(sisiPersegi))

// menghitung keliling persegi
console.log(`Keliling Persegi dengan sisi ${sisiPersegi} adalah : ` + hitung.kelilingPersegi(sisiPersegi))

// menghitung luas persegi panjang
console.log(`Luas Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah : ` + hitung.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang))

// menghitung keliling persegi panjang
console.log(`Keliling Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang} adalah : ` + hitung.kelilingPersegiPanjang(panjangPersegiPanjang,lebarPersegiPanjang))