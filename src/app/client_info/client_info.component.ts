import { Component, OnInit } from '@angular/core';
import {Client} from './client_info.model';

@Component({
  selector: 'app-client-info',
  templateUrl: './client_info.component.html',
  styleUrls: ['./client_info.component.css']
})
export class ClientInfoComponent implements OnInit {

  client = new Client('Муркина Лидия Ивановна', '89827384828', 'www.mur.com', 'mur@mail.ru', 'https://i.imgur.com/rK3EjIZ.jpg');
  constructor() { }

  ngOnInit() {
  }
}
