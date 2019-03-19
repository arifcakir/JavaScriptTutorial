import {common} from "./common";

declare function require(name:string);

var $ = require("../node_modules/jquery");

let myCommon = new common();

console.log("ben content den geliyorum" + myCommon.mesaj);
console.log("aloooooo");


$(document).ready(function(){
    console.log( "ready!" );
    $(".txtYazi").text("merhaba asd asf af AFasf SAFs");
});


