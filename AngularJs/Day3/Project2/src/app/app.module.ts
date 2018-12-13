import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

import { UserpageComponent } from './userpage/userpage.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



const myRoutes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [

      {
        path: 'userpage',
        component: UserpageComponent,
         outlet: 'subpages'
      }


    ]

  }



];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,

    UserpageComponent,

    HeaderbarComponent,

    SidebarComponent,

    FooterComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
