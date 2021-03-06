import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TitleComponent } from './title/title.component';

@NgModule({
   declarations: [
      AppComponent,
      CockpitComponent,
      ServerElementComponent,
      CheckboxComponent,
      TitleComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
