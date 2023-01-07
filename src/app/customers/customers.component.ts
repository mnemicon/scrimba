import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { ICustomer } from '../shared/interfaces';
import { CustomersRoutingModule } from './customers-routing.module';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title!: string;
  people: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.title = 'Customers';
    this.dataService.getCustomers()
    .subscribe((customers: ICustomer[]) => this.people = customers);
    // this.people = [
    //   {id: 1, name: "David Lee Roth", city: "Oulu", orderTotal: 12.20, customerSince: new Date(2012, 1, 31) },
    //   {id: 2, name: "Eddie van Halen", city: "Lahti", orderTotal: 2.80, customerSince: new Date(2002, 1, 31) },
    //   {id: 3, name: "alex van halen", city: "Seinäjoki", orderTotal: 5.00, customerSince: new Date(2021, 1, 31) },
    //   {id: 4, name: "michael Anthony", city: "Kuopio", orderTotal: 112.45, customerSince: new Date(2022, 1, 31) }
    // ];
  }
}