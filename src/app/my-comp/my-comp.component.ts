import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  info={
    name:"adam",
    age:29

  }
  constructor( ) {



  }

  ngOnInit(): void {
  }
getInfo(){
  return "my name is " + this.info.name + " and i'm " + this.info.age +" years old." ;
}





}
