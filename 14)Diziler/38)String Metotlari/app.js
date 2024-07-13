
// charAt()
// Belirtilen indeksteki karakteri döndürür.

// concat()
// İki veya daha fazla stringi birleştirir.

// indexof()
// Belirtilen karakterin ilk bulunduğu indeksi döndürür.

// lastindexof()
// Belirtilen karakterin son bulunduğu indeksi döndürür.

// toUpperCase()
// Stringi tamamen büyük harflere dönüştürür.

// toLowerCase()
// Stringi tamamen küçük harflere dönüştürür.

// trim()
// Stringin başındaki ve sonundaki boşlukları kaldırır.

// slice()
// Belirtilen başlangıç ve bitiş indekslerine göre alt stringi döndürür.

// substring()
// Belirtilen başlangıç ve bitiş indeksleri arasındaki alt stringi döndürür.

// replace()
// Belirtilen stringi başka bir string ile değiştirir.

// split()
// Stringi belirtilen ayırıcıya göre alt stringlere böler ve bir dizi döndürür.

// valueOf()
// Stringin ilkel değerini döndürür.

// startsWith()
// Stringin belirtilen karakter veya alt string ile başlayıp başlamadığını kontrol eder.

// endsWith()
// Stringin belirtilen karakter veya alt string ile bitip bitmediğini kontrol eder.



let kurs ="Modern Web Geliştirme Kursu";
let tarih = "2023";



//CHARTAT METOT -  Belirtilen indeksteki karakteri döndürür.
// let karakter = kurs.charAt(1);
// console.log(karakter);

//CONCAT METOT -  İki veya daha fazla stringi birleştirir.
// let sonuc = kurs.concat(" ", tarih, " Enes");
// console.log(sonuc);

//INDEXOF METOT -  Belirtilen karakterin ilk bulunduğu indeksi döndürür.
// let index = kurs.indexOf("W");
// console.log(index);

// LASTINDEXOF METOT - Belirtilen karakterin son bulunduğu indeksi döndürür.
// let index = kurs.lastIndexOf("K");
// console.log(index);

//TOUPPERCASE METOT -  Stringi tamamen büyük harflere dönüştürür.
// let sonuc = kurs.toUpperCase();
// console.log(kurs);
// console.log(sonuc);

//TOLOWERCASE METOT -  Stringi tamamen küçük harflere dönüştürür.
// let sonuc = kurs.toLowerCase();
// console.log(sonuc);

//TRIM METOT -  Stringin başındaki ve sonundaki boşlukları kaldırır.
// console.log(kurs.trim());

//SLICE METOT -  Belirtilen başlangıç ve bitiş indekslerine göre alt stringi döndürür.
// console.log(kurs);
// console.log(kurs.slice(22, 28));

//SUBSTRING METOT -  Belirtilen başlangıç ve bitiş indeksleri arasındaki alt stringi döndürür.
// console.log(kurs);
// console.log(kurs.substring(0, 6));

//REPLACE METOT -  Belirtilen stringi başka bir string ile değiştirir.
// console.log(kurs);
// console.log(kurs.replace("Modern", "Güncel"));

//SPLIT METOT -  Stringi belirtilen ayırıcıya göre alt stringlere böler ve bir dizi döndürür.
// console.log(kurs);
// let dizi = kurs.split(",");
// console.log(dizi);

//VALUEOF METOT -  Stringin ilkel değerini döndürür.
// console.log(kurs.valueOf());

//STARTSWITH METOT -  Stringin belirtilen karakter veya alt string ile başlayıp başlamadığını kontrol eder.
// console.log(kurs);
// console.log(kurs.startsWith("M"));
// if (kurs.startsWith("M")) {
//     console.log("M harfi ile başlamaktadır.");
// }

//ENDSWITH METOT - // Stringin belirtilen karakter veya alt string ile bitip bitmediğini kontrol eder.
// console.log(kurs);
// console.log(kurs.endsWith("Geliştirme Kursu"));

