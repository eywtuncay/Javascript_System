/*
    DEĞER VE REFERANS TİPLER

    JavaScript'te değer tipleri (primitive types) ve referans tipleri (reference types) olmak üzere iki ana veri tipi kategorisi vardır. Bu iki tür, verilerin bellekte nasıl saklandığı ve işlendiği açısından farklılık gösterir.


    ---- DEĞER TİPLERİ (Primitive Types) ---
    Değer tipleri, doğrudan değeri saklayan veri türleridir. Bu tipler, basit ve sabit veri türleridir. Değer tipleri şunlardır:
    Number, String, Boolean, Undefined, Null, Symbol, BigInt

    Bu veri tipleri doğrudan bellekte saklanır. Bir değer tipi bir değişkene atandığında, o değişkenin kendisi değeri tutar.

    
    --- REFERANS TİPLERİ (Reference Types) ---
    Referans tipleri, değerin kendisi yerine bellekteki bir referansı (adresi) saklar. Referans tipleri şunlardır:
    Object, Array, Function, Date, RegExp

    Bu tipler bellekte farklı bir şekilde saklanır. Bir referans tipi bir değişkene atandığında, değişken aslında bellekteki o nesnenin adresini tutar. Aynı nesneye birden fazla değişken referans verebilir.



    Özet:
    Değer Tipleri: Değerler doğrudan saklanır ve kopyalandığında yeni bir bağımsız kopya oluşturulur.
    
    Referans Tipleri: Değerler bellekteki bir adres aracılığıyla saklanır ve kopyalandığında aynı nesneye referans verirler.
    
    Bu fark, JavaScript'te veri yönetimi ve manipülasyonu yaparken önemlidir. Değer tipleri ile çalışırken veriler birbirinden bağımsızdır, referans tipleri ile çalışırken ise veriler arasındaki bağlantıyı dikkate almak gerekir.

*/




// let a = 7;

// let b = a;

// console.log("a : " + a);
// console.log("b :" + b);

// console.log("----------------------------");

// b = 10;
// console.log("a : " + a);
// console.log("b : " + b);

// let dizi1 = [1,2,3];
// let dizi2 = [1,2,3];
// let dizi2 = dizi1;

// if(dizi1==dizi2){
//     console.log("esittir");
// }else{
//     console.log("esit degildir");
// }

// console.log(dizi1);
// console.log(dizi2);



let dizi1 = [1,2,3];
let dizi2 = dizi1;
let dizi3 =dizi2;


dizi3.push(23);

console.log(dizi1);
console.log(dizi2);
console.log(dizi3);

