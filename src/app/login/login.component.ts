import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showLogin: boolean = true;
  myFunction() {
    debugger;
    console.log(this.showLogin);
    this.showLogin = !this.showLogin;
    console.log(this.showLogin);
  }

}
