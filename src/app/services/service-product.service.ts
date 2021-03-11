import { Injectable } from '@angular/core';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  products : Array <Product>=[];

  constructor() { }
  // delete products
  deleteProduct(prod :Product){
    const index = this.products.indexOf(prod,0);
    if (index > -1) {
       this.products.splice(index, 1); }

  }
  listeProducts():Product[] {
    return this.products;
  }
  ajouterProduct( prod: Product){
    this.products.push(prod); }
}
