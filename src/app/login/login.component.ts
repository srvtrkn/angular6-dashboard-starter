import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  name = "";
  password = "";

  ngOnInit() {}
  login() {
    if (this.name !== "") {
      this.auth.login({
        name: this.name,
        pass: this.password,
        role: this.name === "admin" ? "admin" : "user"
      });
      this.router.navigate(["home"]);
    } else {
      alert("Name is required!!!");
    }
  }
}
