/*

JavaScript'te Template Literals, değişkenleri ve ifadeleri stringler içerisinde kolayca yerleştirmenizi sağlayan, ES6 ile tanıtılmış bir özelliktir.
Template Literals, backtick (``)  işareti (Altgr + 2 kere noktalı vigül) ile tanımlanır ve ${}` süslü parantezler içinde değişkenleri ve ifadeleri yerleştirmenize olanak tanır.
Bu yöntem, string birleştirme işlemlerini daha okunabilir ve yönetilebilir hale getirir.


*/



function writeNameSurname(name,surname){
    console.log(`İsim : ${name}, Soyisim : ${surname}`);
};


writeNameSurname("Tuncay","Albayrak")





function getUserById(userId){
    console.log(`http://localhost:8080/users/${userId}`)
}


getUserById(5)  //5 numaralı id'ye sahip kullanıcıyı getirir.
