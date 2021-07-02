import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalSessionStorageDataService {

  constructor() { }



  /**
   * -------------------------------------------------------
   * @summary setItemLocalStorage
   * @description  Almacena o actualiza valor de una variable en el localstorage
   * @param {string} key nombre de variable
   * @param {string} value Valor de la variable key
   * -------------------------------------------------------
   */
   public setItemLocalStorage(key: string, value: string) {
    // localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }

  /**
   * -------------------------------------------------------
   * @summary getItemLocalStorage
   * @description  Obtiene valor de una variable en el localstorage
   * @param {string} key nombre de variable
   * -------------------------------------------------------
   */
  public getItemLocalStorage(key: string) {
    // return localStorage.getItem(key)
    return sessionStorage.getItem(key)
  }


  /**
   * -------------------------------------------------------
   * @summary removeItemLocalStorage
   * @description  Elimina variable con sus valor  en el localstorage
   * @param {string} key nombre de variable
   * -------------------------------------------------------
   */
  public removeItemLocalStorage(key: string) {
    // localStorage.removeItem(key);
    sessionStorage.removeItem(key);
  }

  /**
   * -------------------------------------------------------
   * @summary clearLocalStorage
   * @description  Elimina variable con sus valor  en el localstorage
   * @param {string} key nombre de variable
   * -------------------------------------------------------
   */
  public clearLocalStorage() {
    // localStorage.clear();
    sessionStorage.clear();
  }



}
