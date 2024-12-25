import { createReducer, on } from "@ngrx/store";
import { addToDo, deleteToDo, loadToDo } from "./todo.actions";
export interface ToDo{
    title:string
}

export const initialToDos: ToDo[]=[];
export const toDoReducer=createReducer(
    initialToDos,
    on(addToDo,(state,{todo})=>{
        return[...state,todo];
    }),
    on(deleteToDo,(state,{title})=>{
        return state.filter(todo=>todo.title!=title)
    }),
    on(loadToDo,(state)=>{
        return [...state];
    })
)