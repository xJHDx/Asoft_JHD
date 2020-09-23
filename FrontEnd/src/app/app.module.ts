import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/auth/navigation/navigation.component';
import { CustomersListComponent } from './componentes/auth/customers-list/customers-list.component';


/** Importar conecion a api service */
import { CustomeService } from '../app/componentes/services/custome.service';
import { SaleListComponent } from './componentes/auth/sale-list/sale-list.component';
import { ProductListComponent } from './componentes/auth/product-list/product-list.component';
import { importType } from '@angular/compiler/src/output/output_ast';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CustomeService,
    SaleListComponent,
    ProductListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
