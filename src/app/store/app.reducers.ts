import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    ui: reducers.UiState;
    api: reducers.ApiState;

}

export const appReducers: ActionReducerMap<AppState> = {
    ui: reducers.uiReducer,
    api: reducers.apiReducer,
};
