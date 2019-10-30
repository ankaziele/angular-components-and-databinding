/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServerElementComponent } from './server-element.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';

describe('ServerElementComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerElementComponent,
      CheckboxComponent ],
      imports: [
        FormsModule
     ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    let fixture = TestBed.createComponent(ServerElementComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

});
