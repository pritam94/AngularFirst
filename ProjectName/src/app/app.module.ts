import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { NgIfForComponent } from './ngif_for.component';
import { ClickComponent } from './clickkey.component';
import { BindComponent } from './binding.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    NgIfForComponent,
    ClickComponent,
    BindComponent
    ],
    
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, TutorialComponent, NgIfForComponent, ClickComponent, BindComponent]
})
export class AppModule { }
