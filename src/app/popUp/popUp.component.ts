import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-popUp",
  templateUrl: "./popUp.component.html",
  styleUrls: ["./popUp.component.css"]
})
export class PopUpComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}
  isVisible = false;
  msg = "Do you want to exit application ?";
  ngOnInit() {}

  showExitPopUp() {
    this.isVisible = true;
  }
  hideExitPopUp() {
    this.isVisible = false;
  }

  logout() {
    this.isVisible = false;
    this.auth.logout();
    this.router.navigate(["login"]);
  }
}
