import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user.model';

@Injectable()
export class LoginService {
  public static accessToken: string;

  constructor(private http: HttpClient) {

  }

  validateLogin(user: User) {
    return this.http.post('http://localhost:3000/users/login', {
      login: user.username,
      password: user.password
    });
  }

  getClientInfo() {
    const headers = new HttpHeaders().set('x-access-token', LoginService.accessToken);
    return this.http.get('http://localhost:3000/users/getClientInfo', {headers: headers});
  }

}
