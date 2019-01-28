class Animal{
Name:string;
Type:string;
}
class Lion extends Animal{
Age:number;
}


Operation()
{
let animal = new Animal();
alert(animal.Name + " " + animal.Type);
let lion = new Lion();
alert(lion.Name + " " + lion.Type +" " + lion.Age);

}
