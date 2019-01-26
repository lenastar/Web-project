import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-payment-panel',
  templateUrl: './payment_panel.component.html',
  styleUrls: ['./payment_panel.component.css']
})
export class PaymentPanelComponent implements OnInit {
  isCheckedPay = false;
  isCheckedAsk = true;

  isCheckedMyBank = true;
  isCheckedOtherBank = false;

  checkedPay(isCheckedPay) {
    if (isCheckedPay) {
      this.isCheckedPay = true;
      this.isCheckedAsk = false;
    } else {
      this.isCheckedPay = false;
      this.isCheckedAsk = true;
    }
  }

  checkedMyBank(isCheckedMyBank) {
    if (isCheckedMyBank) {
      this.isCheckedMyBank = true;
      this.isCheckedOtherBank = false;
    } else {
      this.isCheckedMyBank = false;
      this.isCheckedOtherBank = true;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
