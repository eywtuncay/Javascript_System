/*

Bir sınıfın içindeki bir yöntem (metot,fonksiyon,değişken..) veya özellik static olarak tanımlanmışsa,
bu yönteme veya özelliğe türettiğimiz nesne üzerinden değil, doğrudan sınıfın kendisi üzerinden erişebiliriz.

- Statik Yöntem veya Özellik: Sınıf ismi üzerinden erişilir.
- Statik Olmayan Yöntem veya Özellik: Nesne üzerinden erişilir.

Özetle:
Statik Yöntem veya Özellik: Sınıfa özgüdür.
Statik Olmayan Yöntem veya Özellik: Nesneye özgüdür.

*/


class Matematik{

    topla(a,b){
        console.log(a+b)
    }
    cikar(a,b){
        console.log(a-b)
    }
    carp(a,b){
        console.log(a*b)
    }
    static bol(a,b){
        console.log(a/b)
    }
}


const islem = new Matematik()   // (Nesne üzerinden eriştik - static tanımlanmamış)
islem.topla(5,5);     //10


const islem2 = new Matematik()  // (Nesne üzerinden erişemedik - static olarak tanımlanmış)
islem2.bol(5,5);      //Hata


Matematik.bol(10,2);  //5       // (Sınıf isminden eriştik - static olarak tanımlanmış)
   


