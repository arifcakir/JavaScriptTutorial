define(["require", "exports", "./Greet/Greet"], function (require, exports, Greet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Main = (function () {
        function Main() {
        }
        Main.prototype.ShowMessage = function (message) {
            var mygreet = new Greet_1.greet(message);
            console.log(mygreet.GetMessage());
        };
        return Main;
    }());
});
