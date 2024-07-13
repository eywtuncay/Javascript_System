/*

Sınıf Tanımlama ve Yapıcı Metot Kullanımı
Temel Sınıf Tanımlama

Bir sınıf tanımlamak için class anahtar kelimesini kullanabilirsiniz.
Sınıfın içinde constructor adlı özel bir metod tanımlayarak yapıcı metot oluşturabilirsiniz.
Bu metot, yeni bir nesne oluşturulduğunda otomatik olarak çağrılır ve genellikle nesnenin başlangıç durumunu ayarlamak için kullanılır.

Bir sınıfı içerisinde,
1-Özellikler
2-Yapıcı metot
3-Function
bulunur.

Bir sınıfın içindekilere erişmek istiyorsak o sınıftan nesne türetmeliyiz.


*/



class Insan{    // Sınıf
    
    constructor(isim,soyisim,yas,maas){      // Yapıcı metot
        this.isim=isim;
        this.soyisim=soyisim;
        this.yas=yas;
        this.maas=maas;
    }

    bilgileriGoster(){    // Sınıfa ait bir metot tanımlıyorum.
        console.log(`İsim : ${this.isim}, Soyisim : ${this.soyisim}, Yaş : ${this.yas}, Maaş : ${this.maas}`)
    }

}


// Nesne Türetmek/Oluşturmak.
const insan1 = new Insan("Tuncay","Albayrak",23,20000); //constructor çalışacağı için içeriğini dolduruyorum.
insan1.bilgileriGoster();


const insan2 = new Insan("Enes","Bayar",23,20000);
insan2.bilgileriGoster();


console.log(insan1.isim);


