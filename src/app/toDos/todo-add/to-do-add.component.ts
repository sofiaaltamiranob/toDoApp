import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent implements OnInit {

  txtInput: FormControl ;

  constructor( private store : Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required )
  }

  ngOnInit(): void {
  }

  agregar(){
    if (this.txtInput.invalid){ return;}
    this.store.dispatch(actions.crear({ texto: this.txtInput.value}));
    this.txtInput.reset();
  }

}
