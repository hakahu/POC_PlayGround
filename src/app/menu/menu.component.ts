import { Component, OnInit } from '@angular/core';
import { Dishes, MenuItem } from '../../models/models';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private productService: ProductService, private httpClient: HttpClient) {
    
  }

  ngOnInit() {
    // this.getDishes();
    this.httpClient.get<any>('http://localhost:3001/test').subscribe(data => {
    this.dishes = data;
    console.log(data);
    });
  }

  dishes = [];
  menu: MenuItem[] = [
      new MenuItem("Alles"),
      new MenuItem("Vorspeise"),
      new MenuItem("Hauptgericht"),
      new MenuItem("Desserts"),
      new MenuItem("Getränke"),
  ];

  // getDishes(): void {
  //   this.productService.getAllProducts().subscribe(
  //     response => {
  //       this.dishes = response;
  //     },
  //     error => {
  //       console.error('Error fetching dishes:', error);
  //     }
  //   );
  // }
  
}
