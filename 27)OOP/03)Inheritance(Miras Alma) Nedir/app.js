/*

JavaScript'te kalıtım (inheritance), bir sınıfın başka bir sınıftan özellikleri ve yöntemleri devralmasına olanak tanır. Bu, kodun yeniden kullanılabilirliğini artırır ve daha yapılandırılmış bir kod yazmayı sağlar. JavaScript'te kalıtım extends ve super anahtar kelimeleri kullanılarak gerçekleştirilir.

*/



class Person{

    firstName="Tuncay";
    write(){
        console.log("Person Sınıfındaki Write : ",this.firstName);
    }
}


class Student extends Person{

    write(){
        console.log("Student Sınıfındaki Write : ",this.firstName)  //Değeri person sınıfından alır.
        super.write();     //super ile direkt üst sınıftaki metotu çalıştırabiliriz.
    }

};

const student1 = new Student();
student1.write();



// --- this, super, super() kavramları ---



class Kisiler{

    constructor(firstName, lastName, salary){                      //Yapıcı metotu tanımlıyorum.
        this.firstName=firstName;
        this.lastName=lastName;
        this.salary=salary;
    }

    writeInfo(){
        console.log(this.firstName ,this.lastName ,this.salary)   //Bilgileri ekrana yazdıran metotu yazıyorum.
    }

}


class Ogrenci extends Kisiler{                  // Kisiler sınıfından Ogrenci adından bir metot türetiyorum.

    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)        //Tekrar tanımlamamak için türediği sınıftan miras aldım.
    }

    writeInfo(){
        super.writeInfo();    //Türediği sınıftaki ekrana yazdırma metotunu çağırmak için bir metot daha yazıyorum.
    }
}



class Ogretmen extends Kisiler{

    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }

    writeInfo(){
        super.writeInfo();
    }
}




const ogrenci1 = new Ogrenci("Tuncay","Albayrak",10000);
ogrenci1.writeInfo();

const ogretmen1 = new Ogretmen("Enes","Bayar",15000)
ogretmen1.writeInfo();

