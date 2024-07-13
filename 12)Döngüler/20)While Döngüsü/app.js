
/*


while döngüsü, belirli bir koşul doğru olduğu sürece bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır. while döngüsü, başlangıçta verilen koşul ifadesini değerlendirir ve bu koşul true olduğu sürece döngü bloğu çalışır.


while (koşul ifadesi) {
     Döngü içindeki kodlar
}


*/




// 1 den 10'a kadar yazdırma.

let sayac = 1;

while(sayac <= 10){
    console.log(sayac);
    sayac++;
}



// 1 den 10'a kadar çiftleri yazdırma.

let deger = 0;

while(deger <= 10){

    if(deger % 2 == 0){
        console.log(deger);
    }

    deger++;
}



// 1 den 7'ye kadar yazdırıp break ile döngüyü kırma.

let sayac2 = 0;

while(true){
    console.log(sayac2);
    if(sayac2==7){
        break;
    }
    sayac2++;
}

















