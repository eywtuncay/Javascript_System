
/*

Arrow functionlar, JavaScript'te daha kısa ve okunabilir bir şekilde fonksiyon tanımlamak için kullanılır. Geleneksel fonksiyon ifadelerine göre bazı avantajları ve farklılıkları vardır. 

*/


// --- TEMEL KULLANIM ---

// Geleneksel fonksiyon
function toplama(a, b) {
    return a + b;
}

// Arrow function
const toplama = (a, b) => {
    return a + b;
};

const yazdir = () => {
    console.log("merhaba");
}


// Daha da kısaltılmış hali (tek satırlık gövde)
const toplama = (a, b) => a + b;




// --- TEK PARAMETRELİ FONKSİYON ---
//Tek bir parametre alıyorsa, parantezleri de atlayabilirsiniz.

// Geleneksel fonksiyon
function karesi(x) {
    return x * x;
}

// Arrow function
const karesi = x => x * x;

const isimYazdir = isim => console.log("Merhaba",isim);
isimYazdir("Tuncay");



// --- PARAMETRE OLMAYAN FONKSİYON ---
//Hiç parametre almayan bir fonksiyon tanımlarken, parantezler gereklidir.

// Geleneksel fonksiyon
function merhaba() {
    return 'Merhaba!';
}

// Arrow function
const merhaba = () => 'Merhaba!';




// --- NESNE DÖNDÜREN FONKSİYON ---
//Bir nesne döndürecekseniz, parantez içine almanız gerekir.

// Geleneksel fonksiyon
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

// Arrow function
const createPerson = (name, age) => ({
    name: name,
    age: age
});


