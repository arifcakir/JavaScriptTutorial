import { Component, OnInit } from '@angular/core';
import {  } from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { 




  }


GetHtml():void{

$('#test').html('sdfasdfasdfasdfs');


}


  ngOnInit() {
  }

}
