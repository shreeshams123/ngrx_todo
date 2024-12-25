import { Component } from '@angular/core';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { addToDo } from '../store/todo.actions';
import { selectAllToDos } from '../store/todo.selectors';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent {
  constructor(private store:Store<AppState>){ }
title:string=''
handleAdd(){
  const newToDo={title:this.title};
  this.store.dispatch(addToDo({todo:newToDo}));
  console.log('added',this.title);
  this.title='';
}



}

