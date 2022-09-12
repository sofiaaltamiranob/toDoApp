import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoAddComponent } from './todo-add/to-do-add.component';
import { FooterComponent } from './todo-footer/footer.component';
import { ItemComponent } from './todo-item/item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';



@NgModule({
  declarations: [
    ToDoAddComponent,
    FooterComponent,
    ItemComponent,
    TodoListComponent,
    TodoPageComponent],
  imports: [
    CommonModule,
  ]
})
export class TodoModule { }
