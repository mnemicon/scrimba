import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string | any;
  people: ICustomer[] | any;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Customers';
    this.people = [
      {id: 1, name: "David Lee Roth", city: "Oulu", orderTotal: 12.20, customerSince: new Date(2012, 1, 31) },
      {id: 2, name: "Eddie van Halen", city: "Lahti", orderTotal: 2.80, customerSince: new Date(2002, 1, 31) },
      {id: 3, name: "alex van halen", city: "Seinäjoki", orderTotal: 5.00, customerSince: new Date(2021, 1, 31) },
      {id: 4, name: "Lemmy kilmister", city: "Kuopio", orderTotal: 112.45, customerSince: new Date(2022, 1, 31) }
    ];
  }
}