import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { TheUsualComponent } from './the-usual/the-usual.component';
import { userInformationService } from './user-information.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    BeveragesComponent,
    TheUsualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    userInformationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
