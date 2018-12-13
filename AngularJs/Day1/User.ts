class User{

_ad:string;
_lastName:string;

constructor(Name:string, LastName:string){
this._ad=Name;
this._lastName=LastName;
}

}

class UserOperations{

SayHello(Name:string, LastName:string):void { 
let user=new User(Name, LastName);
alert(user._ad + " " + user._lastName);
}
}