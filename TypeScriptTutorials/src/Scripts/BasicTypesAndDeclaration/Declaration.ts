var globalvara = "Global Variable A";
let globalvarb = "global Variable B"


//we need to simulate javascript window object to declare a new property on the Window object with Typescript.
//source: https://ourcodeworld.com/articles/read/337/how-to-declare-a-new-property-on-the-window-object-with-typescript
interface Window {

    globalvara: string;
    globalvarb: string;

};


function firstFunction() {


    var localvara = "Local Variable A";
    console.log(globalvara);

    console.log(globalvarb);


    //var works
    window.globalvara = globalvara;
    //let doesn't work here
    window.globalvarb = globalvarb;


    console.log(window.globalvara);
    console.log(window.globalvarb);

}

function secondFunction() {


    //scope of index is just in for
    //index variable is only visible in for blocks
    for (let index = 0; index < 10; index++) {
        console.log(index);
    }

    //index variable is visible in for and aldo function blocks
    for (var j = 11; j < 20; j++) {

        console.log(j);

    }

    //writes on console 19
    console.log(j);

}