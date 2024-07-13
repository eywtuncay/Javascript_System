


//Decimal to Binary Conversion (10'luk sayıdan 2'lik sayıya çevirme)



convertDecimalToBinary(25);

function convertDecimalToBinary(number){

    let binary = "";

    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            binary+=1;
            break;  //Artık bölmek yok döngüden çık.
        }
    }
    let result = reverse(binary);
    console.log("Sonuç : "+result);     
}

function reverse(binary){
    let reverseBinary = "";
    for(let i = binary.length-1; i>=0; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}
