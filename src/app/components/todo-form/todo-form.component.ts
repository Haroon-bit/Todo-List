import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  inputText;
  @Output('addTodo') addTodo = new EventEmitter<any>();
  todo: any;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.$todoObserver.subscribe(todo => {
      this.todo = todo;
      this.inputText = this.todo.title;
    })
  }

  onSubmit(){
    let obj;
    if(this.todo == undefined){
      obj = {
        // id : Math.floor(Math.random()*100),
        title : this.inputText,
        isCompleted : false
      }

      this.todoService.saveTodo(obj).subscribe(res=>{
        this.addTodo.emit(res);
      })
    }else{
      obj = { ...this.todo , title:this.inputText };
      this.todoService.updateTodo(obj.id,obj).subscribe(res=>{
        this.addTodo.emit(res);
      })
    }
    

    // this.addTodo.emit(obj);
    this.inputText = '';
    this.todo = undefined;
  }



}
