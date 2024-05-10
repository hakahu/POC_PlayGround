import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dishes } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }

  getAllProducts(){
    return this.http.get('https://api.github.com/users/Bard');
  }

  getProductById(){
    this.http.get<Dishes>('https://reqres.in/api/posts').subscribe(response => {
        console.log(response);
    })
  }

  addProduct(id:string){
    this.http.post<Dishes>('https://reqres.in/api/posts', { id: id }).subscribe(response => {
        console.log(response);
    })
  }

  updateProduct(id:string){
    this.http.put<Dishes>('https://reqres.in/api/posts', { id: id }).subscribe(response => {
        console.log(response);
    })
  }

  removeProduct(id:string){
    this.http.delete('https://jsonplaceholder.typicode.com/invalid-url')
        .subscribe({
            next: response => {
              console.log(response);
            },
            error: error => {
                console.error('There was an error!', error.message);
            }
        });
  }

}
