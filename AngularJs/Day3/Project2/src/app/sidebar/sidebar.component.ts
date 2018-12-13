import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  Menus: Object;
  _router: Router;

  constructor(private http: HttpClient, private router: Router) {


    this._router = router;

    this.Menus = new Object();


    this.http.get('./assets/Menu.json').
      subscribe(
        data => {
          this.Menus = data;
          console.log(this.Menus);
        }
      );

  }

GetPage() {
  // this._router.navigate([{outlets : {subpages: ['userpage']}}]);


  this._router.navigate(['homepage/userpage']);
}

  ngOnInit() {
  }

}
