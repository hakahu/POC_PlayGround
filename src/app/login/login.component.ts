import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private http: HttpClient){

    }

    ngOnInit(): void {
      this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos').subscribe(data => 
      {

        console.log(data);
        
        for(var item of data){
          console.log(item.title);
        }
      });
    }
}
