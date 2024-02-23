export class MenuItem {
    constructor(public name: string) {}
}

export class Todos {
    completed: string = "";
​    id: number = 0;
​​    title: string = "";
// ​​​    userId: string = ""
}

export interface Car {
    brand: string;
    year: number;
    imageUrl: string;
  }