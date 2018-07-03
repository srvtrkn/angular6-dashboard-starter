import { Injectable } from "@angular/core";
interface user {
  name: string;
  pas: number;
  isAuth: boolean;
}
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  login(user) {
    let u = {
      isAuth: true,
      userName: user.name
    };

    localStorage.setItem("auth", JSON.stringify(u));
  }

  get isLoggedIn() {
    let user = JSON.parse(localStorage.getItem("auth"));
    return !user ? false : true;
  }
  get getUserInfo() {
    let user = JSON.parse(localStorage.getItem("auth"));
    return !user ? [] : user;
  }
  logout(){
    localStorage.removeItem("auth");
  }
}
