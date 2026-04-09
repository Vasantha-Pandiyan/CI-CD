import { createReducer, on } from "@ngrx/store";
import { addCustomCounter, decrement, increment, removeCustomCounter, reset } from "./counter.action";


export const intialState: number = 0;

export const counterReducer = createReducer (
    intialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, () => intialState),
    on(addCustomCounter, (state, action) => state + action.addValue),
    on(removeCustomCounter, (state, action) => state - action.removeValue)
)