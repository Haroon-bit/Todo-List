import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('todo') todo:any;
  @Output('deleteTodo') deleteTodo = new EventEmitter<any>();
  @Output('completeTodo') completeTodo = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id){
    this.deleteTodo.emit(id);
  }

  onComplete(id){
    this.completeTodo.emit(id);
  }

}
