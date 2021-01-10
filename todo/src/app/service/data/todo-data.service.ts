import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-to-dos/list-to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username){
    // console.log(this.http.get('http://localhost:8080/hello-world-bean'));
    return this.http.get<Todo[]>(`${JPA_API_URL}/user/${username}/todos`);
     //    console.log("Welcome data service");
   }

   deleteTodo(username,id){
    // console.log(this.http.get('http://localhost:8080/hello-world-bean'));
    return this.http.delete
    (`${JPA_API_URL}/user/${username}/todos/${id}`);
     //    console.log("Welcome data service");
   }

   retrieveTodo(username,id){
    // console.log(this.http.get('http://localhost:8080/hello-world-bean'));
    return this.http.get<Todo>
    (`${JPA_API_URL}/user/${username}/todos/${id}`);
     //    console.log("Welcome data service");
   }

   updateTodo(username,id,todo){
    // console.log(this.http.get('http://localhost:8080/hello-world-bean'));
    return this.http.put<Todo>
    (`${JPA_API_URL}/user/${username}/todos/${id}`,todo);
     //    console.log("Welcome data service");
   }

   createTodo(username,todo){
    // console.log(this.http.get('http://localhost:8080/hello-world-bean'));
    return this.http.post
    (`${JPA_API_URL}/user/${username}/todos`,todo);
     //    console.log("Welcome data service");
   }
   
}
