import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-to-dos/list-to-dos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo
  constructor(private todoService:TodoDataService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(this.id,'',false,new Date());
    
    if(this.id != -1){
      this.todoService.retrieveTodo('rohit',this.id).subscribe(
      data => this.todo = data
      );
    }
    
  }

  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('rohit',this.todo).subscribe(
        data=>{
          //console.log(data)
        this.router.navigate(['todos']);
      }
      );
    }
    else{
          this.todoService.updateTodo('rohit',this.id,this.todo).subscribe(
          data=>{
            //console.log(data)
          this.router.navigate(['todos']);
        }
        );
    }
  }

}
