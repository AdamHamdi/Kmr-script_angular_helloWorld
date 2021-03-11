import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceProductService } from './../services/service-product.service';
import { Product } from './../interfaces/product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
// @Input() isFavorite = true;

// @Output() myEvent = new EventEmitter();
 products : Product[];


  constructor(private prodservice: ServiceProductService ) {
    this.products = prodservice.listeProducts();

  }

  ngOnInit(): void {

  }

  // OnClick(){
  //   this.myEvent.emit(5555);
  // }


  deleteProduct(prod : Product){
    let conf = confirm("Are you sure you are removing this product ?");
    if (conf)
    this.prodservice.deleteProduct(prod);
    return console.log(prod)
  }
}
