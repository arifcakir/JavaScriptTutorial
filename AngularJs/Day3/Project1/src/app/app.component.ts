import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 

myValue: string= "Murat Cabuk";

constructor(){

console.log("AppComponent Oluşturuldu");

}

}
