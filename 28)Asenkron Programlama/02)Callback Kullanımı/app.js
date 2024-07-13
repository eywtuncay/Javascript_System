/*

JavaScript'te callback fonksiyonları, bir işlevin tamamlanmasından sonra çağrılmak üzere başka bir işlevin parametre olarak geçtiği işlevlerdir. Callback'ler, özellikle asenkron işlemler yaparken kullanılır.

Bir fonksiyonu başka bir fonksiyona parametre olarak verip senkron yapıyı asenkrona çeviririz.

*/


function getName(callback) {
    setTimeout(() => {
        //servisten ismimi getirdi.
        let name = "Tuncay"; //Web servisten geldi.
        callback(name);      //İsmi callback fonksiyonuna geçir.
    }, 1000);
}


function getSurname(name, callback) {
    setTimeout(() => {
        let surname = "Albayrak"; //name 'e göre soyismi buldu.
        callback(surname)         //Soyismi callback fonksiyonuna geçir.
    }, 500);
}


function getAge(name, surname, callback) {
    setTimeout(() => {
        let age = 23;   //ismi Tuncay ve Soyisimi Albayrak olanın servisten yaşını getirdi.
        callback(age);  //Yaşı callback fonksiyonuna geçir.
    }, 300);
}


// İsmi al, sonra soyismi al, sonra yaşı al ve hepsini yazdır.

getName((name) => {

    // getName fonksiyonu tamamlandığında çalışacak callback fonksiyonu
    getSurname(name, (surname) => {

        // getSurname fonksiyonu tamamlandığında çalışacak callback fonksiyonu
        getAge(name, surname, (age) => {
            
            // getAge fonksiyonu tamamlandığında çalışacak callback fonksiyonu
            console.log(name, surname, age); // Sonuçları yazdır.
        });
    });
});

// Tuncay Albayrak 23

