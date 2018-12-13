// tslint:disable-next-line:eofline
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

    private _users = [];

    get Users() {

        return this._users;
    }

    set Users(users) {

        this._users = users;

    }


    AddUser(name: string, lastname: string, age:number){

        this._users.push({Name:name, Lastname:lastname, Age:age});

    }

    constructor() {
    this._users=[
        { Name: "Murat", Lastname: "Cabuk", Age: 40 },
        { Name: "Ahmet", Lastname: "Ali", Age: 40 },
        { Name: "Mehmet", Lastname: "Murat", Age: 40 }
    ]

    }


}