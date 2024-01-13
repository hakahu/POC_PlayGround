import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/models';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  
  menu: MenuItem[] = [
      new MenuItem("Alles"),
      new MenuItem("Vorspeise"),
      new MenuItem("Hauptgericht"),
      new MenuItem("Desserts"),
      new MenuItem("Getränke"),
      // ... Add more items as needed
  ];
  
  constructor() {
    
  }

  ngOnInit() {
    
  }

}
