import { Directive, ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color:string;
  @Input() defaultColor:string;

  constructor(private ele: ElementRef) { }
  @HostListener('mouseover') onmouseover(){
    this.highlight(this.color||this.defaultColor);
  }
  @HostListener('mouseout') onmouseout(){
    this.highlight(null);
  }

  highlight(color:string){
    this.ele.nativeElement.style.backgroundColor=color;
  }

}
