import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  info={
    name : "adam",
    age : 29

  }
  number =5;
  imgSrc ='../../assets/img/ts_js.PNG';
  isActive = true;
  val="Hello World";
  constructor( ) {



  }

  ngOnInit(): void {
  }
getInfo(){
  return "my name is " + this.info.name + " and i'm " + this.info.age +" years old." ;
}
onClick(e){
  console.log(e.target);
}

onKeyUp(e){
  console.log(e.target.value);
}




}
