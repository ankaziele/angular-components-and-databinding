import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CockpitComponent,
        ServerElementComponent,
        CheckboxComponent,
        EditorComponent,
     ],
     imports: [
      FormsModule
   ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
