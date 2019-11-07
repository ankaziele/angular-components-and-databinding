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

  describe ('onEditClick', ()=>{
    it('should change flag of isEditable', () => {
      //given
      component.isEditable = false;

      //when
      component.onEditClick()

      //then
      expect(component.isEditable).toBe(true);
    });

    it('should change newText to text', () => {
      //given
      component.isEditable = false;
      component.text = 'some text'
      
      //when
      component.onEditClick()
      
      //then
      expect(component.newText).toBe('some text');
    });

  })

  describe ('onSaveClick', ()=>{
    it('should change flag of isEditable', () => {
      //given
      component.isEditable = true;

      //when
      component.onSaveClick()

      //then
      expect(component.isEditable).toBe(false);
    });

    it('should change text to newText', () => {
      //given
      component.isEditable = true;
      component.newText = 'some text to save'
      
      //when
      component.onSaveClick()
      
      //then
      expect(component.text).toBe('some text to save');
    });

  })
});
