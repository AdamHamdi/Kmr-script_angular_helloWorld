import { Injectable } from '@angular/core';
import { Product } from './../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  products : Product[]
  product :Product
  constructor() {
    //changer les donnes au type array
    let  savedProducts= localStorage.getItem('products');
    if (savedProducts)
     this.products=JSON.parse(savedProducts);
     else
     this.products=[];
  }
  // delete products
  deleteProduct(prod : Product){
    const index = this.products.indexOf(prod,0);
    if (index > -1) {
       this.products.splice(index, 1);
       }
       this.saveAll();

  }
  // product constructor
  // retourne la liste des produit
  listeProducts():Product[] {
    return this.products;
  }
  ajouterProduct( prod: Product){
    this.products.push(prod);
    this.saveAll();
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
      this.saveAll();

    }
// save data in local storage
    saveAll(){
      localStorage.setItem('products',JSON.stringify(this.products));
    }



}



