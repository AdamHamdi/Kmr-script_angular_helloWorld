import { Component, OnInit } from '@angular/core';
import { ServiceProductService } from './../services/service-product.service';
import { Product } from './../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProduct = new Product();
  constructor(private prodservice:ServiceProductService ,private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(){
     console.log(this.newProduct);
     this.prodservice.ajouterProduct(this.newProduct);
     this.router.navigate(['products'])
    }
}
