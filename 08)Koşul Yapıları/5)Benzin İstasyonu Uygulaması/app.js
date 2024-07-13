

let bakiye = Number(prompt("Lütfen hesap bakiyenizi giriniz :"));
let yakitTipi = Number(prompt("Lütfen yakıt tipini tuşlayınız; \n 1 - Dizel \n 2 - Benzin \n 3 - LPG "));
let yakitLitresi = Number(prompt("Lütfen yüklenecek yakıt litresini giriniz: "));


dizel = 24.53, benzin = 22.25, lgp = 11.10;
odenecekTutar = 0;


if(yakitTipi==1){
    //DİZEL
    odenecekTutar = yakitLitresi*dizel
    if(bakiye>odenecekTutar){
        alert("Ödenecek Tutar : "+odenecekTutar + "\nKalan Hesap Bakiyesi : " + (bakiye-odenecekTutar));
    }else{
        alert("Hesap Bakiyesi Yetersiz!");
    }
}else if(yakitTipi==2){
    //BENZİN
    odenecekTutar = yakitLitresi*benzin
    if(bakiye>odenecekTutar){
        alert("Ödenecek Tutar : "+odenecekTutar + "\n Kalan Hesap Bakiyesi : " + (bakiye-odenecekTutar));
    }else{
        alert("Hesap Bakiyesi Yetersiz!");
    }
}else if(yakitTipi==3){
    //LPG
    odenecekTutar = yakitLitresi*lgp
    if(bakiye>odenecekTutar){
        alert("Ödenecek Tutar : "+odenecekTutar + "\n Kalan Hesap Bakiyesi : " + (bakiye-odenecekTutar));
    }else{
        alert("Hesap Bakiyesi Yetersiz!");
    }
}else{
    alert("Lütfen Yakıt Tipini Doğru Tuşlayınız.");
}



