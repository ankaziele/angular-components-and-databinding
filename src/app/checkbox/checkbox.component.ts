import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.css"]
})
export class CheckboxComponent implements OnInit {
  checkBoxValue = false;

  @Output() checkboxSelected = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onCheckBoxChange() {
    this.checkboxSelected.emit(this.checkBoxValue);
  }
}
