import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todos } from 'src/models/models';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



    constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router){

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

    signupForm = this.formBuilder.group({
      Username: '',
      Email: '',
      Password: ''
    });

    loginForm = this.formBuilder.group({
      Email: '',
      Password: ''
    });



    onSubmitSignUp(): void {
      console.log(this.signupForm.value);
      this.refreshForm();
    }

    onSubmitLogin(): void {
      console.log(this.loginForm.value);
      this.refreshForm();
    }

    refreshForm() {
      this.loginForm.reset();
      this.signupForm.reset();
    }

    myFunction(){
      console.log("Du Pimmelfechter.");
      this.router.navigate(['/qr']);      
    }

}
