import { createReducer, on } from "@ngrx/store";
import { decrementAction, incrementAction, resetAction } from "./counter.action";
import { state } from "@angular/animations";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(incrementAction, state => state + 1),
    on(decrementAction, state => state - 1),
    on(resetAction, state => 0)
)