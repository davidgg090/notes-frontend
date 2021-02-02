import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { MainLayaoutComponent } from './pages/main-layaout/main-layaout.component';
import { NoteCardComponent } from './note-card/note-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    MainLayaoutComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
