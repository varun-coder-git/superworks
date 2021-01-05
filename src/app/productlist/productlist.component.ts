import { Component, OnInit} from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Product[];
  img_url = "../../assets/images/";
  
  selectedProducts = [];
  constructor(private prodService: ProductService) {

  }

  ngOnInit(): void {
    this.products = this.prodService.onGet();
    this.selectedProducts = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : []
  }


  onAddToCart(id): void {
    if (!this.selectedProducts.includes(id)) {
      this.selectedProducts.push(id);
      localStorage.setItem('cartProducts', JSON.stringify(this.selectedProducts));
      
    }
  }

  checkProductInCart(id) {
    return this.selectedProducts.includes(id)
  }

}
