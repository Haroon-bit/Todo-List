import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  inputText;
  @Output('addTodo') addTodo = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let obj = {
      id : Math.floor(Math.random()*100),
      title : this.inputText,
      isCompleted : false
    }

    this.addTodo.emit(obj);
    this.inputText = ''
  }

}
