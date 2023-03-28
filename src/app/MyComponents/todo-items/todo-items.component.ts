import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  @Input() todo: Todo
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log("onCLick has been triggered")
  }
}
