import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {
  SiteSettings: Object;

  constructor(private http: HttpClient) {

    this.SiteSettings = new Object();

    this.http.get('./assets/SiteSettings.json').
      subscribe(
        data => {
          this.SiteSettings = data;
          console.log(this.SiteSettings);
        }
      );

  }
  ngOnInit() {
  }

}
