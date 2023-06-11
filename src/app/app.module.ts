import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { ProductsCreateComponent } from './component/products-create/products-create.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ProductsDetailComponent } from './component/products-detail/products-detail.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [AppComponent, ProductsListComponent, ProductsCreateComponent, ProductsUpdateComponent, ProductsDetailComponent, LoginComponentComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
