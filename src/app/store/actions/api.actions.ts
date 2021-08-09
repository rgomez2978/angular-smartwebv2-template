import { createAction, props } from "@ngrx/store";
import { ApiConnect } from "../models/apiConnect.models";
import { ApiSetArray } from '../models/apiSetArray.models';

// API CONNECT
export const setAPIConnectLayout = createAction("[API] Set API Connect Layout", props<{ apiConLayout: ApiConnect }>());
export const setAPIConnectHome = createAction("[API] Set API Connect Home", props<{ apiConHome: ApiConnect }>());
export const setAPIConnectProducts = createAction("[API] Set API Connect Products", props<{ apiConProducts: ApiConnect }>());
export const setAPIConnectPlans = createAction("[API] Set API Connect Plans", props<{ apiConPlans: ApiConnect }>());
export const setAPIConnectResources = createAction("[API] Set API Connect Resources", props<{ apiConResources: ApiConnect }>());
export const setAPIConnectHelp = createAction("[API] Set API Connect Help", props<{ apiConHelp: ApiConnect }>());
export const setAPIConnectHelpF = createAction("[API] Set API Connect Help - Features", props<{ apiConHelpF: ApiConnect }>());
export const setAPIConnectHelpD = createAction("[API] Set API Connect Help - Details", props<{ apiConHelpD: ApiConnect }>());
export const setAPIConnectHelpS = createAction("[API] Set API Connect Help - Search", props<{ apiConHelpS: ApiConnect }>());
export const setAPIConnectNews = createAction("[API] Set API Connect News", props<{ apiConNews: ApiConnect }>());
export const setAPIConnectNewsD = createAction("[API] Set API Connect News - Details", props<{ apiConNewsD: ApiConnect }>());
export const setAPIConnectNewsS = createAction("[API] Set API Connect News - Search", props<{ apiConNewsS: ApiConnect }>());
export const setAPIConnectAbout = createAction("[API] Set API Connect About", props<{ apiConAbout: ApiConnect }>());
export const setAPIConnectWhy = createAction("[API] Set API Connect Why", props<{ apiConWhy: ApiConnect }>());
export const setAPIConnectLegal = createAction("[API] Set API Connect Legal", props<{ apiConLegal: ApiConnect }>());
export const setAPIConnectPolicies = createAction("[API] Set API Connect Policies", props<{ apiConPolicies: ApiConnect }>());
export const setAPIConnectSites = createAction("[API] Set API Connect Sites", props<{ apiConSites: ApiConnect }>());


// ARRAYS
export const setArrayLayout = createAction("[API ARRAY] Set Array Layout", props<{ arrayLayout: ApiSetArray }>());
export const setArrayHome = createAction("[API ARRAY] Set Array Home", props<{ arrayHome: ApiSetArray }>());
export const setArrayProducts = createAction("[API ARRAY] Set Array Products", props<{ arrayProducts: ApiSetArray }>());
export const setArrayPlans = createAction("[API ARRAY] Set Array Plans", props<{ arrayPlans: ApiSetArray }>());
export const setArrayResources = createAction("[API ARRAY] Set Array Resources", props<{ arrayResources: ApiSetArray }>());
export const setArrayHelp = createAction("[API ARRAY] Set Array Help", props<{ arrayHelp: ApiSetArray }>());
export const setArrayHelpF = createAction("[API ARRAY] Set Array Help - Features", props<{ arrayHelpF: ApiSetArray }>());
export const setArrayHelpD = createAction("[API ARRAY] Set Array Help - Details", props<{ arrayHelpD: ApiSetArray }>());
export const setArrayHelpS = createAction("[API ARRAY] Set Array Help - Search", props<{ arrayHelpS: ApiSetArray }>());
export const setArrayNews = createAction("[API ARRAY] Set Array News", props<{ arrayNews: ApiSetArray }>());
export const setArrayNewsD = createAction("[API ARRAY] Set Array News - Details", props<{ arrayNewsD: ApiSetArray }>());
export const setArrayNewsS = createAction("[API ARRAY] Set Array News - Search", props<{ arrayNewsS: ApiSetArray }>());
export const setArrayAbout = createAction("[API ARRAY] Set Array About", props<{ arrayAbout: ApiSetArray }>());
export const setArrayWhy = createAction("[API ARRAY] Set Array Why", props<{ arrayWhy: ApiSetArray }>());
export const setArrayLegal = createAction("[API ARRAY] Set Array Legal", props<{ arrayLegal: ApiSetArray }>());
export const setArrayPolicies = createAction("[API ARRAY] Set Array Policies", props<{ arrayPolicies: ApiSetArray }>());
export const setArraySites = createAction("[API ARRAY] Set Array Sites", props<{ arraySites: ApiSetArray }>());
