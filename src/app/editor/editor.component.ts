import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
    @Input() initialText: string;
    isEditable: boolean = false;
    text: string;
    newText: string = this.text;

  constructor() { }

  ngOnInit() {
    this.text = this.initialText;
  }

  onEditClick() {
    this.newText = this.text
    this.isEditable = !this.isEditable
  }

  onSaveClick(){
    this.text = this.newText
    this.isEditable = !this.isEditable
  }

  onCancelClick(){
    this.isEditable = !this.isEditable
  }





}
