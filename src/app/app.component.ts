import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Moneytolia';
  isLoginPage: boolean = false;

  constructor(private url:LocationStrategy) { }

  ngOnInit() {    
    if(this.url.path()==='/login' || this.url.path()==='/'){
      this.isLoginPage = true;
    }
}

}
