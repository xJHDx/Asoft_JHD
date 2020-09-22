import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomersListComponent } from '../customers-list/customers-list.component';
import { SaleListComponent } from '../sale-list/sale-list.component'
import { ProductListComponent } from '../product-list/product-list.component';


const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'customers-list', component: CustomersListComponent },
    { path: 'sale-list', component: SaleListComponent },
    { path: 'product-list', component: ProductListComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }