import { Component, OnInit } from "@angular/core";
import HomeService from "./home.service";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {
  constructor(private homeService :HomeService) {}
  searchText=""
  filteredItems;
  items;
  ngOnInit() {
    this.items = this.homeService.getItems();
    this.filteredItems= Object.assign([], this.items)
  }
  
  search() {
      this.filteredItems = Object.assign([], this.items).filter(
        item =>
          item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
      );
  }

}
