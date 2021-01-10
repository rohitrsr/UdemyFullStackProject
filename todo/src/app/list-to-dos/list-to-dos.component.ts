import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){}
}

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  // todos=[
  //   new Todo(1,'Learn to Dance',false,new Date()),
  //   new Todo(2,'Learn to Code',false,new Date()),
  //   new Todo(3,'Learn to play',false,new Date())
  //   // {id:1,
  //   // description:'Learn to Dance'},
  //   // {id:2,
  //   //   description:'Learn to sing'},
  //   // {id:3,
  //   //   description:'Learn to code'}
  //   ]

  todos:Todo[]
  message :string
  constructor(private todoDataService:TodoDataService,
    private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoDataService.retrieveAllTodos('rohit').subscribe(
      response=>{
        //console.log(response);
      this.todos = response}
    );
  }

  deleteTodo(id){
    this.todoDataService.deleteTodo('rohit',id).subscribe(
      response=>{
        //console.log(response);
      this.message=`Todo with id ${id} deleted successfully`;
        this.refreshTodos();
    }
    );
  }

  updateTodo(id){
   this.router.navigate(['todo',id]);
  }

  addTodo(){
    this.router.navigate(['todo',-1]);
  }

}
