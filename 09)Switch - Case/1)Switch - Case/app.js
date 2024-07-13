



let metin = "Hangi günde olduğunuzu göstermek için lütfen bir değer seçiniz;\n 1 - Pazartesi \n 2 - Salı \n 3 - Çarşamba \n 4 - Perşembe \n 5 - Cuma \n 6 - Cumartesi \n 7 - Pazar ";

let deger = prompt(metin);

switch (deger) {
    case "1":
        alert("Bu gün günlerden Pazartesi");
        break;
    case "2":
        alert("Bu gün günlerden Salı");
        break;
    case "3":
        alert("Bu gün günlerden Çarşamba");
        break;
    case "4":
        alert("Bu gün günlerden Perşembe");
        break;
    case "5":
        alert("Bu gün günlerden Cuma");
        break;
    case "6":
        alert("Bu gün günlerden Cumartesi");
        break;
    case "7":
        alert("Bu gün günlerden Pazar");
        break;
    default:
        alert("Lütfen 1 - 7 arasında bir tuşlama yapınız.");
        break;
}
