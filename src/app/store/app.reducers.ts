import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    ui: reducers.UiState;
}

export const appReduces: ActionReducerMap<AppState> = {
    ui: reducers.uiReducer,
};
