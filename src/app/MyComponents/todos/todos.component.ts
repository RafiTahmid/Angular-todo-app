import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[]
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "This is the title",
        desc: "Description",
        active: true
      },
      {
        sno: 2,
        title: "This is the title2",
        desc: "Description2",
        active: true
      },
      {
        sno: 3,
        title: "This is the title3",
        desc: "Description3",
        active: true
      }
    ]
  }

  deleteTodo(todo: Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
  }
}
