// Mouse Eventleri - Event Listener


const clearButton = document.querySelector("#todoClearButton");


clearButton.addEventListener("click",changeTitle);



function changeTitle(e){
    document.querySelectorAll(".card-title")[0].textContent = "TODO Başlığı Değişti";

    console.log(e.type);
    console.log(e.target);
    console.log(e.target.textContent);
    console.log(e.target.className);
}






