import { Component } from '@angular/core'
import {Todo} from './../../models/Todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  title = "Todo-APP_Viraj";
  constructor(){

  }

  todos!: Todo[];

  inputTodo:string = "";


  ngOnInit():void{
    this.todos = [
      {
        content:"First Content",
        completed:false
      },
      {
        content:"Second Content",
        completed:false
      }
    ]

  }

  toggleDone(id:number):void{
    this.todos.map((v,i) => {
      if(i == id ) v.completed = !v.completed;
      return v;
    })

  }
  deleteTodo(id:number):void{
   this.todos = this.todos.filter((v,i) => i!=id); 
  }



  
  addTodo():void{
    this.todos.push({
      content:this.inputTodo,
      completed:false
    })
    this.inputTodo = ""
  }
}
