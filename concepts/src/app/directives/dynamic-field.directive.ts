import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../components/forms/field.interface";
import { InputComponent } from "../form-components/input.component";
import { ButtonComponent } from "../form-components/button.component";
import { SelectComponent } from "../form-components/select.component";
import { DateComponent } from "../form-components/date.component";
import { RadiobuttonComponent } from "../form-components/radiobutton.component";
import { CheckboxComponent } from "../form-components/checkbox.component";

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }
  ngOnInit(){
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
      );
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.field = this.field;
      this.componentRef.instance.group = this.group;
      }
}