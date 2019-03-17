define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var greet = (function () {
        function greet(message) {
            this.greeting = message;
            console.log("Constructure oluşturuldu");
        }
        greet.prototype.GetMessage = function () {
            return this.greeting;
        };
        return greet;
    }());
    exports.greet = greet;
});
