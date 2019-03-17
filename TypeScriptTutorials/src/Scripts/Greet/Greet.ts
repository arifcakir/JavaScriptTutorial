export class greet {

    greeting: string;

    constructor(message: string) {
        this.greeting = message;
        console.log("Constructure oluşturuldu");
    }

    GetMessage() {

        return this.greeting;

    }




}
