var globalvara = "Global Variable A";
var globalvarb = "global Variable B";
;
function firstFunction() {
    var localvara = "Local Variable A";
    console.log(globalvara);
    console.log(globalvarb);
    window.globalvara = globalvara;
    window.globalvarb = globalvarb;
    console.log(window.globalvara);
    console.log(window.globalvarb);
}
function secondFunction() {
    for (var index = 0; index < 10; index++) {
        console.log(index);
    }
    for (var j = 11; j < 20; j++) {
        console.log(j);
    }
    console.log(j);
}
