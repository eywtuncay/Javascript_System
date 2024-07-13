
//Beden Kitle Endeksi Hesaplama


let kilo = Number(prompt("Kilonuzu Giriniz : "));

let boy = Number(prompt("Boyunuzu cm Türünde Giriniz (Örnek: 1.75) : "));

let bedenKitleEndeksi = (kilo)/(boy*boy);



if(bedenKitleEndeksi < 18.5){
    alert("İdeal Kilonun Altındasınız. Beden Kitle Endeksiniz: " + bedenKitleEndeksi);
}else if(bedenKitleEndeksi >= 18.5 && bedenKitleEndeksi < 24.9){
    alert("İdeal Kilodasınız. Beden Kitle Endeksiniz: " + bedenKitleEndeksi);
}else if(bedenKitleEndeksi >= 25 && bedenKitleEndeksi < 29.9){
    alert("İdeal Kilonun Üstündesiniz. Beden Kitle Endeksiniz: " + bedenKitleEndeksi);
}else if(bedenKitleEndeksi >= 30 && bedenKitleEndeksi < 39.9){
    alert("İdeal Kilonun Çok Üstündesiniz (Obez). Beden Kitle Endeksiniz: " + bedenKitleEndeksi);
}else if(bedenKitleEndeksi >= 40){
    alert("İdeal Kilonun Çok Üstündesiniz (Morbid Obez). Beden Kitle Endeksiniz: " + bedenKitleEndeksi);
}
