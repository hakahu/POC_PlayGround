import { DishType } from "../app/enums/enums";

export class MenuItem {
    constructor(public name: string) {}
}

export interface Todos {
    completed: string;
​    id: number;
​​    title: string;
// ​​​    userId: string = ""
}

export interface Car {
    brand: string;
    year: number;
    imageUrl: string;
}

export interface Dishes {
    id:string;
    ingredients: string[];
    description: string;
    title: string,
    price: number;
    link: string;
    quantity: number;
    dishType: DishType
}
