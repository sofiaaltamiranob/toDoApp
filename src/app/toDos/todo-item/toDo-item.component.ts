import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.state';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './toDo-item.component.html',
  styleUrls: ['./toDo-item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() toDo: Todo = {
    id: new Date().getTime(),
    texto: "hola",
    completado: false
  }
  @ViewChild('inputFisico',{ static: false }) txtFisico!: ElementRef;

  chkCompletado!: FormControl ;
  txtInput!: FormControl ;
  editing : boolean = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
   this.toDo ={
    ...this.toDo,
   }
   this.chkCompletado = new FormControl( this.toDo.completado);
   this.txtInput = new FormControl(this.toDo.texto, Validators.required);
   this.chkCompletado.valueChanges.subscribe( () => {
    this.store.dispatch( actions.toggle({ id: this.toDo.id}))
  })
  }

  editar(){
    this.editing = true;
    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, 1);
  }

  finishEdition(){
    this.editing = false
  }

}
