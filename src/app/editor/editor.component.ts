import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
    isEditable: boolean = false;
    text: string = "hjdgksa"

  constructor() { }

  ngOnInit() {
  }

  onEditClick() {
    this.isEditable = !this.isEditable
  }

}
