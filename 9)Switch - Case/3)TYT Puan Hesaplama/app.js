
/*

    ---- SORULAR ----

    Türkçe           40 soru  -- 4 paun
    Matematik        40 soru  -- 4 paun
    Sosyal Bilimler  20 soru  -- 4 paun
    Fen Bilimleri    40 soru  -- 4 paun


    ----> ÖSYM +100 puan veriyor.
    ----> Okul puanı max +60 geliyor.

*/

let türkceDogruSayisi = 0, türkceYanlisSayisi = 0, matDogruSayisi = 0, matYanlisSayisi = 0, sosyalDogruSayisi = 0, sosyalyanlisSayisi = 0, fenDogruSayisi = 0, fenYanlisSayisi = 0;

let yeniSatir = "\r\n";
let metin = "TYT Puan hesaplama sistemine hoşgeldiniz."+yeniSatir+
"1) TYT Puan Hesapla"+yeniSatir+
"2) Çıkış";

secim = Number(prompt(metin));


switch(secim){

    case 1:
        let okulPuani = Number(prompt("Okul puanınızı giriniz : "));

        türkceDogruSayisi = Number(prompt("Türkçe doğru sayısını giriniz : "));
        türkceYanlisSayisi = Number(prompt("Türkçe yanlış sayısını giriniz : "));
        let türkceNetSayisi = (türkceDogruSayisi-(türkceYanlisSayisi/4));
        
        matDogruSayisi = Number(prompt("Matematik doğru sayısını giriniz : "));
        matYanlisSayisi = Number(prompt("Matematik yanlış sayısını giriniz : "));
        let matNetSayisi = (matDogruSayisi-(matYanlisSayisi/4));

        sosyalDogruSayisi = Number(prompt("Sosyal Bilimler doğru sayısını giriniz : "));
        sosyalyanlisSayisi = Number(prompt("Sosyal Bilimler yanlış sayısını giriniz : "));
        let sosyalNetSayisi = (sosyalDogruSayisi-(sosyalyanlisSayisi/4));

        fenDogruSayisi = Number(prompt("Fen Bilimleri doğru sayısını giriniz : "));
        fenYanlisSayisi = Number(prompt("Fen Bilimleri yanlış sayısını giriniz : "));
        let fenNetSayisi = (fenDogruSayisi-(fenYanlisSayisi/4));

        let toplamNetSayisi = (türkceNetSayisi+matNetSayisi+sosyalNetSayisi+fenNetSayisi);

        let puan = (toplamNetSayisi*4)+(100)+(okulPuani); 

        alert ("TYT puanınız : "+puan);
        break;

    case 2:
        alert("Sistemden Çıkış Yapıldı...");
        break;
    
    default:
    alert("Lütfen 1 ya da 2'yi tuşlayınız.");


}


