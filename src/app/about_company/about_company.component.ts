import {Component, OnInit} from '@angular/core';
import {Client, Product} from './about_company.model';

@Component({
  selector: 'app-about-company',
  templateUrl: './about_company.component.html',
  styleUrls: ['./about_company.component.css']
})
export class AboutCompanyComponent implements OnInit{
  products = [new Product('Отпуск на Бали', 'http://www.atorus.ru/public/ator/data/ea4f13.jpg', 80000),
              new Product('Горячие каникулы в Мексике',
                'http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2017-07/_68-20060323_gaf_u34_180.jpg?itok=fXC_d4L9',
                100000),
              new Product('Путевка в Лысьву', 'http://www.uralkom-lysva.ru/images/j0rdkdfqrhe.jpg', 5000)];

  client = new Client('Муркина Лидия Ивановна', this.products);

  ngOnInit(): void {
  }
}
