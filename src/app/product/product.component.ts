import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() isFavorite = true;

@Output() myEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  
  OnClick(){
    this.myEvent.emit(5555);
  }
}
