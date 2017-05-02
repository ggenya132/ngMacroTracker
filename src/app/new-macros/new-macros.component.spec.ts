import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMacrosComponent } from './new-macros.component';

describe('NewMacrosComponent', () => {
  let component: NewMacrosComponent;
  let fixture: ComponentFixture<NewMacrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMacrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMacrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
