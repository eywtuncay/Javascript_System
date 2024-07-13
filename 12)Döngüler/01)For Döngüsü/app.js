
/*

for (başlatma ifadesi; koşul ifadesi; artırma/azaltma ifadesi) {
     Döngü içindeki kodlar
}

Başlatma İfadesi: Döngünün başında bir kez çalıştırılır ve genellikle döngü değişkenini başlatmak için kullanılır.

Koşul İfadesi: Her yinelemenin başında değerlendirilir. Bu ifade true olduğu sürece döngü çalışmaya devam eder, false olduğunda döngü sonlanır.

Artırma/Azaltma İfadesi: Her yinelemenin sonunda çalıştırılır ve genellikle döngü değişkenini artırmak veya azaltmak için kullanılır.

*/



// 1 den 10'a kadar yazdırma.

for(let i = 1; i <= 10; i++){
    console.log(i);
}



// 1 den 10'a kadar çift sayıları yazdırma.

for(let i = 0; i <=10 ; i=i+2){
     console.log(i);
}



// 1 den 10'a kadar tek sayıları yazdırma.

for(let i = 1; i <=10 ; i=i+2){
    console.log(i);
}



// 1 den 10'a kadar çif sayılarda Tuncay tek sayılarda Naber yazdırma.

for(let i=0; i<=10; i++){
    if(i % 2 == 0){
        console.log("Tuncay");
    }else{
        console.log("Naber");
    }
}



// 50 den 1'e kadar geri geri say. toplamlarını bul.

let toplam = 0;

for(let i = 50; i >= 1; i--){
    toplam = toplam + i;
    console.log(i);
}

console.log("Toplam : ", toplam);



 
