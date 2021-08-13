import { createAction, props } from "@ngrx/store";
import { ApiConnect } from "../models/apiConnect.models";
import { ApiSetArray } from '../models/apiSetArray.models';

// API CONNECT

// API CONNECT - LAYOUT
export const setAPIConnectLayout = createAction(
    "[API] Set API Connect Layout",
    props<{ apiConLayout: ApiConnect }>()
);

// API CONNECT - HOME
export const setAPIConnectHome = createAction(
    "[API] Set API Connect Home",
    props<{ apiConHome: ApiConnect }>()
);

// API CONNECT - PRODUCTS
export const setAPIConnectProducts = createAction(
    "[API] Set API Connect Products",
    props<{ apiConProducts: ApiConnect }>()
);

// API CONNECT - PLANS
export const setAPIConnectPlans = createAction(
    "[API] Set API Connect Plans",
    props<{ apiConPlans: ApiConnect }>()
);

// API CONNECT - RESOURCES
export const setAPIConnectResources = createAction(
    "[API] Set API Connect Resources",
    props<{ apiConResources: ApiConnect }>()
);

// API CONNECT - HELP
export const setAPIConnectHelp = createAction(
    "[API] Set API Connect Help",
    props<{ apiConHelp: ApiConnect }>()
);

// API CONNECT - HELP FEATURE
export const setAPIConnectHelpF = createAction(
    "[API] Set API Connect Help - Features",
    props<{ apiConHelpF: ApiConnect }>()
);

// API CONNECT - HELP DETAIL
export const setAPIConnectHelpD = createAction(
    "[API] Set API Connect Help - Details",
    props<{ apiConHelpD: ApiConnect }>()
);

// API CONNECT - HELP SEARCH
export const setAPIConnectHelpS = createAction(
    "[API] Set API Connect Help - Search",
    props<{ apiConHelpS: ApiConnect }>()
);

// API CONNECT - NEWS
export const setAPIConnectNews = createAction(
    "[API] Set API Connect News",
    props<{ apiConNews: ApiConnect }>()
);

// API CONNECT - NEWS DETAIL
export const setAPIConnectNewsD = createAction(
    "[API] Set API Connect News - Details",
    props<{ apiConNewsD: ApiConnect }>()
);

// API CONNECT - NEWS SEARCH
export const setAPIConnectNewsS = createAction(
    "[API] Set API Connect News - Search",
    props<{ apiConNewsS: ApiConnect }>()
);

// API CONNECT - ABOUT
export const setAPIConnectAbout = createAction(
    "[API] Set API Connect About",
    props<{ apiConAbout: ApiConnect }>()
);

// API CONNECT - WHY
export const setAPIConnectWhy = createAction(
    "[API] Set API Connect Why",
    props<{ apiConWhy: ApiConnect }>()
);

// API CONNECT - LEGAL
export const setAPIConnectLegal = createAction(
    "[API] Set API Connect Legal",
    props<{ apiConLegal: ApiConnect }>()
);

// API CONNECT - POLICIES
export const setAPIConnectPolicies = createAction(
    "[API] Set API Connect Policies",
    props<{ apiConPolicies: ApiConnect }>()
);

// API CONNECT - SITE MAP
export const setAPIConnectSites = createAction(
    "[API] Set API Connect Sites",
    props<{ apiConSites: ApiConnect }>()
);

// API CONNECT - CONTACTS
export const setAPIConnectContacts = createAction(
    "[API] Set API Connect Contacts",
    props<{ apiConContacts: ApiConnect }>()
);


// API ARRAY - LAYOUT
export const setArrayLayout = createAction(
    "[API ARRAY] Set Array Layout",
    props<{ arrayLayout: ApiSetArray }>()
);

// API ARRAY - HOME
export const setArrayHome = createAction(
    "[API ARRAY] Set Array Home",
    props<{ arrayHome: ApiSetArray }>()
);

// API ARRAY - PRODUCTS
export const setArrayProducts = createAction(
    "[API ARRAY] Set Array Products",
    props<{ arrayProducts: ApiSetArray }>()
);

// API ARRAY - PLANS
export const setArrayPlans = createAction(
    "[API ARRAY] Set Array Plans",
    props<{ arrayPlans: ApiSetArray }>()
);

// API ARRAY - RESOURCES
export const setArrayResources = createAction(
    "[API ARRAY] Set Array Resources",
    props<{ arrayResources: ApiSetArray }>()
);

// API ARRAY - HELP
export const setArrayHelp = createAction(
    "[API ARRAY] Set Array Help",
    props<{ arrayHelp: ApiSetArray }>()
);

// API ARRAY - HELP FEATURE
export const setArrayHelpF = createAction(
    "[API ARRAY] Set Array Help - Features",
    props<{ arrayHelpF: ApiSetArray }>()
);

// API ARRAY - HELP DETAIL
export const setArrayHelpD = createAction(
    "[API ARRAY] Set Array Help - Details",
    props<{ arrayHelpD: ApiSetArray }>()
);

// API ARRAY - HELP SEARCH
export const setArrayHelpS = createAction(
    "[API ARRAY] Set Array Help - Search",
    props<{ arrayHelpS: ApiSetArray }>()
);

// API ARRAY - NEWS
export const setArrayNews = createAction(
    "[API ARRAY] Set Array News",
    props<{ arrayNews: ApiSetArray }>()
);

// API ARRAY - NEWS DETAIL
export const setArrayNewsD = createAction(
    "[API ARRAY] Set Array News - Details",
    props<{ arrayNewsD: ApiSetArray }>()
);

// API ARRAY - NEWS SEARCH
export const setArrayNewsS = createAction(
    "[API ARRAY] Set Array News - Search",
    props<{ arrayNewsS: ApiSetArray }>()
);

// API ARRAY - ABOUT
export const setArrayAbout = createAction(
    "[API ARRAY] Set Array About",
    props<{ arrayAbout: ApiSetArray }>()
);

// API ARRAY - WHY
export const setArrayWhy = createAction(
    "[API ARRAY] Set Array Why",
    props<{ arrayWhy: ApiSetArray }>()
);

// API ARRAY - LEGAL
export const setArrayLegal = createAction(
    "[API ARRAY] Set Array Legal",
    props<{ arrayLegal: ApiSetArray }>()
);

// API ARRAY - POLICIES
export const setArrayPolicies = createAction(
    "[API ARRAY] Set Array Policies",
    props<{ arrayPolicies: ApiSetArray }>()
);

// API ARRAY - SITES
export const setArraySites = createAction(
    "[API ARRAY] Set Array Sites",
    props<{ arraySites: ApiSetArray }>()
);

// API ARRAY - CONTACTS
export const setArrayContacts = createAction(
    "[API ARRAY] Set Array Contacts",
    props<{ arrayContacts: ApiSetArray }>()
);
