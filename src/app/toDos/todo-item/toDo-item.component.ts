import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Todo } from '../models/todo.model';

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

  constructor() { }

  ngOnInit(): void {
   this.toDo ={
    ...this.toDo,
   }
   this.chkCompletado = new FormControl( this.toDo.completado);
   this.txtInput = new FormControl(this.toDo.texto, Validators.required);
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
