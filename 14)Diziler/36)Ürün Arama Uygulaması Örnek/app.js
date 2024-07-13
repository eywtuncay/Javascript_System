let urun1 = {
    isim : "ACER Swift",
    karegori : "Teknoloji",
    fiyat : 6.219
};

let urun2 = {
    isim : "ACER Nitro 5",
    kategori : "Teknoloji",
    fiyat : 5.864
};

let urun3 = {
    isim : "HP Pavilion",
    kategori : "Teknoloji",
    fiyat : 8.999,
};

let urun4 = {
    isim : "Apple Macbook Pro",
    karegori : "Teknoloji",
    fiyat : 9.999
};

let urun5 = {
    isim : "LENOVO Ideapad",
    karegori : "Teknoloji",
    fiyat : 5.999
};

let urun6 = {
    isim : "LENOVO V14",
    karegori : "Teknoloji",
    fiyat : 5.555
};


let urunler =[urun1,urun2,urun3,urun4,urun5,urun6];
let arananUrun = prompt("Aramak İstediğiniz Ürünü Giriniz.");
let filtreliUrunler = [];


filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);



function filtreliUrunleriDoldur(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(arananUrun.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    })
};

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log(urun.isim+ " | "+ urun.fiyat+ " | "+ urun.karegori );
        console.log("---------------------------------");
    })
};



