import { Component, OnInit } from '@angular/core';
import { Dishes, MenuItem } from '../../models/models';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(productService: ProductService) {
    
  }

  ngOnInit() {
    
  }

  menu: MenuItem[] = [
      new MenuItem("Alles"),
      new MenuItem("Vorspeise"),
      new MenuItem("Hauptgericht"),
      new MenuItem("Desserts"),
      new MenuItem("Getränke"),
  ];
  
  dishes: Dishes[] = [
  {
    ingredients: ["ingredient1", "ingredient2", "ingredient3"],
    description: "Lasagne",
    price: "$10.99",
    link: "../../assets/food/lasagne.jpg",
    alt: "Lasagne alt text",
    name: "Lasagne"
  },
  {
    ingredients: ["ingredient1", "ingredient2", "ingredient3"],
    description: "Pelimeschki",
    price: "$8.99",
    link: "../../assets/food/pelmeni.jpg",
    alt: "Pelimeschki alt text",
    name: "Pelimeschki"
  },
  {
    ingredients: ["ingredient1", "ingredient2", "ingredient3"],
    description: "Borsch",
    price: "$12.99",
    link: "../../assets/food/borschtsch.jpg",
    alt: "Borsch alt text",
    name: "Borsch"
  },
  {
    ingredients: ["ingredient1", "ingredient2", "ingredient3"],
    description: "Spaghetti Carbonara",
    price: "$14.99",
    link: "../../assets/food/carbonara.jpg",
    alt: "Spaghetti Carbonara alt text",
    name: "Lasagne"
  },
  {
    ingredients: ["ingredient1", "ingredient2", "ingredient3"],
    description: "Nodelbok dlei dleißig",
    price: "$3.30",
    link: "../../assets/food/nudelbox.jpg",
    alt: "Nodelbok dlei dleißig alt text",
    name: "Nodelbok dlei dleißig"
  },
  ];

}
