import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  editTodoSource = new Subject<any>();
  $todoObserver = this.editTodoSource.asObservable();

  constructor() { }

  sendEditTodo(todo){
    this.editTodoSource.next(todo);
  }

}
