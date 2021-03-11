import { Component, OnInit } from '@angular/core';
import { ServiceProductService } from './../services/service-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private product_service:ServiceProductService) { }

  ngOnInit(): void {
  }

}
