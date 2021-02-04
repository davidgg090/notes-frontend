import { Component, ElementRef, Input, EventEmitter, OnInit, Output, Renderer2, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  body!: string;
  @Input()
  link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('truncator', { static: true })
  truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true })
  bodyText!: ElementRef<HTMLElement>;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viawableHeight = parseInt(style.getPropertyValue("height"), 10);

    if(this.bodyText.nativeElement.scrollHeight > viawableHeight) {
      this.render.setStyle(this.truncator.nativeElement, 'display', 'block');
    }
    else{
      this.render.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  onXButtonclick(){
    this.deleteEvent.emit();
  }

}
