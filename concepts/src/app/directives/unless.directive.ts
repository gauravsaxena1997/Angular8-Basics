import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView:boolean = false;
  constructor(
    private tempRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appUnless(condition:boolean){
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.tempRef);
      this.hasView = true;
    } else if (condition && this.hasView){
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
