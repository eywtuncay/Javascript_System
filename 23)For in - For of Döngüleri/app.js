
// --- FOR İN DÖNGÜSÜ --- İndex numaralarını döner.

let isimler = ["Tuncay","Enes","Atilla","Emre"];

// for(değikeninAdı, in, dizi)

for(let isim in isimler){
    console.log(isim);          // 0, 1, 2, 3
    console.log(isimler[isim])  // Tuncay, Enes, Atilla, Emre (değerlere de erişmek istersek)
}



// --- FOR OF DÖNGÜSÜ --- Dizinin içindeki değerleri döner.

for(let isim of isimler){
    console.log(isim);                  // Tuncay, Enes, Atilla, Emre
    console.log(isimler.indexOf(isim))  // 0, 1, 2, 3 (index numarlarına erişmek istersek)
}

