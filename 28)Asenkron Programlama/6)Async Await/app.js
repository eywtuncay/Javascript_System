/*

async ve await, JavaScript'te asenkron işlemleri daha okunabilir ve yönetilebilir hale getirmek için kullanılan anahtar kelimelerdir. async fonksiyonlar, asenkron kodu yazarken .then() ve .catch() yerine daha doğal bir yapı sağlar.

*/


//THEN YAPISI İLE;
function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

getData();



//ASYNC YAPISI İLE;
async function getData() {
    // fonksiyonu async anahtar kelimesiyle tanımlıyoruz. Bu, fonksiyonun asenkron olduğunu ve bir Promise döneceğini belirtir.

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        //await anahtar kelimesi, fetch fonksiyonunun tamamlanmasını bekler. fetch bir Promise döner, await bu Promisein çözülmesini bekler ve çözülmüş değeri response değişkenine atar.

        const data = await response.json();
        //response.json() da bir Promise döner. await bu Promisein çözülmesini bekler ve JSON formatındaki veriyi data değişkenine atar.

        console.log(data);
        //JSON verisini konsola yazdırırız.

    } catch (error) {
        console.error('Error:', error);
    }
}

getData();




//DAHA KISALTILMIŞ BİR KULLANIM ÖRNEĞİ;
async function getPost() {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(post, comments)
}

getPost();





