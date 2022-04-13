import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  editTodoSource = new Subject<any>();
  $todoObserver = this.editTodoSource.asObservable();
  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  public sendEditTodo(todo){
    this.editTodoSource.next(todo);
  }

  public saveTodo(todo):Observable<any>{
    return this.http.post(`${this.baseUrl}/todos`,todo);
  }

  public getAllTodos():Observable<any>{
    return this.http.get(`${this.baseUrl}/todos`);
  }

  public deleteTodo(id):Observable<any>{
    return this.http.delete(`${this.baseUrl}/todos/${id}`);
  }

  public updateTodo(id,todo):Observable<any>{
    return this.http.put(`${this.baseUrl}/todos/${id}`,todo);
  }

 

}
