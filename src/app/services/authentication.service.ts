import { Injectable } from '@angular/core';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  login(userBody: User) {
    (userBody.username == 'admin' && userBody.password == 'nimda') ?
      (localStorage.setItem('currentUser', JSON.stringify(userBody.username))) : console.log("Username or password is incorrect!");

      return userBody.username;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
