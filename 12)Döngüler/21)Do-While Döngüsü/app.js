

/*

do-while döngüsü, en az bir kez çalıştırılması garanti edilen bir döngüdür. Döngünün koşulu, döngü bloğunun çalıştırılmasından sonra kontrol edilir. Bu nedenle, do-while döngüsü, while döngüsünden farklı olarak, koşul yanlış olsa bile en az bir kez çalışacaktır.

do {
   -Koşul doğru olduğu sürece çalıştırılacak kod bloğu
} while (koşul);

*/



// 1 den 10'a kadar yazdıralım.

let sayac = 1;

do {
    console.log(sayac);
    sayac++;
} while (sayac <= 10);





// 1 den 20'ye kadar olan tek sayıların toplamını bulalım.

let sayac2 = 0;
let toplam = 0;

do {
    if(sayac2 % 2 == 1){
        toplam += sayac2;
    }
    sayac2 ++;
} while (sayac2 <= 20);
console.log("Toplam : ",toplam);





