import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from '../../shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note: Note;

  constructor(private noteService: NotesService, private router: Router) {
    this.note = new Note;
   }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    this.noteService.add(form.value);
    this.router.navigateByUrl('/');
  }

  cancel(){
    this.router.navigateByUrl('/');
  }

}
