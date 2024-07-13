
/*

JavaScript dizileri (arrays) veri yapılarıdır ve birden fazla veriyi tek bir değişkende saklamanıza olanak tanır. JavaScript'te diziler kullanımı oldukça yaygındır ve diziler üzerinde birçok işlem yapabilirsiniz. 

*/


// --- DİZİ OLUŞTURMA ---

//Boş Dizi
let dizi = [];

//Eleman İçeren Dizi
let sayilar = [1, 2, 3, 4, 5];
let meyveler = ["Elma", "Muz", "Çilek"];
let karisik = ["Elma", 5, true, "Armut"];

// --- DİZİ ELEMANLARINA ERİŞİM ---

//Eleman Okuma
let ilkMeyve = meyveler[0]; // "Elma"
let ikinciSayi = sayilar[1]; // 2

//Eleman Değiştirme
meyveler[1] = "Portakal"; // "Muz" yerine "Portakal"




let sayilarVeİsimler = [1,3,8,65,6,"Tuncay","Albayrak"];

console.log(sayilarVeİsimler[5]);


let karisikDizi = [2,65,"Enes","Atilla",6.85,true];

console.log(karisikDizi[4]);



// --- Döngüleri kullanarak dizinin içinde dönme. ---

let isimler = ["Tuncay","Enes","Atilla","Emre"];


//Forech döngüsü ile dizinin içinde dönme (En sık kullanılan)

isimler.forEach(function(isim){
    console.log(isim);
});


//For döngüsü ile dizinin içinde dönme

for(let i=0; i<isimler.length; i++){
    console.log(isimler[i]);
}


//While döngüsü ile dizinin içinde dönme

sayac =0;
while(sayac < isimler.length){
    console.log(isimler[sayac]);
    sayac++;
}

