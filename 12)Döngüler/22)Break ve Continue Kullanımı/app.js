
/*

JavaScript'te döngülerde break ve continue ifadeleri, döngünün akışını kontrol etmek için kullanılır. Bu ifadeler, döngü içindeki belirli koşullara bağlı olarak döngüyü sonlandırmak veya belirli bir döngü iterasyonunu atlamak için kullanılır.

--- BREAK İfadesi ---
break ifadesi, içinde bulunduğu döngüyü anında sonlandırır ve döngüden çıkar. Döngüden çıktıktan sonra, döngüden sonraki ilk kod satırı yürütülür.

--- CONTINUE İfadesi ---
continue ifadesi, içinde bulunduğu döngünün mevcut iterasyonunu sonlandırır ve döngünün bir sonraki iterasyonuna geçer. Döngünün geri kalan kodu atlanır ve döngü koşulu tekrar kontrol edilir.

*/




// 1 den 10'a kadar sayıları yazdıralım 8'e geldiğimizde döngüden çıkalım.

// let sayac = 1;

// while(sayac<=10){

//     console.log(sayac);
    
//     if(sayac==8){
//         break;
//     }
    
//     sayac++;
// }




// Continue kullanarak 1 2 3 4 6 7 9 10 şeklinde bir çıktı üret.

let sayac2 = 0;

while(sayac2<=10){
    
    sayac2++;
    if(sayac2>10){
        break;
    }
    if(sayac2==5){
        continue;
    }
    console.log(sayac2);

}