import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) {  }

@Input() defaultColor: string;
@Input('appHighlight') appHighlightColor: string;

private highlight(color: string){

this.elementRef.nativeElement.style.backgroundColor = color;

}

@HostListener('mouseenter') onMouseEnter() {

this.highlight(this.appHighlightColor || this.defaultColor || 'red');

}



@HostListener('mouseleave') onMouseLeave() {

  this.highlight(null);
}


}
