import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  all_products: Product[];
  ary = [];
  productArray = [];
  img_url = "../../assets/images/";
   total:number;
  constructor(private prodService: ProductService) { }

  ngOnInit(): void {

    this.ary = JSON.parse(localStorage.getItem('cartProducts'));

    this.total=this.ary.length;

    // this.all_products = this.prodService.onGet();
    this.cartProducts();
  }
  cartProducts() {
    let cart_products = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : []
   // all_products = cart_products;
   console.log(cart_products);
   this.all_products = this.prodService.onGet();
   console.log(this.all_products);
    if (cart_products.length) {
      cart_products.forEach((cart_p_id) => {
        for (let i = 0; i < this.all_products.length; i++) {
          if (this.all_products[i].p_id == cart_p_id) {
            this.productArray.push(this.all_products[i])
          }
        }
      })
      console.log(this.productArray);
      return this.productArray;
    }
  }
}

