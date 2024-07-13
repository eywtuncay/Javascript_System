

// Verilen metinde kullanıcdan aldığımız harfin kaç adet olduğunu bul.




let metin = "Şuanda Türkiye'de Javascript öğrenmekteyim.";

let harf = prompt("Lütfen Bir Harf Giriniz : ");

let sonuc = bul(harf);

alert("Harf Sayısı : "+sonuc);

function bul(harf){

    let toplam=0;
    for(let i = 0; i <= metin.length; i++){

        if(metin.charAt(i).toLowerCase() === harf.toLowerCase()){
            toplam+=1;
        }
    }

    return toplam;

}

