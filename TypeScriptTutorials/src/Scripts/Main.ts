import { greet } from "./Greet/Greet"
class Main {


    constructor() {



    }

    ShowMessage(message: string) {

        var mygreet = new greet(message);

        console.log(mygreet.GetMessage());


    }


}


