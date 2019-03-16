/* 
observer patternde controller observer dır
view  aynı zamanda observable dır.
controller eventlistener dır
https://medium.com/@patrickackerman/the-observer-pattern-with-vanilla-javascript-8f85ea05eaa8


The State Pattern
https://medium.com/@patrickackerman/the-state-pattern-with-vanilla-javascript-e40ff83e85d0



*/
class Student{
    constructor(studentId,fullName)
    {
    this._studentId=studentId;
    this._fullName=fullName;
    this.studentIdChanged= new Event(this);
    this.studentFullNameChanged = new Event(this);
    }

    get StudentId(){return this._studentId;};
    set StudentId(studentId){
        dispatchEvent(this.studentIdChanged);
        this._studentId=studentId;};

    get FullName(){return this._fullName;};
    set FullName(fullName){
        dispatchEvent(this.studentFullNameChanged);
        this._fullName=fullName;};
}