// Session Storage Kullanımı

/*

Session storage, bir tarayıcıda geçici olarak veri depolamak için kullanılır. Bir oturumun ömrü boyunca (sayfa kapatılana kadar) verileri saklar.
Sayfa yeniden yüklendiğinde veya bir kullanıcı başka bir sekmede sayfayı açtığında bile veri mevcuttur.
Ancak tarayıcı kapatıldığında veriler silinir.
String tipinde saklar

Session storage kullanımı için temel adımlar şunlardır:

Veri Ekleme: sessionStorage.setItem(key, value)
Veri Alma: sessionStorage.getItem(key)
Veri Silme: sessionStorage.removeItem(key)
Tüm Verileri Temizleme: sessionStorage.clear()


*/


//Değer Ekleme
sessionStorage.setItem("25","Tuncay");
sessionStorage.setItem("42","Enes")
sessionStorage.setItem("66","Atilla")
sessionStorage.setItem("41","41")


//Değer Silme
sessionStorage.removeItem(25);


//Değer Alma
let value = sessionStorage.getItem(42);


//Session Storage - Array yazdırma
let names = ["Ali","Ayşe","Fatma"];

sessionStorage.setItem("names",JSON.stringify(names));

let isimler = JSON.parse(sessionStorage.getItem("names"));

console.log(isimler);

isimler.forEach(function(isim){
    console.log(isim);
});










