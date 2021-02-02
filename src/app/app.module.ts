import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { MainLayaoutComponent } from './pages/main-layaout/main-layaout.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    MainLayaoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
