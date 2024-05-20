import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList:any[]=[];
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
}
