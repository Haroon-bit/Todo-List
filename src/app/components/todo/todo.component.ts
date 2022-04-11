import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('todo') todo:any;
  @Output('deleteTodo') deleteTodo = new EventEmitter<any>();
  @Output('completeTodo') completeTodo = new EventEmitter<any>();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  onDelete(id){
    this.deleteTodo.emit(id);
  }

  onComplete(id){
    this.completeTodo.emit(id);
  }

  onEdit(id){
    this.todoService.sendEditTodo(this.todo);
    this.deleteTodo.emit(id)
  }

}
