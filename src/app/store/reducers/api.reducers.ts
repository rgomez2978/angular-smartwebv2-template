import { createReducer, on } from "@ngrx/store";
import * as ownActions from "../actions";

export interface ApiState {
    arrayLayout: any;
    arrayHome: any;
    arrayProducts: any;
    arrayPlanes: any;
    arrayResources: any;
    arrayInfo: any;
    arrayPolicies: any;
    arraySites: any;

    apiConLayout: boolean;
    apiConLayoutES: boolean;
    apiConLayoutEN: boolean;
    apiConHome: boolean;
    apiConHomeES: boolean;
    apiConHomeEN: boolean;
    apiConProducts: boolean;
    apiConProductsES: boolean;
    apiConProductsEN: boolean;
    apiConPlanes: boolean;
    apiConPlanesES: boolean;
    apiConPlanesEN: boolean;
    apiConResources: boolean;
    apiConResourcesES: boolean;
    apiConResourcesEN: boolean;
    apiConInfo: boolean;
    apiConInfoES: boolean;
    apiConInfoEN: boolean;
    apiConPolicies: boolean;
    apiConPoliciesES: boolean;
    apiConPoliciesEN: boolean;
    apiConSites: boolean;
    apiConSitesES: boolean;
    apiConSitesEN: boolean;

}

export const apiState: ApiState = {
    arrayLayout: [],
    arrayHome: [],
    arrayProducts: [],
    arrayPlanes: [],
    arrayResources: [],
    arrayInfo: [],
    arrayPolicies: [],
    arraySites: [],

    apiConLayout: false,
    apiConLayoutES: false,
    apiConLayoutEN: false,
    apiConHome: false,
    apiConHomeES: false,
    apiConHomeEN: false,
    apiConProducts: false,
    apiConProductsES: false,
    apiConProductsEN: false,
    apiConPlanes: false,
    apiConPlanesES: false,
    apiConPlanesEN: false,
    apiConResources: false,
    apiConResourcesES: false,
    apiConResourcesEN: false,
    apiConInfo: false,
    apiConInfoES: false,
    apiConInfoEN: false,
    apiConPolicies: false,
    apiConPoliciesES: false,
    apiConPoliciesEN: false,
    apiConSites: false,
    apiConSitesES: false,
    apiConSitesEN: false
};

const _apiReducer = createReducer(
    apiState,
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  CONFIGURACION DE APIS
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  Asigna los valores de conexion de API LAYOUT
    on(ownActions.setAPIConnectLayout, (state, { apiConLayout, apiConLayoutES, apiConLayoutEN }) => ({
        ...state, apiConLayout, apiConLayoutES, apiConLayoutEN
    })),
    //  Asigna los valores de conexion de API HOME
    on(ownActions.setAPIConnectHome, (state, { apiConHome, apiConHomeES, apiConHomeEN }) => ({
        ...state, apiConHome, apiConHomeES, apiConHomeEN
    })),
    //  Asigna los valores de conexion de API PRODUCTS
    on(ownActions.setAPIConnectProducts, (state, { apiConProducts, apiConProductsES, apiConProductsEN }) => ({
        ...state, apiConProducts, apiConProductsES, apiConProductsEN
    })),
    //  Asigna los valores de conexion de API PLANES
    on(ownActions.setAPIConnectPlanes, (state, { apiConPlanes, apiConPlanesES, apiConPlanesEN }) => ({
        ...state, apiConPlanes, apiConPlanesES, apiConPlanesEN
    })),
    //  Asigna los valores de conexion de API RESOURCES
    on(ownActions.setAPIConnectResources, (state, { apiConResources, apiConResourcesES, apiConResourcesEN }) => ({
        ...state, apiConResources, apiConResourcesES, apiConResourcesEN
    })),
    //  Asigna los valores de conexion de API INFO
    on(ownActions.setAPIConnectInfo, (state, { apiConInfo, apiConInfoES, apiConInfoEN }) => ({
        ...state, apiConInfo, apiConInfoES, apiConInfoEN
    })),
    //  Asigna los valores de conexion de API POLICIES
    on(ownActions.setAPIConnectPolicies, (state, { apiConPolicies, apiConPoliciesES, apiConPoliciesEN }) => ({
        ...state, apiConPolicies, apiConPoliciesES, apiConPoliciesEN
    })),
    //  Asigna los valores de conexion de API SITES
    on(ownActions.setAPIConnectSites, (state, { apiConSites, apiConSitesES, apiConSitesEN }) => ({
        ...state, apiConSites, apiConSitesES, apiConSitesEN
    })),
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  CONFIGURACION DE ARREGLOS
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //  Asigna los valores del ARREGLO - LAYOUT
    on(ownActions.setArrayLayout, (state, { arrayLayout }) => ({
        ...state,
        arrayLayout,
    })),
    //  Asigna los valores del ARREGLO - HOME
    on(ownActions.setArrayHome, (state, { arrayHome }) => ({
        ...state,
        arrayHome,
    })),
    //  Asigna los valores del ARREGLO - PRODUCTS
    on(ownActions.setArrayProducts, (state, { arrayProducts }) => ({
        ...state,
        arrayProducts,
    })),
    //  Asigna los valores del ARREGLO - PLANES
    on(ownActions.setArrayPlanes, (state, { arrayPlanes }) => ({
        ...state,
        arrayPlanes,
    })),
    //  Asigna los valores del ARREGLO - RESOURCES
    on(ownActions.setArrayResources, (state, { arrayResources }) => ({
        ...state,
        arrayResources,
    })),
    //  Asigna los valores del ARREGLO - INFO
    on(ownActions.setArrayInfo, (state, { arrayInfo }) => ({
        ...state,
        arrayInfo,
    })),
    //  Asigna los valores del ARREGLO - POLICIES
    on(ownActions.setArrayPolicies, (state, { arrayPolicies }) => ({
        ...state,
        arrayPolicies,
    })),
    //  Asigna los valores del ARREGLO - SITES
    on(ownActions.setArraySites, (state, { arraySites }) => ({
        ...state,
        arraySites,
    })),
);

export function apiReducer(state: any, action: any) {
    return _apiReducer(state, action);
}
