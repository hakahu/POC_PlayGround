import { Component } from '@angular/core';
import { MenuItem } from 'src/models/models';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component {


  menu: MenuItem[] = [
    new MenuItem("Alles"),
    new MenuItem("Vorspeise"),
    new MenuItem("Hauptgericht"),
    new MenuItem("Desserts"),
    new MenuItem("Getränke"),
    // ... Add more items as needed
];
}
