import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('myName') myName:String;
  @Input('myNameList') myNameList;
  @Output('listen') listen = new EventEmitter<any>();

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(res=>{
      
    })
   }

  ngOnInit(): void {
  }

  onClick(){
    this.listen.emit();
  }

}
