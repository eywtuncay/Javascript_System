/*

JavaScript'te senkron ve asenkron çalışma mantığı, kodun yürütülme sırasını ve zamanlamasını nasıl yönettiğini belirler.


 --- SENKRON ÇALIŞMA ---
Senkron çalışma, kodun satır satır yukarıdan aşağıya doğru yürütüldüğü ve her bir işlemin tamamlanmasının ardından bir sonraki işlemin başladığı bir modeldir. Senkron kod yürütülürken, bir işlem tamamlanana kadar sonraki işlemler bekletilir.


 --- ASENKRON ÇALIŞMA ---
Asenkron çalışma, kodun bazı işlemlerinin tamamlanmasını beklemeden diğer işlemlere devam etmesine olanak tanır. Bu, özellikle I/O işlemleri (örneğin, ağ istekleri, dosya okuma/yazma) gibi zaman alıcı işlemlerde kullanışlıdır. Asenkron işlemler tamamlandığında, belirli geri çağırma fonksiyonları (callback) veya Promise veya async & await yapıları ile sonuçlar işlenir.


JavaScript'te senkron ve asenkron kodlar bir arada yazıldığında, çalışma sırası JavaScript'in olay döngüsü (event loop) tarafından belirlenir. Olay döngüsü, senkron kodları hemen çalıştırır ve ardından asenkron işlemleri sıraya koyar. Bu nedenle, senkron kodlar her zaman asenkron kodlardan önce çalıştırılır.

- Javascript senkron(sırayla) çalışan bir programlama dilidir.

- Javascript bazı durumlarda asenkron çalışır;
    1)Timing işlemleri
    2)Event(olay)
    3)Http istekleri

*/

console.log("Tuncay")

setTimeout(() => {
    console.log("1000ms bekledi ve çalıştı.")
}, 1000);

setTimeout(() => {
    console.log("500ms bekledi ve çalıştı.")
}, 500);

setTimeout(() => {
    console.log("750ms bekledi ve çalıştı.")
}, 750);

console.log("Albayrak")


/*

Çıktı;

Tuncay
Albayrak
500ms bekledi ve çalıştı.
7500ms bekledi ve çalıştı.
1000ms bekledi ve çalıştı.

*/

