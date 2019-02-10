import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../login/login.service';

@Injectable()
export class PaymentPanelService {

  constructor(private http: HttpClient) {

  }

  sendFromAnyBank(cardNumber, sum, expirationDate, cvc, comment, email) {
    const headers = new HttpHeaders().set('x-access-token', LoginService.accessToken);
    return this.http.post('http://localhost:3000/payments/saveAnyBankPayment', {
      cardNumber: cardNumber,
      sum: sum,
      expirationDate: expirationDate,
      cvc: cvc,
      comment: comment,
      email: email
    }, {headers: headers});
  }

  createInvoice(tin, bik, vat, sum, accountNumber) {
    const headers = new HttpHeaders()
      .set('x-access-token', LoginService.accessToken)
      .set('Accept', 'text/csv');
    return this.http.post('http://localhost:3000/payments/createInvoice', {
      tin: tin,
      sum: sum,
      bik: bik,
      accountNumber: accountNumber,
      vat: vat
    }, {headers: headers, responseType: 'text'});
  }

  sendFromMyBank(tin, bik, vat, accountNumber, sum, email, phone) {
    const headers = new HttpHeaders().set('x-access-token', LoginService.accessToken);
    return this.http.post('http://localhost:3000/payments/saveMyBankPayment', {
      tin: tin,
      sum: sum,
      bik: bik,
      accountNumber: accountNumber,
      vat: vat,
      email: email,
      phone: phone
    }, {headers: headers});
  }
}
