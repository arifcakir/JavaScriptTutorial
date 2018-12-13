var Operators;
(function (Operators) {
    Operators[Operators["Sum"] = 0] = "Sum";
    Operators[Operators["Multiply"] = 1] = "Multiply";
    Operators[Operators["Devide"] = 2] = "Devide";
    Operators[Operators["Subtraction"] = 3] = "Subtraction";
})(Operators || (Operators = {}));
var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this._Num1 = num1;
        this._Num2 = num2;
    }
    return Calculator;
}());
function Calculate(operators) {
    if (operators == Operators.Sum) {
        this._Result = this._Num1 + this._Num2;
    }
    else if (operators == Operators.Subtraction) {
        this._Result = this._Num1 - this._Num2;
    }
    else if (operators == Operators.Multiply) {
        this._Result = this._Num1 * this._Num2;
    }
    else {
        this._Result = this._Num1 / this._Num2;
    }
    return this._Result;
}
