import { createReducer, on } from "@ngrx/store";
import * as ownActions from "../actions";
import { ApiConnect } from "../models/apiConnect.models";
import { ApiSetArray } from '../models/apiSetArray.models';

export interface ApiState {
    apiConLayout: ApiConnect;
    apiConHome: ApiConnect;
    apiConProducts: ApiConnect;
    apiConPlanes: ApiConnect;
    apiConResources: ApiConnect;
    apiConInfo: ApiConnect;
    apiConPolicies: ApiConnect;
    apiConSites: ApiConnect;
    apiConHelp: ApiConnect;
    apiConHelpF: ApiConnect;
    apiConHelpD: ApiConnect;
    apiConHelpS: ApiConnect;
    apiConNews: ApiConnect;
    apiConNewsD: ApiConnect;
    apiConNewsS: ApiConnect;

    arrayLayout: ApiSetArray;
    arrayHome: ApiSetArray;
    arrayProducts: ApiSetArray;
    arrayPlanes: ApiSetArray;
    arrayResources: ApiSetArray;
    arrayInfo: ApiSetArray;
    arrayPolicies: ApiSetArray;
    arraySites: ApiSetArray;
    arrayHelp: ApiSetArray;
    arrayHelpF: ApiSetArray;
    arrayHelpD: ApiSetArray;
    arrayHelpS: ApiSetArray;
    arrayNews: ApiSetArray;
    arrayNewsD: ApiSetArray;
    arrayNewsS: ApiSetArray;
    // newsCategory: string;
}

export const apiState: ApiState = {
    apiConLayout: { apiCon: false, apiLang: 'es' },
    apiConHome: { apiCon: false, apiLang: 'es' },
    apiConProducts: { apiCon: false, apiLang: 'es' },
    apiConPlanes: { apiCon: false, apiLang: 'es' },
    apiConResources: { apiCon: false, apiLang: 'es' },
    apiConInfo: { apiCon: false, apiLang: 'es' },
    apiConPolicies: { apiCon: false, apiLang: 'es' },
    apiConSites: { apiCon: false, apiLang: 'es' },
    apiConHelp: { apiCon: false, apiLang: 'es' },
    apiConHelpF: { apiCon: false, apiLang: 'es' },
    apiConHelpD: { apiCon: false, apiLang: 'es' },
    apiConHelpS: { apiCon: false, apiLang: 'es' },
    apiConNews: { apiCon: false, apiLang: 'es' },
    apiConNewsD: { apiCon: false, apiLang: 'es' },
    apiConNewsS: { apiCon: false, apiLang: 'es' },

    arrayLayout: { apiLang: 'es', apiArray: [] },
    arrayHome: { apiLang: 'es', apiArray: [] },
    arrayProducts: { apiLang: 'es', apiArray: [] },
    arrayPlanes: { apiLang: 'es', apiArray: [] },
    arrayResources: { apiLang: 'es', apiArray: [] },
    arrayInfo: { apiLang: 'es', apiArray: [] },
    arrayPolicies: { apiLang: 'es', apiArray: [] },
    arraySites: { apiLang: 'es', apiArray: [] },
    arrayHelp: { apiLang: 'es', apiArray: [] },
    arrayHelpF: { apiLang: 'es', apiArray: [] },
    arrayHelpD: { apiLang: 'es', apiArray: [] },
    arrayHelpS: { apiLang: 'es', apiArray: [] },
    arrayNews: { apiLang: 'es', apiArray: [] },
    arrayNewsD: { apiLang: 'es', apiArray: [] },
    arrayNewsS: { apiLang: 'es', apiArray: [] },
    // newsCategory: '0'

};

const _apiReducer = createReducer(apiState,
    on(ownActions.setAPIConnectLayout, (state, { apiConLayout }) => ({ ...state, apiConLayout: { ...apiConLayout }, })),
    on(ownActions.setAPIConnectHome, (state, { apiConHome }) => ({ ...state, apiConHome: { ...apiConHome } })),
    on(ownActions.setAPIConnectProducts, (state, { apiConProducts }) => ({ ...state, apiConProducts: { ...apiConProducts } })),
    on(ownActions.setAPIConnectPlanes, (state, { apiConPlanes }) => ({ ...state, apiConPlanes: { ...apiConPlanes } })),
    on(ownActions.setAPIConnectResources, (state, { apiConResources }) => ({ ...state, apiConResources: { ...apiConResources } })),
    on(ownActions.setAPIConnectInfo, (state, { apiConInfo }) => ({ ...state, apiConInfo: { ...apiConInfo } })),
    on(ownActions.setAPIConnectPolicies, (state, { apiConPolicies }) => ({ ...state, apiConPolicies: { ...apiConPolicies } })),
    on(ownActions.setAPIConnectSites, (state, { apiConSites }) => ({ ...state, apiConSites: { ...apiConSites } })),
    on(ownActions.setAPIConnectHelp, (state, { apiConHelp }) => ({ ...state, apiConHelp: { ...apiConHelp } })),
    on(ownActions.setAPIConnectHelpF, (state, { apiConHelpF }) => ({ ...state, apiConHelpF: { ...apiConHelpF } })),
    on(ownActions.setAPIConnectHelpD, (state, { apiConHelpD }) => ({ ...state, apiConHelpD: { ...apiConHelpD } })),
    on(ownActions.setAPIConnectHelpS, (state, { apiConHelpS }) => ({ ...state, apiConHelpS: { ...apiConHelpS } })),
    on(ownActions.setAPIConnectNews, (state, { apiConNews }) => ({ ...state, apiConNews: { ...apiConNews } })),
    on(ownActions.setAPIConnectNewsD, (state, { apiConNewsD }) => ({ ...state, apiConNewsD: { ...apiConNewsD } })),
    on(ownActions.setAPIConnectNewsS, (state, { apiConNewsS }) => ({ ...state, apiConNewsS: { ...apiConNewsS } })),

    on(ownActions.setArrayLayout, (state, { arrayLayout }) => ({ ...state, arrayLayout: { ...arrayLayout } })),
    on(ownActions.setArrayHome, (state, { arrayHome }) => ({ ...state, arrayHome: { ...arrayHome } })),
    on(ownActions.setArrayProducts, (state, { arrayProducts }) => ({ ...state, arrayProducts: { ...arrayProducts } })),
    on(ownActions.setArrayPlanes, (state, { arrayPlanes }) => ({ ...state, arrayPlanes: { ...arrayPlanes } })),
    on(ownActions.setArrayResources, (state, { arrayResources }) => ({ ...state, arrayResources: { ...arrayResources } })),
    on(ownActions.setArrayInfo, (state, { arrayInfo }) => ({ ...state, arrayInfo: { ...arrayInfo } })),
    on(ownActions.setArrayPolicies, (state, { arrayPolicies }) => ({ ...state, arrayPolicies: { ...arrayPolicies } })),
    on(ownActions.setArraySites, (state, { arraySites }) => ({ ...state, arraySites: { ...arraySites } })),
    on(ownActions.setArrayHelp, (state, { arrayHelp }) => ({ ...state, arrayHelp: { ...arrayHelp } })),
    on(ownActions.setArrayHelpF, (state, { arrayHelpF }) => ({ ...state, arrayHelpF: { ...arrayHelpF } })),
    on(ownActions.setArrayHelpD, (state, { arrayHelpD }) => ({ ...state, arrayHelpD: { ...arrayHelpD } })),
    on(ownActions.setArrayHelpS, (state, { arrayHelpS }) => ({ ...state, arrayHelpS: { ...arrayHelpS } })),
    on(ownActions.setArrayNews, (state, { arrayNews }) => ({ ...state, arrayNews: { ...arrayNews } })),
    on(ownActions.setArrayNewsD, (state, { arrayNewsD }) => ({ ...state, arrayNewsD: { ...arrayNewsD } })),
    on(ownActions.setArrayNewsS, (state, { arrayNewsS }) => ({ ...state, arrayNewsS: { ...arrayNewsS } })),
    // on(ownActions.setNewsCategory, (state, { newsCategory }) => ({ ...state, newsCategory })),

);

export function apiReducer(state: any, action: any) {
    return _apiReducer(state, action);
}
