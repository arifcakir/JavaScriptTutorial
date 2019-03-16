/* 
observer patternde controller observer dır
view  aynı zamanda observable dır.
controller eventlistener dır
https://medium.com/@patrickackerman/the-observer-pattern-with-vanilla-javascript-8f85ea05eaa8

The State Pattern
https://medium.com/@patrickackerman/the-state-pattern-with-vanilla-javascript-e40ff83e85d0
*/


class StudentListModel{
    constructor(studentList){
        this._studentList=studentList;
        this.itemAdded = new Event(this);
        this.itemRemoved = new Event(this);
        this.selectedIndexChanged = new Event(this);
        this.listChanged = new Event(this);

        this._observersForAdd = [];
        this._observersForRemove = [];
        this._observersForListChanged = [];
    }

    get StudentList(){return this._studentList;
}

set StudentList(studentList){
    this._studentList=studentList;

    dispatchEvent(this.listChanged);

    this._observersForListChanged = [];




}

Add(student){
    this._studentList.push(student);

    //burası eventi dinleyenlere lazım yani (pull) observer pull yapar lazım olanı
    dispatchEvent(this.itemAdded);


    //burası observable a yani liste değişliklipine subscribe olanlar için lazım (push)
    this.notifyAllObserversForAdd();


}

Remove(index){
    student = this._studentList[i];
    this._studentList.splice(index,1);
    dispatchEvent(this.itemRemoved);


    this.notifyAllObserversForRemove();
}




/**Observer pattern implementation */
subscribeToObservableForAdd(observer) {
    this._observersForAdd.push(observer);
}

unsubscribeFromObservableForAdd(observer) {
    this._observersForAdd = this._observersForAdd.filter((subscriber) => subscriber !== observer);
}

notifyAllObserversForAdd(){
    this._observersForAdd.forEach(function(observer){
      observer.updateList();
    })
  }






subscribeToObservableForRemove(observer) {
    this._observersForRemove.push(observer);
}

unsubscribeFromObservableForRemove(observer) {
    this._observersForRemove = this._observersForRemove.filter((subscriber) => subscriber !== observer);
}

notifyAllObserversForRemove(){
    this._observersForRemove.forEach(function(observer){
      observer.updateList();
    })
}







subscribeToObservableForListChanged(observer) {
    this._observersForListChanged.push(observer);
}

unsubscribeFromObservableForListChanged(observer) {
    this._observersForListChanged = this._observersForListChanged.filter((subscriber) => subscriber !== observer);
}

notifyAllObserversForListChanged(){
    this._observersForListChanged.forEach(function(observer){
      observer.updateList();
    })
}






















}