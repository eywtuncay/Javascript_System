/*

JavaScript'te Set, benzersiz değerler koleksiyonu tutmanızı sağlayan yerleşik bir veri yapısıdır. Bir Set, aynı değeri birden fazla kez içeremez ve bu özelliği sayesinde, özellikle veri temizleme ve benzersiz öğeler listesi oluşturma işlemleri için kullanışlıdır.

Map ile aynıdır. Tek farklı Set'de bir değer birden fazla kez bulunmaz.


*/

const set = new Set();

//Değer Ekleme (add metodu)

set.add(true)
set.add(3.14)
set.add("Tuncay")
// set.add("Tuncay")
// set.add("Tuncay")
// set.add("Tuncay")
// set.add("Tuncay")
// set.add("Tuncay")
set.add(7)
set.add({username:"tuncay" , password : "1"});
set.add([1,2,3,4])




//Size
// console.log(set.size)


//delete

// set.delete("Tuncay")
// set.delete(7)
// set.delete([1,2,3,4])
// console.log(set.size)


//Has
// console.log(set.has("Ali"))

//For of döngüsü
// for(let value of set){
//     console.log(value)
// }

// const values = Array.from(set);
// values.forEach((value)=>{
//     console.log(value)
// })


//SET DEN ARRAY OLUŞTURMA
// const values = Array.from(set);


//ARRAY DEN SET OLUŞTURMAK
// let array = [1,"Enes",true,"Mustafa",15,[1,2,3]]

// const newSet = new Set(array);
// console.log(newSet)


