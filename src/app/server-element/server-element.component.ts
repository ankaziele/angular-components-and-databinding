import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {
    type: string;
    isSelected: boolean;
    name: string;
    content: string;
  };

  onCheckBoxSelected(selected: boolean) {
    this.element.isSelected = !this.element.isSelected;
    console.log('value changed', this.element.isSelected);
  }

  constructor() {}

  ngOnInit() {}
}
