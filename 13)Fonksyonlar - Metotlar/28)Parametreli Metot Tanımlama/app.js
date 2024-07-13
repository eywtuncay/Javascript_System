
// PARAMETRELİ METOT TANIMLAMA.



// İsim soyisim yazdıran metot.

function isimSoyisimYasYazdirma(isim,soyisim,yas){

    console.log("Merhaba");
    console.log(isim);
    console.log(soyisim);
    console.log(yas);

}


isimSoyisimYasYazdirma("Tuncay","Albayrak",23);
isimSoyisimYasYazdirma("Onur","Albayrak",25);





// Verilen sayının küpünü alan metot.

function küpAlma(sayi){
    console.log(sayi*sayi*sayi)
};


küpAlma(5);
küpAlma(3);




// Kullanıcının verdiği yaş değerine göre ehliyet alıp alamadığını kontrol eden metot

function ehliyetAlabilirmi(yas){

    if(yas >= 18){
        console.log("Ehliyet Alabilirsiniz.");
    }else{
        console.log("Ehliyet Alamazsınız..");
    }

}

ehliyetAlabilirmi(yas=prompt("Yaşınızı giriniz:"));