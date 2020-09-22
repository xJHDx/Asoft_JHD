import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { CustomersListComponent } from './componentes/customers-list/customers-list.component';


/** Importar conecion a api service */
import { CustomeService } from '../app/componentes/services/custome.service';
import { SaleListComponent } from './componentes/sale-list/sale-list.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustomersListComponent,
    SaleListComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CustomeService,
    SaleListComponent,
    ProductListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
