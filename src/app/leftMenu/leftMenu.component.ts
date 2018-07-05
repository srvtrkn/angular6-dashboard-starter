import { Component, OnInit } from "@angular/core";
import { LeftMenuService } from "./leftMenu.service";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-leftMenu",
  templateUrl: "./leftMenu.component.html",
  styleUrls: ["./leftMenu.component.css"],
  providers: [LeftMenuService]
})
export class LeftMenuComponent implements OnInit {
  constructor(private service: LeftMenuService,private auth: AuthService) {}
  menu;
  ngOnInit() {
    this.menu = this.service.getMenu();
    let filteredMenu = [];
    let userRole = this.auth.getUserInfo.role;
    this.menu.forEach(element => {
      element.rolesRequired.forEach(role => {
        if (role === userRole) {
          filteredMenu.push(element);
        }
      });
    });
    this.menu = filteredMenu;
  }
}
