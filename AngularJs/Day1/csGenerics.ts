class Live{
    Name:string;
}

class Human extends Live{

    Gender: string;
}

class Animal extends Live{

    Gender: string;
}


//burada aslında daha çok fonksiyonlarda generik leri kullanmak lazım.
class Monitor<T> {
    listT:Array<T>;
constructor(){
}
Add(T)
{
this.listT.push(T);
}

}


//Fonksiyonlarda generic kullanımı

function showName<T>(arg:T){



    
}






//advance örnek
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

function testcreateInstance(){

createInstance(Human);

}


