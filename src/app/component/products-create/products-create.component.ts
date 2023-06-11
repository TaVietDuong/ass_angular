import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import {UntypedFormBuilder,Validators} from '@angular/forms'
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interface/IProduct';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {
  productsForm = this.formBuildder.group({name:[""],price:[0],desc:[""]})
  constructor (private formBuildder:UntypedFormBuilder ,private brd:ProductService){

  }

  add(){
    const products:IProduct = {
      id:"",
      name: this.productsForm.value.name,
      price: this.productsForm.value.price,
      desc: this.productsForm.value.desc,
    }
    this.brd.addProduct(products).subscribe(()=>alert("addProduct successfully"))
  }
}
