import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LeftMenuComponent } from "./leftMenu/leftMenu.component";
import { HomeComponent } from "./home/home.component";
import { Page1Component } from "./page1/page1.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";
import { PopUpComponent } from "./popUp/popUp.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "page1", component: Page1Component, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    HomeComponent,
    Page1Component,
    LoginComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
