import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToDo } from "./todo.reducers";


export const selectToDos=createFeatureSelector<ToDo[]>('todos');
export const selectAllToDos=createSelector(
    selectToDos,(todos)=>todos
);