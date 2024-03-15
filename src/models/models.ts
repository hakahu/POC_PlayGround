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
    ingredients: string[];
    description: string;
    name: string,
    price: string;
    link: string;
    alt: string;
}