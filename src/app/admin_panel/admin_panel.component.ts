import {Component, OnInit} from '@angular/core';
import {AdminService} from './admin_panel.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin_panel.component.html',
  providers: [AdminService]
})
export class AdminComponent {
  public selectedItemForSearch = 'userId';
  public searchValue = null;
  public selectedItemForSort = 'userId';
  public typeSort = 'asc';
  public articles;
  isCheckedCard = true;
  isCheckedMyBank = false;

  public anyBankValues = [{name: 'UserId', value: 'userId'},
    {name: 'Номер карты', value: 'cardNumber'},
    {name: 'Сумма', value: 'sum'},
    {name: 'DD MM', value: 'expirationDate'},
    {name: 'CVC', value: 'cvc'},
    {name: 'Комментарий', value: 'comment'},
    {name: 'Email', value: 'email'}];
  public myBankValues = [{name: 'UserId', value: 'userId'},
    {name: 'ИНН', value: 'tin'},
    {name: 'БИК', value: 'bik'},
    {name: 'НДС', value: 'vat'},
    {name: 'Номер счета', value: 'accountNumber'},
    {name: 'Сумма', value: 'sum'},
    {name: 'Email', value: 'email'},
    {name: 'Телефон', value: 'phone'}];
  public sortingTypes = [{name: 'По возрастанию', value: 'asc'},
    {name: 'По убыванию', value: 'desc'}];

  constructor(private adminService: AdminService) {
  }

  checkCard(isCheckedCard) {
    this.isCheckedCard = isCheckedCard;
    this.isCheckedMyBank = !(isCheckedCard);
  }

  radioChangeHandlerAnyBank(event: any) {
    this.selectedItemForSearch = event.target.value;
  }

  radioChangeHandlerMyBank(event: any) {
    this.selectedItemForSort = event.target.value;
  }

  radioChangeHandlerSortingType(event: any) {
    this.typeSort = event.target.value;
  }

  search(anyBank) {
    const searching = this.searchValue !== null;
    this.adminService.postInfo(anyBank,
      searching,
      this.selectedItemForSearch,
      this.searchValue,
      this.selectedItemForSort,
      this.typeSort).subscribe(res => {
      console.log(res);
      if (res['status']) {
        this.articles = res['data'];
      } else {
        alert('wrong');
      }
    }, error => {
      console.log('error is ', error);
    });
  }

}
