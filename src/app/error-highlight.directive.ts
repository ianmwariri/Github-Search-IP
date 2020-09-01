import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorHighlight]'
})
export class ErrorHighlightDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.fontStyle='italic';
    this.elem.nativeElement.style.color='#ff7c00';
  }
}