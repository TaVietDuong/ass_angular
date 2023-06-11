import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import {UntypedFormBuilder,Validators} from '@angular/forms'
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interface/IProduct';
@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent {
  product!:IProduct
  productsForm = this.formBuildder.group({name:[""],price:[0],desc:[""]})
  constructor (private formBuildder:UntypedFormBuilder ,private brd:ProductService , private router:ActivatedRoute){
    this.router.params.subscribe((params)=>{
      this.brd.getProductById(params['id']).subscribe((res)=>{this.product=res
      this.productsForm.patchValue({
        name: res.name,
        price: res.price,
        desc: res.desc,
      })})
    })
  }

  update(){
    const products:IProduct = {
      ...this.product,
      name: this.productsForm.value.name,
      price: this.productsForm.value.price,
      desc: this.productsForm.value.desc,
    }
    this.brd.updateProduct(products).subscribe(()=>alert("updateProduct successfully"))
  }
}
