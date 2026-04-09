import { createReducer } from "@ngrx/store";
import { Istore } from "./store";

export const initialState: ReadonlyArray<Istore> = [
    {
        'id': 1,
        'name': 'John Doe',
        'username': 'johndoe',
        'email': 'pandiyan.vp18@gmail.com'
    },
    {
        'id': 1,
        'name': 'John Doe',
        'username': 'johndoe',
        'email': 'pandiyan.vp18@gmail.com'
    },
    {
        'id': 1,
        'name': 'John Doe',
        'username': 'johndoe',
        'email': 'pandiyan.vp18@gmail.com'
    }
];
  

export const empReducer = createReducer(initialState);
