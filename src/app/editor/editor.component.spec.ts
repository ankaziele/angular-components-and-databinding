import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { FormsModule } from '@angular/forms';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent ],
      imports: [
        FormsModule
     ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe ('onCancelClick', ()=>{
    it('should change flag of isEditable', () => {
      //given - to samo mazna by uzyskac jako ustawienie :
      //component.isEditable = true
      component.onEditClick()


      //when
      component.onCancelClick()


      //then
      expect(component.isEditable).toBe(false);
    });
  })




});
