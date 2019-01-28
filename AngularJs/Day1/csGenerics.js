var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Live = /** @class */ (function () {
    function Live() {
    }
    return Live;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Human;
}(Live));
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Animal;
}(Live));
//burada aslında daha çok fonksiyonlarda generik leri kullanmak lazım.
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.Add = function (T) {
        this.listT.push(T);
    };
    return Monitor;
}());
//Fonksiyonlarda generic kullanımı
function showName(arg) {
}
//advance örnek
function createInstance(c) {
    return new c();
}
function testcreateInstance() {
    createInstance(Human);
}
