

/*

Geriye değer döndüren metot tanımlamak. ---> Return

JavaScript'te return anahtar kelimesi, bir fonksiyonun çalışmasını durdurmak ve çağıran koda bir değer döndürmek için kullanılır. return ile döndürülen değer, fonksiyon çağrıldığında o değerin yerine geçer.

- bir değeri metotun dışarısına çıkarmak için kullanılır.
- bir metotu bitiren anahtar kelimedir.

- Geriye değer döndürmeyen metotlara ---> void denir.

*/






// Küp alıp değeri geri döndüren metot tanımlama.


function küpAlma(sayi){

    sonuc=(sayi*sayi*sayi);
    return sonuc;

}


let küp = küpAlma(5);   // return ile geri dönen sonuc degerini küp degiskenine atadım.
console.log(küp);



