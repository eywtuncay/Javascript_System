

// let not=50;

// if(not>=50){
//     console.log("geçtiniz, notunuz: "+not);
// }else
// {
//     console.log("kaldınız, notunuz: "+not);
// }


// let yas = Number( prompt("Yaşınız?"));
// console.log(typeof yas);


// ---------------- Ders Ortalaması Bulma ----------------

// Vize1 %30,  Vize2 %30,  Final %40,  ---  Geçme notu = 60


// let vize1 = Number(prompt("Vize 1 notunuzu giriniz?"));
// let vize2 = Number(prompt("Vize 2 notunuzu giriniz?"));
// let final = Number(prompt("Final notunuzu giriniz?"));

// let sonuc = (vize1*0.3)+(vize2*0.3)+(final*0.4);

// if(sonuc >= 60){
//     alert("Tebirkler, Geçtiniz. Notunuz : "+sonuc );
// }else{
//     alert("Kaldınız. Notunuz : "+sonuc );
// }


let vize1 = Number(prompt("Vize 1 notunuzu giriniz?"));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz?"));
let final = Number(prompt("Final notunuzu giriniz?"));

let sonuc = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);
let harfNotu = "";
let gecmeDurumu = "";

switch (true) {
    case (sonuc >= 88 && sonuc <= 100):
        harfNotu = "AA";
        gecmeDurumu = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 80 && sonuc <= 87):
        harfNotu = "BA";
        gecmeDurumu = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 73 && sonuc <= 79):
        harfNotu = "BB";
        gecmeDurumu = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 66 && sonuc <= 72):
        harfNotu = "CB";
        gecmeDurumu = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 60 && sonuc <= 65):
        harfNotu = "CC";
        gecmeDurumu = "Tebrikler, Geçtiniz.";
        break;
    case (sonuc >= 55 && sonuc <= 59):
        harfNotu = "DC";
        gecmeDurumu = "Şartlı Geçtiniz.";
        break;
    case (sonuc >= 50 && sonuc <= 54):
        harfNotu = "DD";
        gecmeDurumu = "Kaldınız.";
        break;
    case (sonuc >= 0 && sonuc <= 49):
        harfNotu = "FF";
        gecmeDurumu = "Kaldınız.";
        break;
    default:
        harfNotu = "Geçersiz Not";
        gecmeDurumu = "";
}

alert("Notunuz: " + sonuc.toFixed(2) + " (" + harfNotu + "). " + gecmeDurumu);


