import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
//   template: `
//  <input type="button" value="Get Menu" (click)="ShowMenu()">
//  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {

  }

  ShowMenu() {

    const req = this.http.get('../assets/Menu.json').
      subscribe(
        data => {
          console.log(data);
          alert(JSON.stringify(data));
        }
      );



  }





}
