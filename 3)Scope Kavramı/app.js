/* 
    ---------- SCOPE (KAPSAM) ----------

    1) Global Scope     : Her yerden erişilebilirim. Herhangi bir parantez içinde tanımlanmamalı.
    2) Function Scope   : Fonksiyon içinde tanımlanan değişkene sadece fonksiyon içinde erişebilirim.
    3) Block Scope      : Blok içinde tanımlanan değişkene sadece blok içinde erişebilirim.

*/



// ---------- GLOBAL SCOPE ----------

var a = 5;  // global scope --> a değişkenine her yerden erişebilirim.





// ---------- FUNCTION SCOPE ----------

function method1(){
    var sayi = 1;       // function scope --> sadece fonksiyonun içinden erişebilirim.
    console.log(sayi);
}
method1();




// ---------- BLOCK SCOPE ----------

function method2(){
    var a = 5;         // function scope

    if(true){
        var b = 5;     // block scope --> sadece if bloku içinden erişebilirim.
    }
    while(true){
        var c = 5;     // block scope
    }
}
method2();

