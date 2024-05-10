import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Dishes, MenuItem } from '../../models/models';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { DishType } from '../enums/enums';

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
  }

  data: any;

  searchTerm = '';
  filterOptions = [
    { label: 'Italian', value: 'italian', selected: false },
    { label: 'Vegetarian', value: 'vegetarian', selected: false },
    // Add more filter options as needed
  ];

  items = [
    { id: '0', title: 'Lasagne', description: 'Eine original italienische Lasagne mit Hackfleisch.', price: 9.99, link: 'https://img.chefkoch-cdn.de/rezepte/745721177147257/bilder/668335/crop-960x540/lasagne.jpg', quantity: 1, ingredients: [], dishType: DishType.PASTA },
    { id: '1', title: 'Pelmeni', description: 'Russische Pelmeni mit Schmand und/oder Pfeffer.',  price: 10.99, link: 'https://img.chefkoch-cdn.de/rezepte/1825431296062925/bilder/373883/crop-960x540/pelmeni-mit-butter-und-oder-senf.jpg', quantity: 1, ingredients: [], dishType: DishType.CUSTOM },
    { id: '1', title: 'Pizza Margharita', description: 'Pizza Margharita mit Käse überbacken..',  price: 12.99, link: 'https://img.zeit.de/zeit-magazin/wochenmarkt/2023-08/pizza-margherita-giovanni-stincone-rezept/super__450x300__mobile__scale_2', quantity: 1, ingredients: [], dishType: DishType.PIZZA },
    { id: '1', title: 'Gemischter Salat', description: 'Gemischter Salat mit Tomaten und Gurken.',  price: 6.99, link: 'https://www.gaumenfreundin.de/wp-content/uploads/2022/12/Gemischter-Salat-Gaumenfreundin.jpg', quantity: 1, ingredients: [], dishType: DishType.SALAD },
    { id: '1', title: 'Double Cheesburger', description: 'Double Cheeseburger mit 150g Angus Fleisch.',  price: 14.99, link: 'https://www.gutekueche.at/storage/media/recipe/136820/double-smashed-cheese-burger.jpg', quantity: 1, ingredients: [], dishType: DishType.BURGER },
    { id: '1', title: 'Tortillas Mexikanisch', description: 'Überbackene Tortillas mit Hackfleisch.',  price: 7.99, link: 'https://carneo-online.de/wp-content/uploads/2020/04/11_19-%C3%9Cberbackene-Nachos-AdobeStock_Pixel-Shot.jpg', quantity: 1, ingredients: [], dishType: DishType.CUSTOM },
    // Add more filter options as needed
  ];

  dishes = [];
  filteredDishes = [];

  menu: MenuItem[] = [
      new MenuItem("Alles"),
      new MenuItem("Vorspeise"),
      new MenuItem("Hauptgericht"),
      new MenuItem("Desserts"),
      new MenuItem("Getränke"),
  ];

  // Get-Request ans backend um alle verfügbaren Gerichte aufzurufen
  async getDishes() {
    await this.productService.getAllProducts().subscribe({
      next: (result) => {
        this.data = result;
        console.log(this.data);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  
}
