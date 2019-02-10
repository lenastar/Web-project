import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client_info.component.html',
  styleUrls: ['./client_info.component.css'],
  providers: [LoginService]
})
export class ClientInfoComponent implements OnInit {

  public client;

  constructor(private loginService: LoginService) {
    this.getClientInfo();
  }

  getClientInfo() {
    this.loginService.getClientInfo().subscribe(res => {
      if (res['status']) {
        this.client = res['data'];
        console.log('privet', res['data']);
      } else {
        alert('wrong');
      }
    }, error => {
      console.log('error is ', error);
    });
  }

  ngOnInit() {
  }

}

