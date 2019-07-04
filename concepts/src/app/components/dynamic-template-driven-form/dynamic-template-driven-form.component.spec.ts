import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTemplateDrivenFormComponent } from './dynamic-template-driven-form.component';

describe('DynamicTemplateDrivenFormComponent', () => {
  let component: DynamicTemplateDrivenFormComponent;
  let fixture: ComponentFixture<DynamicTemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
