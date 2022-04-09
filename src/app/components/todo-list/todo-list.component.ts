import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList= [];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo){
    this.todoList.push(todo);
  }

  deleteTodo(id){
    this.todoList = this.todoList.filter(t=> t.id !== id);
  }

  completeTodo(id){
    let index = this.todoList.findIndex(t=> t.id == id);
    this.todoList[index].isCompleted = !this.todoList[index].isCompleted;
    console.log(this.todoList)
  }

}
