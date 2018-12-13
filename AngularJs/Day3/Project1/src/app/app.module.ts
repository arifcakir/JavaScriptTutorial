import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SchoolComponent } from './school/school.component';



import { UsersService } from './users/UsersService';
import { SchoolService } from './school/SchoolService';
import { HighlightDirective } from './highlight.directive';
import { MypipePipe } from './mypipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SchoolComponent,
    HighlightDirective,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  /*buradaki USersService aslında USerServices.ts altındakiş class ın adı*/
  providers: [UsersService, SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
