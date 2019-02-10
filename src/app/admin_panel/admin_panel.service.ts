import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../login/login.service';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) {

  }

  postInfo(anyBank, searching, searchField, searchValue, sortField, asc) {
    const url = anyBank ? 'http://localhost:3000/admin/filterAnyBankPayment' : 'http://localhost:3000/admin/filterMyBankPayment';
    const headers = new HttpHeaders().set('x-access-token', LoginService.accessToken);
    return this.http.post(url, {
      searching: searching,
      searchField: searchField,
      searchValue: searchValue,
      sortField: sortField,
      asc: asc
    }, {headers: headers});
  }

}
