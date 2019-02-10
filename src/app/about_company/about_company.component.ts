import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about_company.component.html',
  styleUrls: ['./about_company.component.css'],
  providers: [LoginService]
})
export class AboutCompanyComponent implements OnInit {

  public client;

  constructor(private loginService: LoginService) {
    this.getClientInfo();
  }

  ngOnInit(): void {
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
}
