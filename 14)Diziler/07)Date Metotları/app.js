// DATE Kullanımı

// let tarih = new Date(1999, 08, 07, 10, 40, 50);
// Belirtilen tarih ve saatle yeni bir Date nesnesi oluşturur.

// let tarih = new Date();
// console.log(tarih.toString());
// console.log(typeof tarih.toString());
// console.log(tarih);
// Mevcut tarih ve saatle yeni bir Date nesnesi oluşturur.

console.log(tarih.getFullYear()); 
// Yılı döndürür.

console.log(tarih.getDate()); 
// Ayın gününü döndürür.

console.log(tarih.getDay()); 
// Haftanın gününü (0-6 arası, Pazar 0) döndürür.

console.log(tarih.getHours()); 
// Saat bilgisini döndürür.

console.log(tarih.getMilliseconds()); 
// Milisaniye bilgisini döndürür.

console.log(tarih.getMinutes()); 
// Dakika bilgisini döndürür.

console.log(tarih.getMonth() + 1); 
// Ayı (0-11 arası) döndürür, bu yüzden +1 ekleriz.

console.log(tarih.getSeconds()); 
// Saniye bilgisini döndürür.

console.log(tarih.toLocaleDateString()); 
// Yerel tarih formatında string döndürür.

console.log(tarih.toLocaleTimeString()); 
// Yerel saat formatında string döndürür.

console.log(tarih.toLocaleString()); 
// Yerel tarih ve saat formatında string döndürür.

// SET METOTLARI

// console.log(tarih);

// tarih.setHours(15);
// Saat bilgisini ayarlar.

// tarih.setDate(24);
// Ayın gününü ayarlar.

// tarih.setMonth(11);
// Ayı ayarlar (0-11 arası).

// tarih.setMinutes(50);
// Dakika bilgisini ayarlar.

tarih.setHours(tarih.getHours() + 2);
// Saat bilgisini belirtilen kadar artırır.

console.log(tarih);
