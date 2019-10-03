import { Component } from "@angular/core";
import { Server } from "./server";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [
    {
      type: "server",
      isSelected: false,
      name: "new server",
      content: "content"
    }
  ];

  onServerCreated(server: Server) {
    this.serverElements.push(server);
  }

  removeSelectedServer() {
    this.serverElements = this.serverElements.filter(
      el => el.isSelected === false
    );
  }
}
