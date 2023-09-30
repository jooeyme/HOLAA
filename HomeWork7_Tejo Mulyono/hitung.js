// Fungsi untuk menghitung luas persegi
function luasPersegi(sisi) {
    return sisi * sisi;
}
  
// Fungsi untuk menghitung keliling persegi
function kelilingPersegi(sisi) {
    return sisi * 4;
}
  
// Fungsi untuk menghitung luas persegi panjang
function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
  
// Fungsi untuk menghitung keliling persegi panjang
function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}
  
module.exports.luasPersegi = luasPersegi;
module.exports.kelilingPersegi = kelilingPersegi;
module.exports.luasPersegiPanjang = luasPersegiPanjang;
module.exports.kelilingPersegiPanjang = kelilingPersegiPanjang;

