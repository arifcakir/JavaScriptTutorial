import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MyserviceService } from '../../providers/myservice.service';


@NgModule({
  imports: [
    CommonModule
  ],
providers: [MyserviceService]
,
  declarations: []
})
export class MymoduleModule { }
