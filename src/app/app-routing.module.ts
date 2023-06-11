import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { ProductsCreateComponent } from './component/products-create/products-create.component';
import { ProductsDetailComponent } from './component/products-detail/products-detail.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:"", component:ProductsListComponent},
  {path:"product-create", component:ProductsCreateComponent},
  {path:"product-update/:id", component:ProductsUpdateComponent},
  {path:"products-detail/:id", component:ProductsDetailComponent},
  {path:"login", component:LoginComponentComponent},
  {path:"register", component:RegisterComponent},
];

//cái list đâu

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
