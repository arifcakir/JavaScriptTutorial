//string 
var StringVariable = "this is a text";
//number
var NumberVariable = 4;
var NumberVariable2 = 0xABC9;
var NumberVariable3 = 123.45;
//Boolean 
var BoolVariable = true;
//array
var NumberArray = [1, 2, 3, 3];
//list
var NumberList = [1, 2, 3, 4];
//tuple
var MixTuple;
MixTuple = ["hello", 10];
//Enum
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
//Any
var AnyVariable;
AnyVariable = true;
AnyVariable = "merhaba";
//Null vs Undefined
//The undefined value is a primitive value used when a variable has not been assigned a value.
//The null value is a primitive value that represents the null, empty, or non-existent reference.
var NullVariable;
NullVariable = null;
NullVariable = undefined;
