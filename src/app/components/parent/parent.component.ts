import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName:String = "Haroon";
  myNameList = ["Haroon","Danish","Jamshad"];

  constructor() { }

  ngOnInit(): void {
  }


  childListen(){
    console.log("Hello World");
  }

}
