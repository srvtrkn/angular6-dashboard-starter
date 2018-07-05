import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LeftMenuService {
  constructor() {}

  getMenu() {
    const items = [
      {
        name: "Admin Page",
        routerLink: "/home",
        rolesRequired: ["admin"],
        icon: "unlock"
      },{
        name: "Home Page",
        routerLink: "/home",
        rolesRequired: ["user","admin"],
        icon: "home"
      },
      {
        name: "Page 1",
        routerLink: "/page1",
        rolesRequired: ["user","admin"],
        icon: "file"
      }
    ];
    return items;
  }
}
