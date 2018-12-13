function PersonDetail(Person) {
    alert(Person.Name + " ", Person.LastName);
}
function PersonOperation() {
    var myInterFace = { Name: Name, LastName: LastName };
    PersonDetail(myInterFace);
}
var p1 = { x: 10, y: 24 };
p1.x = 5;
