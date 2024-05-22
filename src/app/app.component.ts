import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-website-angular';
  cartProducts:any[]=[];
  constructor(private productService: ProductService){
    this.productService.cartAddedSubject.subscribe(result=>{
      this.loadCart()
    })
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(){
    this.productService.getCartItemsByCustId(1).subscribe((result:any)=>{
      this.cartProducts = result.data;
    });
  }
}
