import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataLoaded=false;
  products: Product[] = []
  
  constructor(private productService:ProductService) { }

  //component ilk kez açıldığında component DOMa yerleştiğinde çalışan metodumuz dur
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
     this.productService.getProducts().subscribe(response=>{
       this.products=response.data;
       this.dataLoaded=true;
     })
  }
}
