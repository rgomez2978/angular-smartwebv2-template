import { createReducer, on } from "@ngrx/store";
import * as ownActions from "../actions";
import { ApiConnect } from "../models/apiConnect.models";

export interface ApiState {
    apiConLayout: ApiConnect;
    apiConHome: ApiConnect;
    arrayLayout: [];
    arrayHome: [];
}

export const apiState: ApiState = {
    apiConLayout: { apiCon: false, apiConEs: false, apiConEn: false },
    apiConHome: { apiCon: false, apiConEs: false, apiConEn: false },
    arrayLayout: [],
    arrayHome: []
};

const _apiReducer = createReducer(apiState,
    on(ownActions.setAPIConnectLayout, (state, { apiConLayout }) => ({ ...state, apiConLayout: { ...apiConLayout } })),
    on(ownActions.setAPIConnectHome, (state, { apiConHome }) => ({ ...state, apiConHome: { ...apiConHome } })),
    on(ownActions.setArrayLayout, (state, { arrayLayout }) => ({ ...state, arrayLayout })),
    on(ownActions.setArrayHome, (state, { arrayHome }) => ({ ...state, arrayHome })),
);

export function apiReducer(state: any, action: any) {
    return _apiReducer(state, action);
}
