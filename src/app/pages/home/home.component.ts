import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:any[]=[];
  cartObj: any = {
    "CartId":0,
    "CustId":1,
    "ProductId":0,
    "Quantity":0,
    "AddedDate":"2023-04-27T07:12:40.926Z"
  }
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.loadAllProducts();
    console.log(this.productList);
  }

  loadAllProducts(){
    this.productService.getAllProducts().subscribe((result:any)=>{
      this.productList = result.data;

    })
  }

  addItemToCart(productId:number){
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result:any)=>{
      if(result.result){
        alert("Product added successfully")
        this.productService.cartAddedSubject.next(true)
      }
  })
  }

}
