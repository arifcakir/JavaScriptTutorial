import { Component, OnInit } from '@angular/core';


/*bu componenet i oluşturmal için Angular CLI da Ng g c People   komutu kullanıldı */
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
