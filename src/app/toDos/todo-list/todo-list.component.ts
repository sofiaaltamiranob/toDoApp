import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  toDos: Todo[] = [];

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('todos')
    .subscribe( todos => this.toDos =  todos)
  }

}
