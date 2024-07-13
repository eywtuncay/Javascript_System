//Local Storage Kullanımı

/*

Local storage, web tarayıcılarında kalıcı veri saklamak için kullanılır. Veriler, tarayıcı kapatılsa bile saklanmaya devam eder.
Local storage, belirli bir alan adındaki verileri saklar ve diğer alan adları arasında paylaşılamaz.
Session storage'dan farkı, tarayıcı kapandıktan sonra bile verilerin saklanmaya devam etmesidir.
Veriler String olarak saklanır.

Veri Saklama: localStorage.setItem(key, value)
Veri Alma: localStorage.getItem(key)
Veri Silme: localStorage.removeItem(key)
Tüm Verileri Temizleme: localStorage.clear()


*/


//Değer Ekleme
localStorage.setItem("motion1","Push up");
localStorage.setItem("motion2","Barfix");
localStorage.setItem("motion3","Burpee");
localStorage.setItem("motion4","Squat");


//Değeri Almak
let value = localStorage.getItem("motion1");
console.log(value);

//Değer Silmek
localStorage.removeItem("motion4");

//Tümünü Temizle
localStorage.clear();

localStorage.clear();
let motions = ["Push up","Barfix","Burpee","Squat","Chin Up"];
localStorage.setItem("motions",JSON.stringify(motions));

let value2 =  JSON.parse(localStorage.getItem("motions"));

value.forEach(function(motion){
    console.log(motion);
});
