import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { UsersComponent } from './users/users.component';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    UsersComponent,
    MyCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            {
              path:'People',
              component:PeopleComponent
            },
            {
              path:'Users',
              component:UsersComponent
            },
            {
              path:'MyCalculator',
              component:MyCalculatorComponent
            }         
          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
