import { createAction, props } from "@ngrx/store";
import { ApiConnect } from "../models/apiConnect.models";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  CONFIGURACION DE APIS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
export const setAPIConnectLayout = createAction(
    "[API] Set API CONNECT LAYOUT",
    props<{ apiConLayout: ApiConnect }>()
);

export const setAPIConnectHome = createAction(
    "[API] Set API CONNECT HOME",
    props<{ apiConHome: ApiConnect }>()
);


export const setArrayLayout = createAction(
    "[API ARRAY] Set Array Layout",
    props<{ arrayLayout: [] }>()
);
export const setArrayHome = createAction(
    "[API ARRAY] Set Array Home",
    props<{ arrayHome: [] }>()
);