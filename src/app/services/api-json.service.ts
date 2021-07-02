import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { LayoutInterface, } from '@interfaces/index';
@Injectable({
  providedIn: 'root'
})
export class ApiJsonService {
  url!: string;

  constructor(private _http: HttpClient) { }

  /**
   * -------------------------------------------------------
   * @summary httpOptions
   * @description  Opciones de cabeceras HTTP
   * -------------------------------------------------------
   */
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  /**
   * -------------------------------------------------------
   * @summary getJSONLayout
   * @description  Consumir API - GET - LAYOUT
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONLayout(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/layout/layout_en.json`; }
    else { this.url = `assets/JSON/layout/layout_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }


  /**
   * -------------------------------------------------------
   * @summary getJSONHome
   * @description  Consumir API - GET - HOME
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONHome(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/home/home_en.json`; }
    else { this.url = `assets/JSON/home/home_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }


  /**
   * -------------------------------------------------------
   * @summary getJSONAbout
   * @description  Consumir API - GET - HOME
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONAbout(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/aboutus/aboutus_en.json`; }
    else { this.url = `assets/JSON/aboutus/aboutus_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }

  /**
   * -------------------------------------------------------
   * @summary getJSONWhySmart
   * @description  Consumir API - GET - HOME
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONWhySmart(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/why_smart/why_smart_en.json`; }
    else { this.url = `assets/JSON/why_smart/why_smart_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }


  /**
   * -------------------------------------------------------
   * @summary getJSONProducts
   * @description  Consumir API - GET - PRODUCTOS
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONProducts(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/products/products_en.json`; }
    else { this.url = `assets/JSON/products/products_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }

  /**
   * -------------------------------------------------------
   * @summary getJSONPlanes
   * @description  Consumir API - GET - PLANES
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONPlanes(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/planes/planes_en.json`; }
    else { this.url = `assets/JSON/planes/planes_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }

  /**
   * -------------------------------------------------------
   * @summary getJSONHelp
   * @description  Consumir API - GET - HELP MANUALES
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONHelp(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/help/help_en.json`; }
    else { this.url = `assets/JSON/help/help_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }

  /**
   * -------------------------------------------------------
   * @summary getJSONNews
   * @description  Consumir API - GET - NEWS
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONNews(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/news/news_en.json`; }
    else { this.url = `assets/JSON/news/news_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }

  /**
   * -------------------------------------------------------
   * @summary getJSONFaqs
   * @description  Consumir API - GET - FAQS
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONFaqs(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/faqs/faqs_en.json`; }
    else { this.url = `assets/JSON/faqs/faqs_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }

  /**
   * -------------------------------------------------------
   * @summary getJSONContacts
   * @description  Consumir API - GET - CONTACTS
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONContacts(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/contacts/contacts_en.json`; }
    else { this.url = `assets/JSON/contacts/contacts_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }

  /**
   * -------------------------------------------------------
   * @summary getJSONPrivacyPolicies
   * @description  Consumir API - GET - PRIVACY POLICIES
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONPrivacyPolicies(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/privacy_policies/privacy_policies_en.json`; }
    else { this.url = `assets/JSON/privacy_policies/privacy_policies_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }


  /**
   * -------------------------------------------------------
   * @summary getJSONLegalterms
   * @description  Consumir API - GET - LEGAL TERMS
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONLegalterms(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/legal_terms/legal_terms_en.json`; }
    else { this.url = `assets/JSON/legal_terms/legal_terms_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }

  /**
   * -------------------------------------------------------
   * @summary getJSONRelatedSites
   * @description  Consumir API - GET - RELATED SITES
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONRelatedSites(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/related_sites/related_sites_en.json`; }
    else { this.url = `assets/JSON/related_sites/related_sites_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }


  /**
   * -------------------------------------------------------
   * @summary getJSONSiteMap
   * @description  Consumir API - GET - SITE MAP
   * @param {string} lang lenguage
   * @param {string} page pagina de json a cargar
   * -------------------------------------------------------
   */
  getJSONSiteMap(lang: string) {
    if (lang === "en") { this.url = `assets/JSON/sitemap/sitemap_en.json`; }
    else { this.url = `assets/JSON/sitemap/sitemap_es.json`; }
    // return this._http.get<LayoutInterface>(this.url, this.httpOptions);
    return this._http.get<any>(this.url, this.httpOptions);
  }


}
