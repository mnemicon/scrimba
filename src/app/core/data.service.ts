import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';   //ei tunnistanut Observablea...poistettiin /Observable...
import { map, catchError } from 'rxjs/operators';
import { ICustomer, IOrder } from '../shared/interfaces';

@Injectable(
  {  providedIn: 'root'}
)
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

// get all customers
  getCustomers() : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
    .pipe(
      catchError(this.handleError)
    );
  }

//get one customer
  getCustomer(id: number) : Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
    .pipe(
      map(customers => {
        let customer = customers.filter((cust: ICustomer) => cust.id === id);
        return (customer && customer.length) ? customer[0] : null as any;
      }),
      catchError(this.handleError)
    )
  }

//get all orders
  getOrders(id: number) : Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
    .pipe(
      map(orders => {
        let custOrders = orders.filter((order: IOrder) => order.customerId === id);
        return custOrders;
      }),
      catchError(this.handleError)
    );
  }

//virheenkäsittely
  private handleError(error: any) {
    console.error('server.error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
        //if using LITESERVER use this instead: return Observable.throw(err.text() || 'backend server error');
    }
    return throwError(error || 'Node.js server error');
  }
}