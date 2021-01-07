import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [{
    "p_id": 101,
    "p_name": "Check Print Shirt",
    "p_dsc": "description1",
    "p_img": "shirt.png",
    "p_price": 1200
  },

  {
    "p_id": 102,
    "p_name": "Gloria High Logo Sneaker",
    "p_dsc": "description2",
    "p_img": "gloria.jpg",
    "p_price": 1100
  },

  {
    "p_id": 103,
    "p_name": "Cate Rigid Bag",
    "p_dsc": "description3",
    "p_img": "bag.jpg",
    "p_price": 2800
  },

  {
    "p_id": 104,
    "p_name": "Hooded SweatShirt",
    "p_dsc": "description4",
    "p_img": "hoodie.jpg",
    "p_price": 1500
  },

  {
    "p_id": 105,
    "p_name": "H & M Men's Jacket",
    "p_dsc": "description5",
    "p_img": "jacket.jpeg",
    "p_price": 2700
  },

  {
    "p_id": 106,
    "p_name": "Red Tape Sports Shoe",
    "p_dsc": "description6",
    "p_img": "shoes.jpg",
    "p_price": 2900
  }
  ];

  onGet() {
    return this.products;
  }
  constructor() { }


}
