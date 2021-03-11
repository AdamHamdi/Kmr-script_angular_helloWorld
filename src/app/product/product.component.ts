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
products : Array <Product>=[
  {
    id : 1,
    title :"product 1",
    description :"product 1"
  },
];

  constructor(private prodservice: ServiceProductService) {

  }

  ngOnInit(): void {
  }

  // OnClick(){
  //   this.myEvent.emit(5555);
  // }
}
