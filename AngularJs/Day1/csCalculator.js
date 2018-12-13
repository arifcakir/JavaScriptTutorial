var enOperators;
(function (enOperators) {
    enOperators[enOperators["Sum"] = 0] = "Sum";
    enOperators[enOperators["Multiply"] = 1] = "Multiply";
    enOperators[enOperators["Devide"] = 2] = "Devide";
    enOperators[enOperators["Subtraction"] = 3] = "Subtraction";
})(enOperators || (enOperators = {}));
var csCalculator = /** @class */ (function () {
    function csCalculator(num1, num2) {
        this._Num1 = num1;
        this._Num2 = num2;
    }
    csCalculator.prototype.csCalculate = function (operators) {
        if (operators == enOperators.Sum) {
            this._Result = this._Num1 + this._Num2;
        }
        else if (operators == enOperators.Subtraction) {
            this._Result = this._Num1 - this._Num2;
        }
        else if (operators == enOperators.Multiply) {
            this._Result = this._Num1 * this._Num2;
        }
        else {
            this._Result = this._Num1 / this._Num2;
        }
        return this._Result;
    };
    ;
    return csCalculator;
}());
