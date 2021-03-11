import { Injectable } from '@angular/core';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  products : Product[]
  product :Product
  constructor() {
    this.products = [
      { id : 1, title : "PC Asus", description : "product 1"},
      { id : 2, title : "Imprimante Epson",description : "product 2" },
      { id : 3, title :"Tablette Samsung", description :  "product 3"}
     ];
  }
  // delete products
  deleteProduct(prod : Product){
    const index = this.products.indexOf(prod,0);
    if (index > -1) {
       this.products.splice(index, 1); }

  }
  // product constructor
  // retourne la liste des produit
  listeProducts():Product[] {
    return this.products;
  }
  ajouterProduct( prod: Product){
    this.products.push(prod);
   }
   // retourne  l'id de produit pour editer
   consulterProduct(id:number): Product{
    this.product = this.products.find(p => p.id == id);
     return this.product;
    }
 // update component.ts
    updateProduct(prod :Product){
      this.deleteProduct(prod);
      this.ajouterProduct(prod);

    }

  


}



