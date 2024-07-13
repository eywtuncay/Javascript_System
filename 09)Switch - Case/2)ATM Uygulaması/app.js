
let bakiye = 1000;

let yeniSatir = "\r\n";

let metin = "Lütfen Yapmak İstediğiniz işlemi tuşlayınız : " +yeniSatir +
"1) Bakiye Görüntüleme"+yeniSatir+
"2) Para Çekme"+yeniSatir+
"3) Para Yatırma"+yeniSatir+
"4) Çıkış";


let secim = prompt(metin);


switch (secim){

    case "1":   //Bakiye görüntüleme
        alert("Hesap Bakiyeniz : "+bakiye);
        break;

    case "2":   //Para çekme
        let cekilecekTutar = Number(prompt("Çekilecek Tutarı Giriniz : "));
        if(cekilecekTutar>bakiye){
            alert("Hesap Bakiyesi Yetersiz."+yeniSatir+
            "Bakiye : "+bakiye+yeniSatir+
            "Çekilecek Tutar : "+cekilecekTutar);
        }else{
            alert("Çekilen Tutar : "+cekilecekTutar+yeniSatir+
                "Kalan Hesap Bakiyesi : "+(bakiye-cekilecekTutar)
            );
        }
        break;

    case "3":   //Para yatırma
        let yatirilacakTutar = Number(prompt("Yatırılacak Tutarı Giriniz: "));
        alert ("Hesap Bakiyesi"+" "+(bakiye+yatirilacakTutar));
        break;

    case "4":   //Çıkış
        alert("Sistemden Çıkış Yapılmıştır...");
        break;

    default:
        alert("Lütfen 1 - 4 arasında tuşlama yapınız.");
        break;

}

