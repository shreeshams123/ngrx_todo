import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { toDoReducer } from './store/todo.reducers';

@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    DashboardComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({todos:toDoReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
