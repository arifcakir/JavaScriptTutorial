import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


Email: string;
Password: string;


  _router:Router;

  constructor(private router: Router) { 

     this._router = router;

  }

  ngOnInit() {
  }

Login(){

if(this.Email != "ak@a.com" && this.Password != "123")
{

alert("Login Failed");

}
else
{

this._router.navigate(['homepage']);
}


}



}
