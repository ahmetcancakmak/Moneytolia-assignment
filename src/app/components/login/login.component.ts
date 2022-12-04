import { Component } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userBody : User = {
    username: "",
    password: ""
  }
  error: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }

  login() {
    this.authenticationService.login(this.userBody)
    window.location.href = "/campaigns-list"
  }

}


