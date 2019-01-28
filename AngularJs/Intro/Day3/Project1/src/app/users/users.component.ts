import { Component, OnInit } from '@angular/core';
import {UsersService} from './UsersService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users=[];

_usersService:UsersService;

constructor(usersService: UsersService)
{

  this._usersService= usersService;

this.Users = usersService.Users;
}


Name:string;
Lastname:string;
Age:number;


AddUser(){

  this._usersService.AddUser(this.Name, this.Lastname, this.Age);


}

  ngOnInit() {
  }

}
