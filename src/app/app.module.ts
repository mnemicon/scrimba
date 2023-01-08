import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers/customers-list/filter-textbox.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CustomersRoutingModule } from './customers/customers-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersRoutingModule } from './orders/orders-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    CustomersRoutingModule,
    OrdersRoutingModule
  ],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }