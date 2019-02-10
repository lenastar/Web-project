import {Component, OnInit} from '@angular/core';
import {PaymentPanelService} from './payment_panel.service';
import {LoginService} from '../login/login.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-payment-panel',
  templateUrl: './payment_panel.component.html',
  styleUrls: ['./payment_panel.component.css'],
  providers: [PaymentPanelService]
})
export class PaymentPanelComponent implements OnInit {
  isCheckedPay = false;
  isCheckedAsk = true;

  public cardNumber;
  public expirationDate;
  public cvc;
  public sum;
  public email;
  public comment;
  public tin;
  public bik;
  public vat;
  public accountNumber;
  public phone;

  vats = [
    {name: 'НДС 18 процентов', value: 'НДС 18%'},
    {name: 'НДС 10 процентов', value: 'НДС 10%'},
    {name: 'Без НДС', value: 'Без НДС'}
  ];
  isCheckedMyBank = true;
  isCheckedOtherBank = false;

  public checkedPay(isCheckedPay): void {
    this.isCheckedPay = isCheckedPay;
    this.isCheckedAsk = !(isCheckedPay);
  }

  public checkedMyBank(isCheckedMyBank): void {
    this.isCheckedMyBank = isCheckedMyBank;
    this.isCheckedOtherBank = !(isCheckedMyBank);
  }

  constructor(private paymentPanelService: PaymentPanelService) {
  }

  ngOnInit() {
  }

  encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  }

  sendFromAnyBank() {
    const comment = this.encodeHTML(this.comment);
    console.log(comment);
    this.paymentPanelService.sendFromAnyBank(this.cardNumber, this.sum, this.expirationDate, this.cvc, this.comment, this.email)
      .subscribe(res => {
        console.log(res);
        if (res['status']) {
          console.log(res['message']);
        } else {
          alert('Заполните правильно все поля');
        }
      }, error => {
        console.log('error is ', error);
      });

  }

  sendFromMyBank() {
    this.paymentPanelService.sendFromMyBank(this.tin, this.bik, this.vat, this.accountNumber, this.sum, this.email, this.phone)
      .subscribe(res => {
        console.log(res);
        if (res['status']) {
          console.log(res['message']);
        } else {
          alert('Заполните правильно все поля');
        }
      }, error => {
        console.log('error is ', error);
      });
  }

  createInvoice() {
    this.paymentPanelService.createInvoice(this.tin, this.bik, this.vat, this.sum, this.accountNumber).subscribe(res => {
      const blob = new Blob([res], {type: 'text/csv'});
      FileSaver.saveAs(blob, 'data.txt');
    }, error => {
      console.log('error is ', error);
    });
  }

}
