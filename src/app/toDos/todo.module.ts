import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";


import { ToDoAddComponent } from './todo-add/to-do-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { ItemComponent } from './todo-item/item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';



@NgModule({
  declarations: [
    ToDoAddComponent,
    TodoFooterComponent,
    ItemComponent,
    TodoListComponent,
    TodoPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
