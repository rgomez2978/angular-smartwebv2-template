import { createReducer, on } from "@ngrx/store";
import * as ownActions from "../actions";
import { ApiConnect } from "../models/apiConnect.models";
import { ApiSetArray } from '../models/apiSetArray.models';

export interface ApiState {
    apiConLayout: ApiConnect;
    apiConHome: ApiConnect;
    apiConProducts: ApiConnect;
    apiConPlans: ApiConnect;
    apiConResources: ApiConnect;
    apiConHelp: ApiConnect;
    apiConHelpF: ApiConnect;
    apiConHelpD: ApiConnect;
    apiConHelpS: ApiConnect;
    apiConNews: ApiConnect;
    apiConNewsD: ApiConnect;
    apiConNewsS: ApiConnect;
    apiConAbout: ApiConnect;
    apiConWhy: ApiConnect;
    apiConLegal: ApiConnect;
    apiConPolicies: ApiConnect;
    apiConSites: ApiConnect;
    apiConContacts: ApiConnect;

    arrayLayout: ApiSetArray;
    arrayHome: ApiSetArray;
    arrayProducts: ApiSetArray;
    arrayPlans: ApiSetArray;
    arrayResources: ApiSetArray;
    arrayHelp: ApiSetArray;
    arrayHelpF: ApiSetArray;
    arrayHelpD: ApiSetArray;
    arrayHelpS: ApiSetArray;
    arrayNews: ApiSetArray;
    arrayNewsD: ApiSetArray;
    arrayNewsS: ApiSetArray;
    arrayAbout: ApiSetArray;
    arrayWhy: ApiSetArray;
    arrayLegal: ApiSetArray;
    arrayPolicies: ApiSetArray;
    arraySites: ApiSetArray;
    arrayContacts: ApiSetArray;
}

export const apiState: ApiState = {
    apiConLayout: { apiCon: false, apiLang: 'es' },
    apiConHome: { apiCon: false, apiLang: 'es' },
    apiConProducts: { apiCon: false, apiLang: 'es' },
    apiConPlans: { apiCon: false, apiLang: 'es' },
    apiConResources: { apiCon: false, apiLang: 'es' },
    apiConHelp: { apiCon: false, apiLang: 'es' },
    apiConHelpF: { apiCon: false, apiLang: 'es' },
    apiConHelpD: { apiCon: false, apiLang: 'es' },
    apiConHelpS: { apiCon: false, apiLang: 'es' },
    apiConNews: { apiCon: false, apiLang: 'es' },
    apiConNewsD: { apiCon: false, apiLang: 'es' },
    apiConNewsS: { apiCon: false, apiLang: 'es' },
    apiConAbout: { apiCon: false, apiLang: 'es' },
    apiConWhy: { apiCon: false, apiLang: 'es' },
    apiConLegal: { apiCon: false, apiLang: 'es' },
    apiConPolicies: { apiCon: false, apiLang: 'es' },
    apiConSites: { apiCon: false, apiLang: 'es' },
    apiConContacts: { apiCon: false, apiLang: 'es' },

    arrayLayout: { apiLang: 'es', apiArray: [] },
    arrayHome: { apiLang: 'es', apiArray: [] },
    arrayProducts: { apiLang: 'es', apiArray: [] },
    arrayPlans: { apiLang: 'es', apiArray: [] },
    arrayResources: { apiLang: 'es', apiArray: [] },
    arrayHelp: { apiLang: 'es', apiArray: [] },
    arrayHelpF: { apiLang: 'es', apiArray: [] },
    arrayHelpD: { apiLang: 'es', apiArray: [] },
    arrayHelpS: { apiLang: 'es', apiArray: [] },
    arrayNews: { apiLang: 'es', apiArray: [] },
    arrayNewsD: { apiLang: 'es', apiArray: [] },
    arrayNewsS: { apiLang: 'es', apiArray: [] },
    arrayAbout: { apiLang: 'es', apiArray: [] },
    arrayWhy: { apiLang: 'es', apiArray: [] },
    arrayLegal: { apiLang: 'es', apiArray: [] },
    arrayPolicies: { apiLang: 'es', apiArray: [] },
    arraySites: { apiLang: 'es', apiArray: [] },
    arrayContacts: { apiLang: 'es', apiArray: [] },
};

const _apiReducer = createReducer(apiState,
    on(ownActions.setAPIConnectLayout, (state, { apiConLayout }) => ({
        ...state, apiConLayout: { ...apiConLayout },
    })),
    on(ownActions.setAPIConnectHome, (state, { apiConHome }) => ({
        ...state, apiConHome: { ...apiConHome }
    })),
    on(ownActions.setAPIConnectProducts, (state, { apiConProducts }) => ({
        ...state, apiConProducts: { ...apiConProducts }
    })),
    on(ownActions.setAPIConnectPlans, (state, { apiConPlans }) => ({
        ...state, apiConPlans: { ...apiConPlans }
    })),
    on(ownActions.setAPIConnectResources, (state, { apiConResources }) => ({
        ...state, apiConResources: { ...apiConResources }
    })),
    on(ownActions.setAPIConnectHelp, (state, { apiConHelp }) => ({
        ...state, apiConHelp: { ...apiConHelp }
    })),
    on(ownActions.setAPIConnectHelpF, (state, { apiConHelpF }) => ({
        ...state, apiConHelpF: { ...apiConHelpF }
    })),
    on(ownActions.setAPIConnectHelpD, (state, { apiConHelpD }) => ({
        ...state, apiConHelpD: { ...apiConHelpD }
    })),
    on(ownActions.setAPIConnectHelpS, (state, { apiConHelpS }) => ({
        ...state, apiConHelpS: { ...apiConHelpS }
    })),
    on(ownActions.setAPIConnectNews, (state, { apiConNews }) => ({
        ...state, apiConNews: { ...apiConNews }
    })),
    on(ownActions.setAPIConnectNewsD, (state, { apiConNewsD }) => ({
        ...state, apiConNewsD: { ...apiConNewsD }
    })),
    on(ownActions.setAPIConnectNewsS, (state, { apiConNewsS }) => ({
        ...state, apiConNewsS: { ...apiConNewsS }
    })),
    on(ownActions.setAPIConnectAbout, (state, { apiConAbout }) => ({
        ...state, apiConAbout: { ...apiConAbout }
    })),
    on(ownActions.setAPIConnectWhy, (state, { apiConWhy }) => ({
        ...state, apiConWhy: { ...apiConWhy }
    })),
    on(ownActions.setAPIConnectLegal, (state, { apiConLegal }) => ({
        ...state, apiConLegal: { ...apiConLegal }
    })),
    on(ownActions.setAPIConnectPolicies, (state, { apiConPolicies }) => ({
        ...state, apiConPolicies: { ...apiConPolicies }
    })),
    on(ownActions.setAPIConnectSites, (state, { apiConSites }) => ({
        ...state, apiConSites: { ...apiConSites }
    })),
    on(ownActions.setAPIConnectContacts, (state, { apiConContacts }) => ({
        ...state, apiConContacts: { ...apiConContacts }
    })),
    on(ownActions.setArrayLayout, (state, { arrayLayout }) => ({
        ...state, arrayLayout: { ...arrayLayout }
    })),
    on(ownActions.setArrayHome, (state, { arrayHome }) => ({
        ...state, arrayHome: { ...arrayHome }
    })),
    on(ownActions.setArrayProducts, (state, { arrayProducts }) => ({
        ...state, arrayProducts: { ...arrayProducts }
    })),
    on(ownActions.setArrayPlans, (state, { arrayPlans }) => ({
        ...state, arrayPlans: { ...arrayPlans }
    })),
    on(ownActions.setArrayResources, (state, { arrayResources }) => ({
        ...state, arrayResources: { ...arrayResources }
    })),
    on(ownActions.setArrayHelp, (state, { arrayHelp }) => ({
        ...state, arrayHelp: { ...arrayHelp }
    })),
    on(ownActions.setArrayHelpF, (state, { arrayHelpF }) => ({
        ...state, arrayHelpF: { ...arrayHelpF }
    })),
    on(ownActions.setArrayHelpD, (state, { arrayHelpD }) => ({
        ...state, arrayHelpD: { ...arrayHelpD }
    })),
    on(ownActions.setArrayHelpS, (state, { arrayHelpS }) => ({
        ...state, arrayHelpS: { ...arrayHelpS }
    })),
    on(ownActions.setArrayNews, (state, { arrayNews }) => ({
        ...state, arrayNews: { ...arrayNews }
    })),
    on(ownActions.setArrayNewsD, (state, { arrayNewsD }) => ({
        ...state, arrayNewsD: { ...arrayNewsD }
    })),
    on(ownActions.setArrayNewsS, (state, { arrayNewsS }) => ({
        ...state, arrayNewsS: { ...arrayNewsS }
    })),
    on(ownActions.setArrayAbout, (state, { arrayAbout }) => ({
        ...state, arrayAbout: { ...arrayAbout }
    })),
    on(ownActions.setArrayWhy, (state, { arrayWhy }) => ({
        ...state, arrayWhy: { ...arrayWhy }
    })),
    on(ownActions.setArrayLegal, (state, { arrayLegal }) => ({
        ...state, arrayLegal: { ...arrayLegal }
    })),
    on(ownActions.setArrayPolicies, (state, { arrayPolicies }) => ({
        ...state, arrayPolicies: { ...arrayPolicies }
    })),
    on(ownActions.setArraySites, (state, { arraySites }) => ({
        ...state, arraySites: { ...arraySites }
    })),
    on(ownActions.setArrayContacts, (state, { arrayContacts }) => ({
        ...state, arrayContacts: { ...arrayContacts }
    })),

);

export function apiReducer(state: any, action: any) {
    return _apiReducer(state, action);
}
