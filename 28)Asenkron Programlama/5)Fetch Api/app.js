
// fetch()  --> geriye promise döner.



function getStundets(url) {                     //studen'ları getiren bir fonksiyon yazıyorum.
    fetch(url)                                  //url'e istek atıyoruz ve response tipinde bir promise dönüyor.
        .then((response) => {                   //gelen response promis'i .then ile yakaladık.
            return response.json();             //gelen response promis'in içindeki değeri .json ile yakaladım.
        })
        .then((data) => console.log(data))      //bir sonraki .then'e göndererek consol'a yazdırdım.
        .catch((err) => console.log(err))       //bir hata olursa da .cach'e gönderdim.

}

getStundets("student.json")                     //fonksiyonu çağırarak url'i veriyorum.





// --- api'den veri çekme ---

function getData(url) {
    fetch(url)
        .then((response) => response.json())    //tek satır olduğu için return varmış gibi kabul eder.
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/todos")





// --- POST ile api'a veri gönderme ---

function addStudent() {
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                "id": 1,
                "firstname": "Tuncay",
                "lastname": "Albayrak"
            },
        )
    })
}








