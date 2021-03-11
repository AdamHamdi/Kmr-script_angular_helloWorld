import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceProductService } from './../services/service-product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() isFavorite = true;

@Output() myEvent = new EventEmitter();


  constructor(private product_service: ServiceProductService) {
    
  }

  ngOnInit(): void {
  }

  OnClick(){
    this.myEvent.emit(5555);
  }
}
