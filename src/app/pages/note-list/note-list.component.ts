import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Note } from '../../shared/note.module';
import { NotesService } from '../../shared/notes.service';
import { element } from 'protractor';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({
          height:0,
          opacity:0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop:0,
          paddingBottom:0,
          paddingRight:0,
          paddingLeft:0,
        }),
        animate('50ms', style({
          height:'*',
          'margin-bottom': '*',
          paddingTop:'*',
          paddingBottom:'*',
          paddingRight:'*',
          paddingLeft:'*',
        })),
        animate(100)
      ]),
      transition('* => void', [
        animate(50, style({
          transform:'scale(1.05)'
        })),
        animate(50, style({
          transform:'scale(1)',
          opacity:0.7
        })),
        animate('120ms ease-out', style({
          opacity:0,
          transform:'scale(0.68)'
        })),
        animate('150ms ease-out', style({
          height:0,
          'margin-bottom': 0,
          paddingTop:0,
          paddingBottom:0,
          paddingRight:0,
          paddingLeft:0,
        }))
      ])
    ]),
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity:0,
            height:0,
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
})
export class NoteListComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  filteredNotes : Note[] = new Array<Note>();

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {

    this.notes = this.noteService.getAll();
    this.filteredNotes = this.notes;
  }

  deleteNote(id: number){
    this.noteService.delete(id);
    
  }

  filter(query: string){
    query = query.toLowerCase().trim();
    let allResults: Note[] = Array<Note>();
    let terms: string[] = query.split(' ');
    terms = this.removeDuplicates(terms);


    terms.forEach(term => {
      let results: Note[] = this.revelantNotes(term);

      allResults = [...allResults, ...results]
    });

    let uniqueResults = this.removeDuplicates(allResults);

    this.filteredNotes = uniqueResults;


  }

  removeDuplicates(arr: Array<any>): Array<any>{
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach(e => uniqueResults.add(e));
    return Array.from(uniqueResults)
  }


  revelantNotes(query: string): Array<Note>{
    query = query.toLowerCase().trim();
    let revelantNotes = this.notes.filter(note => {
      if(note.body.toLowerCase().includes(query) || note.title.toLowerCase().includes(query)){
        return true;
      }
      return false;
    })

    return revelantNotes;
  }

}
