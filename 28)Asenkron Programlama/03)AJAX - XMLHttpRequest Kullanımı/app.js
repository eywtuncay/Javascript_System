/*

AJAX Nedir?
AJAX, "Asynchronous JavaScript and XML" ifadesinin kısaltmasıdır ve web sayfasının tamamını yeniden yüklemeden sunucudan veri almak veya sunucuya veri göndermek için kullanılan bir tekniktir. Modern AJAX uygulamalarında genellikle JSON veri formatı kullanılır.


XMLHttpRequest Nedir?
XMLHttpRequest, JavaScript kullanarak HTTP istekleri göndermek ve yanıtları işlemek için kullanılan bir API'dir. Bu API, tarayıcıların web sayfalarının sunucularla iletişim kurmasına olanak tanır.


XMLHttpRequest'in Önemli Özellikleri;

xhr.readyState: İsteğin durumunu gösterir.
0: İstek başlatılmadı.
1: İstek başlatıldı (open çağrıldı).
2: İstek gönderildi (send çağrıldı).
3: İstek işleniyor.
4: İstek tamamlandı.
xhr.status: HTTP yanıt durum kodunu gösterir (ör. 200, 404, 500).
xhr.responseText: Yanıt verilerini içerir.

*/



function prepareURL(url, id) {      // URL'i hazırlıyorum.
    if (id===null) {                // Eğer id null ise, sadece verilen url'yi geri döndürür.
        return url;
    }
    return `${url}?postId=${id}`;   // Eğer id null değilse, URL'ye postId parametresini ekleyerek yeni bir URL oluşturur ve bu URL'yi döndürür.
}

function getComments(url, id) {
    let newURL = prepareURL(url, id);                 // URL'yi hazırla

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{        // İstek durumu değiştiğinde çalışacak fonksiyon.
        if (xhr.readyState===4 && xhr.status===200) {     // İstek tamamlandı ve başarılı olduysa.
            console.log(xhr.responseText);                // Sunucudan gelen yanıtı konsola yazdır.
        }
    })

    xhr.open("GET", newURL);    // AJAX isteğini belirtilen URL'ye gönder.
    xhr.send(); 
}


// Fonksiyonu çağırarak çalıştır.
getComments("https://jsonplaceholder.typicode.com/comments", null);

function getData(url){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET",url)
    xhr.send();
}


getData("https://jsonplaceholder.typicode.com/posts");

