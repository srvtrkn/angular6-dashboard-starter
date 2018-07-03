import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor() {}

  getItems() {
    const items = [
      { id: 1, name: "Ahmet" },
      { id: 2, name: "Mehmet" },
      { id: 3, name: "Faruk" },
      { id: 4, name: "Salih" }
    ];
    return items;
  }
}
export default HomeService; 