import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { MainLayaoutComponent } from './pages/main-layaout/main-layaout.component';

const routes: Routes = [
  {path: '', component:MainLayaoutComponent, children: [
    {path: '', component:NoteListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
