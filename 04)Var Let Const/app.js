// VAR - LET - CONST


/* 

------- VAR -------
var ile tanımlanan değişkenler Function Scope olur.
Block içinde tanımlansa dahi Function içinde her yerden erişebilirim.
Ram bellekte çok fazla yer kaplar.
Aynı isimde iki farklı değişken oluşturabilirim. Atadığım son değer değişkenin değeri olur.

*/

function selamVer(){

    var selam = "Herkese Selam!";   // function scope

    if(true){
        var b = 5;  // Block Scope olması gerekiyor fakar var ile tanımladığım için Function Scop gibi davranıyor. Fonksiyon içinden erişebilirim.
    }
    console.log(b);
    console.log(selam);
}
selamVer();




/* 

------- LET - CONST -------
Block Scope özelliğine sahiptirler.
Aynı isimde iki farklı değişken oluşturamam.

*/

function selamVer2(){

    let selam = "Herkese Selam!";   // function scope

    if(true){
        let c = 5;          // block scope. Sadece if içinden erişebilirim.
        console.log(c);
    }
    console.log(selam);
}
selamVer2();




/* 

------- LET ve CONST arasındaki fark -------

--> CONST (CONSTANT) : sabit, değişmez.
    const ile oluşturduğum değişkenin değerini değiştiremem.
    tanımladıgım bir obejenin içindeki değerleri değiştirebilirim fakat yeni bir değer ekleyemem.

--> LET ile oluşturduğum değişkenin değerini değiştirebilirim.

*/


  const a = 5;
//a = 10;           // izin vermez.
  console.log(a);


let b = 5;
b = 10;
b = 15;
console.log(b);



