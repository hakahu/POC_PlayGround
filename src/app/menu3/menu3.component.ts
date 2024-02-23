import { Component } from '@angular/core';
import { MenuItem } from 'src/models/models';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component {

  menu: MenuItem[] = [
    new MenuItem("Alles"),
    new MenuItem("Vorspeise"),
    new MenuItem("Hauptgericht"),
    new MenuItem("Desserts"),
    new MenuItem("Getränke"),
    // ... Add more items as needed
];
}
