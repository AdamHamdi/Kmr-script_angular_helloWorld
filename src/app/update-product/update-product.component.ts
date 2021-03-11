import { Component, OnInit } from '@angular/core';
import { ServiceProductService } from './../services/service-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../interfaces/product';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
currentProduct = new Product();

   constructor(private prodservice: ServiceProductService , private activatedroute :ActivatedRoute, private router :Router,
    private title: Title) {
      this.title.setTitle('Update Products Manager');


   }

   ngOnInit(): void {
    this.currentProduct = this.prodservice.consulterProduct(this.activatedroute.snapshot.params.id);
    console.log(this.currentProduct);
   }
   updateProduct(){
    console.log(this.currentProduct);
    this.prodservice.updateProduct(this.currentProduct);
    this.router.navigate(['products'])
   }

}
