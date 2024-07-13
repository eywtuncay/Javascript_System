/*

Promise'ler, JavaScript'te asenkron işlemleri daha yönetilebilir ve okunabilir hale getirmek için kullanılan bir yapıdır. 

Promise, başlangıçta "pending" (beklemede) durumundadır.
Bu durum, işlemin henüz tamamlanmadığını ve sonucunun bilinmediğini gösterir.

İşlem başarıyla tamamlandığında, Promise "resolved" (çözüldü) durumuna geçer ve işlenmiş veriyi döner. (.then ile yakalarız)
Eğer bir hata oluşursa, Promise "rejected" (reddedildi) durumuna geçer ve hatayı işleriz. (.catch ile yakalarız.)

*/

let check = true;
const promise1 = new Promise((resolve, reject) => {

    if(check){
        resolve("Promise Başarılı.")
    }else{
        reject("Promise Başarısız.")
    }
}) 

console.log(promise1);







let check2 = true;

function createPromise(){
    return new Promise((resolve,reject) => {
        if(check2){
            resolve("Promiste bir problem yok.");
        }else{
            reject("Problem var.");
        }
    })
}

createPromise()
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
})
.finally(()=> {console.log("Her zaman çalışır.")})





// --- PROMİSE + XMLHttpRequest --> json dosyasından okuma --- 

function readStudent(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET",url);
        xhr.send();

    })
}

readStudent("student.json")
.then((data)=> console.log(data))
.catch((err)=> console.log(err))







// --- APİ'DEN PROMİSE İLE VERİ ALMA --> Kullanıcıları yazdırma. --- 

function getUsers(url) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })

        xhr.open("GET",url);
        xhr.send();
    })
}


getUsers("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    console.log(data);
    console.log("Burada daha sonra farklı asenktron kodlar da çalıştırılabilir")

    data.forEach(userName => {  //Kullanıcıların isimlerini yazdırma.
        console.log(userName);
    });


})
.catch((err) => console.log(err))
.finally("Bu her zaman çalışır.")







// APİ'DEN PROMİSE İLE VERİ ALMA --> Id'si 3 olan kullanıcının yorumunu getirme.

function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url);
        xhr.send();
    })
}


function getCommentsByUserID(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url);
        xhr.send();
    })
}


getUsers("https://jsonplaceholder.typicode.com/users/3")
    .then((data) => {
        console.log(data);
        return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
    })
    .then((res)=>console.log(res))
    .catch((err) => console.log(err))
    .finally("Bu her zaman çalışır.")






// --- Promise.all ---
// dizi halinde verilen tüm promislerden hepsi resault ise then'e girer ve bir dizi olarak bize verir.
// biri bile hatalıysa catch'e girer.


const p1 = Promise.resolve("Birinci promise başarılı.");
const p2 = Promise.resolve("İkinci promise başarılı.");
const p3 = new Promise((resolve, reject) => {
    resolve("Üçüncü promise başarılı.")
})
const p4 = Promise.reject("Hata var!");

Promise.all([p1,p2,p3,p4])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
