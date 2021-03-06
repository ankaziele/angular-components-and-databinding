import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Server } from "../server";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  newServerName = "";
  newServerContent = "";

  @Output() serverCreated = new EventEmitter<Server>();
  @Output() blueprintAdded = new EventEmitter<{serverName: string; serverContent: string; type: string; isSelected: boolean}>()
  // Output to dekorator ktory jako arg przyjmuje to co jest po prawej stronie. Angular bedzie mogl powiazac ten element z wyslaniem zdarzen do rodzica.

  onAddServer() {
    this.serverCreated.emit({
      type: 'server',
      isSelected: false,
      name: this.newServerName,
      content: this.newServerContent
    });

    this.newServerName = '';
    this.newServerContent = '';
  }

  onAddBlueprint() {
    this.blueprintAdded.emit( {
      type: 'blueprint',
        isSelected: false,
        serverName: this.newServerName,
        serverContent: this.newServerContent
    });
    this.newServerName = '';
    this.newServerContent = '';
  }

  // onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // })
    // this.newServerName ='';
    // this.newServerContent ='';

  constructor() {}

  ngOnInit() {}
}
