import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  SiteSettings: Object;
  Menus: Object;
  _router:Router;



  constructor(private http: HttpClient, private router:Router) {


    this._router = router;
    this.SiteSettings = new Object();
    this.Menus = new Object();


    this.http.get('./assets/SiteSettings.json').
      subscribe(
        data => {
          this.SiteSettings = data;
          console.log(this.SiteSettings);
        }
      );


    this.http.get('./assets/Menu.json').
      subscribe(
        data => {
          this.Menus = data;
          console.log(this.Menus);
        }
      );



  }

GetPage()
{


this._router.navigate([{outlets : {subpages: ['userpage']}}]);

}



  ngOnInit() {
  }

}
