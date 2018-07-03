import { Component, ViewChild } from "@angular/core";
import { AuthService } from "./auth.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public auth: AuthService) {}
  ngOnInit() {}
  @ViewChild("popUp") child;
  showExitPopUp() {
    this.child.showExitPopUp();
  }
}
