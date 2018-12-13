interface MyInterface
{
Name: String;
LastName : String;
}

function PersonDetail(Person:MyInterface){

alert(Person.Name + " " Person.LastName);
}


function PersonOperation(){


let myInterFace : MyInterface={Name="dfgfd", LastName="gfdf"};

PersonDetail(myInterFace);


}

//==============================

interface Point{
readonly x:number;
readonly y:number;
}

let p1:Point = {x:10, y:24};
p1.x = 5;