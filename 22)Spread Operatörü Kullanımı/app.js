/* 

    Spread operatörü (...) JavaScript'te bir dizi veya nesneyi genişletmek için kullanılır.
    Spread operatörü, JavaScript'te diziler ve nesnelerle çalışırken oldukça kullanışlıdır. Dizileri ve nesneleri birleştirmek, kopyalamak, güncellemek ve fonksiyonlara argüman olarak yaymak gibi birçok durumda kullanılabilir. Spread operatörü, kodun daha okunabilir ve yönetilebilir olmasını sağlar.

*/


// --- DİZİLERDE SPREAD OPERATÖRÜ ---

// Birleştirme
// Spread operatörü, iki veya daha fazla diziyi birleştirmek için kullanılabilir.
const dizi1 = [1, 2, 3];
const dizi2 = [4, 5, 6];

const birlesmisDizi = [...dizi1, ...dizi2];
console.log(birlesmisDizi); // [1, 2, 3, 4, 5, 6]


// Kopyalama
// Bir diziyi kopyalamak için de spread operatörü kullanılabilir.
const orijinalDizi = [1, 2, 3];
const kopyaDizi = [...orijinalDizi];

console.log(kopyaDizi); // [1, 2, 3]


// Eleman Ekleme
// Bir dizinin belirli bir yerine yeni elemanlar eklemek için spread operatörü kullanılabilir.
const dizi = [1, 2, 3];
const yeniDizi = [0, ...dizi, 4];

console.log(yeniDizi); // [0, 1, 2, 3, 4]




// --- NESNELERDE SPREAD OPERATÖRÜ ---

// Birleştirme
// Spread operatörü, iki veya daha fazla nesneyi birleştirmek için de kullanılabilir.
const nesne1 = { a: 1, b: 2 };
const nesne2 = { c: 3, d: 4 };

const birlesmisNesne = { ...nesne1, ...nesne2 };
console.log(birlesmisNesne); // { a: 1, b: 2, c: 3, d: 4 }


// Kopyalama
// Bir nesneyi kopyalamak için de spread operatörü kullanılabilir.
const orijinalNesne = { a: 1, b: 2 };
const kopyaNesne = { ...orijinalNesne };

console.log(kopyaNesne); // { a: 1, b: 2 }


// Eleman Ekleme veya Güncelleme
// Bir nesneye yeni elemanlar eklemek veya mevcut elemanları güncellemek için kullanılabilir.
const nesne = { a: 1, b: 2 };
const guncellenmisNesne = { ...nesne, b: 3, c: 4 };

console.log(guncellenmisNesne); // { a: 1, b: 3, c: 4 }




// --- FONKSİYON ARGÜMANLARI**** ---

//Spread operatörü, bir diziyi fonksiyon argümanlarına yaymak için kullanılabilir.****

function toplam(a, b, c) {
    return a + b + c;
}

const sayilar = [1, 2, 3];

console.log(toplam(...sayilar)); // 6













