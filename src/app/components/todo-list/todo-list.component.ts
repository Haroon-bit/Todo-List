import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList= [];
  showRoutes = false;

  constructor(private todoService:TodoService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  addTodo(todo){
    this.todoList.push(todo);
  }

  deleteTodo(obj){
    if(obj.type == 'delete'){
      this.todoService.deleteTodo(obj.id).subscribe(res=>{
        this.getAllTodos(); 
      })
    }else{
      this.todoList = this.todoList.filter(t=> t.id !== obj.id);
    }
    
  }

  completeTodo(id){
    let index = this.todoList.findIndex(t=> t.id == id);
    this.todoList[index].isCompleted = !this.todoList[index].isCompleted;
    this.todoService.updateTodo(this.todoList[index].id,this.todoList[index]).subscribe(res=>{
      this.getAllTodos();
    })

  }

  getAllTodos(){
    this.todoService.getAllTodos().subscribe(res=>{
      this.todoList = res;
    })
  }

  routeToChild(){
    this.router.navigate(['child'], 
    {
      queryParams:{
        id:1,
        name:"Haroon"
      }
    })
  }

}
