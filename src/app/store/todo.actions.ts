import { createAction, props } from "@ngrx/store";

export const addToDo=createAction(
    '[ToDo] AddToDo',props<{todo:any}>()
);
export const deleteToDo=createAction(
    '[ToDo] DeleteToDo',props<{ title:string}>()
);
export const loadToDo=createAction(
    '[ToDo] GetToDos'
)