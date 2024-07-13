/*

JavaScript'te destructuring, bir nesne veya diziden değerleri çıkartmak ve bu değerleri ayrı değişkenlere atamak için kullanılan bir sözdizimidir. Bu, kodunuzu daha temiz ve daha okunabilir hale getirebilir.

*/


// --- Dizi Destructuring --- 
// Bir diziden değerleri çıkartmak ve ayrı değişkenlere atamak için kullanılır.


// Diziden değerleri çıkartma
const numbers = [1, 2, 3, 4];

// İlk iki değeri al ve a ve b değişkenlerine ata
const [a, b] = numbers;

console.log(a); // 1
console.log(b); // 2

// İkinci ve üçüncü değeri al ve c ve d değişkenlerine ata
const [, c, d] = numbers;

console.log(c); // 2
console.log(d); // 3




// --- Nesne Destructuring ---
// Bir nesneden değerleri çıkartmak ve ayrı değişkenlere atamak için kullanılır.

// Nesneden değerleri çıkartma
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  // name ve age değerlerini çıkart ve name ve age değişkenlerine ata
  const { name, age } = person;
  
  console.log(name); // John
  console.log(age); // 30
  
  // Değişken isimlerini değiştirme
  const { name: personName, age: personAge } = person;
  
  console.log(personName); // John
  console.log(personAge); // 30
  


