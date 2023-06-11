import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/interface/IProduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  product:IProduct[]=[]
  constructor (private productService:ProductService){
    this.productService.getProducts().subscribe((product)=>this.product=product)
}
onRemove(id:any){
  this.productService.deleteProduct(id).subscribe(()=>this.product=this.product.filter(item=>item.id!=id))
}
}

