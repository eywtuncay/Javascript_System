/*

JavaScript'te Map türü, anahtar/değer çiftlerini saklamanızı sağlayan yerleşik bir veri yapısıdır. Map, nesnelere benzer şekilde çalışır, ancak bazı önemli farklılıkları vardır:

1) Anahtarlar herhangi bir veri türü olabilir (objeler dahil).
2) Eklediğiniz öğelerin eklenme sırasını hatırlar.
3) Nesnelere göre daha kullanışlı ve esnek bir API sağlar.


*/


// --- Map Oluşturma ---

let map = new Map();


// Değer Ekleme
// set yöntemi kullanılarak anahtar/değer çiftleri eklenir:
map.set('name', 'Tuncay');
map.set('age', 23);



// Değer Okuma
// get yöntemi kullanılarak bir anahtara karşılık gelen değer alınır:
let name = map.get('name'); // 'Tuncay'
let age = map.get('age');   // 23



// Değer Silme
// delete yöntemi kullanılarak bir anahtar/değer çifti silinebilir:
map.delete('name');



// Tüm Değerleri Temizleme
// clear yöntemi tüm anahtar/değer çiftlerini temizler:
map.clear();


// Anahtar ve Değer Kontrolü
// has yöntemi, belirli bir anahtarın var olup olmadığını kontrol eder:
let hasName = map.has('surname'); // false



// Map Boyutunu Öğrenme
// size özelliği, Map'in kaç anahtar/değer çifti içerdiğini döner:
let size = map.size; // 2



// --- Map Üzerinde Dolaşma ---
// Map üzerinde döngü yapmak için çeşitli yöntemler kullanılabilir. İşte bazıları:


// for...of Döngüsü
let map1 = new Map();
map.set('name', 'Tuncay');
map.set('age', 22);

for (let [key, value] of map1) {
    console.log(`${key}: ${value}`);
}
// Çıktı:
// name: Tuncay
// age: 23



// forEach Yöntemi
map1.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Çıktı:
// name: Tuncay
// age: 23



// Anahtarlar Üzerinde Döngü
// keys yöntemi kullanılarak sadece anahtarlar üzerinde döngü yapılabilir:
for (let key of map1.keys()) {
    console.log(key);
}
// Çıktı:
// name
// age



// Değerler Üzerinde Döngü
// values yöntemi kullanılarak sadece değerler üzerinde döngü yapılabilir:
for (let value of map1.values()) {
    console.log(value);
}
// Çıktı:
// Tuncay
// 23



// Anahtar/Değer Çiftleri Üzerinde Döngü
// entries yöntemi kullanılarak anahtar/değer çiftleri üzerinde döngü yapılabilir:
for (let [key, value] of map1.entries()) {
    console.log(`${key}: ${value}`);
}
// Çıktı:
// name: Tuncay
// age: 23





