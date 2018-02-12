import { Directive, ElementRef, Input, OnInit  } from '@angular/core';
import {assign} from 'lodash';
@Directive({
  selector: '[appHighlightMe]'
})
export class HighlightMeDirective implements OnInit {
  defaultOptions = {
    size: '2px',
    color: 'yellow',
    type: 'solid'
  };
  @Input('appHighlightMe') options: any;
 
  constructor(private el: ElementRef) { }

  ngOnInit(){
    if(!!this.options) assign(this.defaultOptions, this.options);
    this.el.nativeElement.style.borderBottom = this.defaultOptions.size + ' ' + this.defaultOptions.type + ' ' + this.defaultOptions.color;
  }
}
