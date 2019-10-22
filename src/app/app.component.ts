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
    console.log(this.serverElements)
  }

  onBluePrintCreated(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverElements.push(
      {
        type: 'blueprint',
        isSelected: false,
        name: bluePrintData.serverName,
        content: bluePrintData.serverContent
      }
    );
  }

  removeSelectedServer() {
    this.serverElements = this.serverElements.filter(
      el => el.isSelected === false
    );
  console.log(this.serverElements, 'SERV EL');
  }
}
