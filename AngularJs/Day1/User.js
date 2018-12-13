var User = /** @class */ (function () {
    function User(Name, LastName) {
        this._ad = Name;
        this._lastName = LastName;
    }
    return User;
}());
var UserOperations = /** @class */ (function () {
    function UserOperations() {
    }
    return UserOperations;
}());
function SayHello(Name, LastName) {
    var user = new User(Name, LastName);
    alert(user._ad + " " + user._lastName);
}
