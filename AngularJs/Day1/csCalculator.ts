
enum enOperators { Sum, Multiply, Devide, Subtraction }

class csCalculator {

    _Result: number;
    _Num1: number;
    _Num2: number;

    constructor(num1: number, num2: number) {
        this._Num1 = num1;
        this._Num2 = num2;
    }
    
    csCalculate(operators: enOperators): number {


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
}
