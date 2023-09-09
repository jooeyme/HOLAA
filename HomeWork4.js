
// Fungsi untuk membuat array 100 angka random
function getRandomArray(length, min, max){
  const ArrayRandom = [];

  for (let i = 0; i < length; i++) {
    const AngkaRandom = Math.round(Math.random() * (max - min + 1)) + min ;
    ArrayRandom.push(AngkaRandom);
  }
  return ArrayRandom;
}
//penggunaan ArrayAngka
const ArrayAngkaRandom = getRandomArray(100, 1, 50);
console.log(ArrayAngkaRandom);

// fungsi untuk membagi 2 array
function BagiDuaArray(arr) {
  const ArrayGenap = [];
  const ArrayGanjil = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      ArrayGenap.push(arr[i]);
    } else {
      ArrayGanjil.push(arr[i]);
    }
  }
  return {
    Genap : ArrayGenap,
    Ganjil : ArrayGanjil
  };
}
// penggunaan bagi 2 array
const HasilBagiDua = BagiDuaArray(ArrayAngkaRandom);

console.log('Array Genap:', HasilBagiDua.Genap);
console.log('Array Ganjil:', HasilBagiDua.Ganjil);

const array_genap = (HasilBagiDua.Genap);
const array_ganjil = (HasilBagiDua.Ganjil);
 
// fungsi untuk min max genap
function CariMinMax(arr){
  let minArray = arr[0]; 
  let maxArray = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minArray) {
      minArray = arr[i]; 
    } else if (arr[i] > maxArray) {
      maxArray = arr[i]; 
    }
  }

  return {
    min_array : minArray,
    max_array : maxArray
  };
}
// penggunaan cari min max array
const HasilMinMaxGenap = CariMinMax(array_genap);
console.log("Nilai min Array Genap : " + HasilMinMaxGenap.min_array);
console.log("Nilai Max Array Genap : " + HasilMinMaxGenap.max_array);

const min_genap = HasilMinMaxGenap.min_array;
const max_genap = HasilMinMaxGenap.max_array;

const HasilMinMaxGanjil_ = CariMinMax(array_ganjil);
console.log("Nilai min Array Ganjil : " + HasilMinMaxGanjil_.min_array);
console.log("Nilai Max Array Ganjil : " + HasilMinMaxGanjil_.max_array);

const min_ganjil = HasilMinMaxGanjil_.min_array;
const max_ganjil = HasilMinMaxGanjil_.max_array;

// fungsi untuk mencari total nilai ganjil dan genap
function HitungTotalArray(arr){
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
const HasilTotalGenap = HitungTotalArray(array_genap);
console.log("Hasil Total Array Genap : ", HasilTotalGenap);

const HasilTotalGanjil = HitungTotalArray(array_ganjil);
console.log("Hasil Total Array Ganjil : ", HasilTotalGanjil)

const HasilTotalArray = HitungTotalArray(ArrayAngkaRandom);
console.log("Hasil Total Array : ", HasilTotalArray)

// fungsi rata rata
function CariRataRata(arr){
  const total = HitungTotalArray(arr);

  if (arr.length === 0) {
    return null;
  }
  return total / arr.length;
}
// penggunaan cari rata rata array
const ratarata = CariRataRata(ArrayAngkaRandom);
console.log("rata-rata Array : ", ratarata);

const ratarata_genap = CariRataRata(array_genap);
console.log("rata-rata Array Genap : ", ratarata_genap);

const ratarata_ganjil = CariRataRata(array_ganjil);
console.log("rata-rata Array Ganjil : ", ratarata_ganjil);

// fungsi pembanding min 
function BandinginMin(arr_min_genap, arr_min_ganjil){
  if (arr_min_genap == arr_min_ganjil){
    return "Nilai min Ganjil dan Genap sama besar"
  } else if (arr_min_genap > arr_min_ganjil){
    return "Nilai min genap lebih besar"
  } else {
    return "Nilai min Ganjil lebih besar"
  }
}
// penggunaan bandingin min
const bandingin_min = BandinginMin(min_genap, min_ganjil);
console.log("bandingin nilai min array genap dan ganjil : " + bandingin_min)

// fungsi pembanding max
function BandinginMax(arr_max_genap, arr_max_ganjil){
  if (arr_max_genap == arr_max_ganjil){
    return "Nilai max Ganjil dan Genap sama besar"
  } else if (arr_max_genap > arr_max_ganjil){
    return "Nilai max genap lebih besar"
  } else {
    return "Nilai max Ganjil lebih besar"
  }
}
// penggunaan bandingin max
const bandingin_max = BandinginMax(max_genap, max_ganjil);
console.log("bandingin nilai max array genap dan ganjil : " + bandingin_max)

// fungsi pembanding total
function BandinginTotal(totalgenap, totalganjil){
  if (totalgenap == totalganjil){
    return "Nilai total Ganjil dan Genap sama besar"
  } else if (totalgenap > totalganjil){
    return "Nilai total genap lebih besar"
  } else {
    return "Nilai total Ganjil lebih besar"
  }
}
// penggunaan bandingin total
const bandingin_total = BandinginTotal(HasilTotalGenap, HasilTotalGanjil);
console.log("bandingin nilai total array genap dan ganjil : " + bandingin_total)

// fungsi pembanding rata-rata
function Bandinginrata(rata_genap, rata_ganjil){
  if (rata_genap == rata_ganjil){
    return "Nilai rata-rata Ganjil dan Genap sama besar"
  } else if (rata_genap > rata_ganjil){
    return "Nilai rata-rata genap lebih besar"
  } else {
    return "Nilai rata-rata Ganjil lebih besar"
  }
}
// penggunaan bandingin rata-rata
const bandingin_ratarata = Bandinginrata(ratarata_genap, ratarata_ganjil);
console.log("bandingin nilai rata-rata array genap dan ganjil : " + bandingin_ratarata)









