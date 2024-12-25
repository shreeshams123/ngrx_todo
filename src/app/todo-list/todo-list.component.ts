import { Component } from '@angular/core';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { selectAllToDos } from '../store/todo.selectors';
import { Observable } from 'rxjs';
import { ToDo } from '../store/todo.reducers';
import { deleteToDo } from '../store/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
todos$:Observable<ToDo[]>
constructor(private store:Store<AppState>){
this.todos$=this.store.select(selectAllToDos);
}

handleRemove(title:string){
  this.store.dispatch(deleteToDo({title}));
}
}
