import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {LoginService} from '../login/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private TimeOut = 3600000;
  private timerId;

  constructor(private location: Location) {
    this.timerId = setTimeout(() => {
      alert('End of session');
      this.logOut();
    }, this.TimeOut);
  }

  logOut() {
    clearTimeout(this.timerId);
    LoginService.accessToken = undefined;
    this.location.back();
  }
}
