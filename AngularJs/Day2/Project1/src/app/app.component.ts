import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*app-people ve app-users app klasörü
  //altındaki people ve user klasörleri altındaki component.ts lerde
  tanımlı selectör ler yarıdımıyla çözülür.
  */
  templateUrl: './app.component.html',
  /* template: `<app-people></app-people>
   <app-users></app-users>
   `,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'User Login Screen';
  Username = 'muratcabuk';
  Password = '123456';
  Email = 'mcabuk@live.com';

  Login() { alert('Login is successful'); }

  ValidateUsername($event) {
    if ($event.charCode > 48 && $event.charCode < 57) { alert('sadece text'); }
  }


}
