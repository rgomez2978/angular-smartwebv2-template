import { Injectable, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ReduxService } from '@services/index';

@Injectable({
  providedIn: 'root'
})
export class CommonsService implements OnDestroy {
  routerSubscription: any;
  urlActiveLevel1!: string;
  urlActiveLevel2!: string;

  constructor(
    private _router: Router,
    private _reduxService: ReduxService
  ) { }

  /**
   * -------------------------------------------------------
   * @summary getData
   * @description  Activa e inactiva el Loading, Cambia el estado del loading cuando cargo la pagina y mada el route a un servicio para luego marcar como active la opcion del menu en base a su url
   * -------------------------------------------------------
   */
  public setLoading() {
    // Muestra loading cuando carga la pagina
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._reduxService.SetLoading(true);
      }
    });
    // Quita el loading cuando cargo la pagina y mada el route a un servicio para luego marcar como active la opcion del menu en base a su url
    this.routerSubscription = this._router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationEnd || event instanceof NavigationCancel
        )
      )
      .subscribe((event) => {
        this.getURlView(event, this._router.url);
        setTimeout(() => {
          this._reduxService.SetLoading(false);
        }, 700);
      });
  }

  /**
   * -------------------------------------------------------
   * @summary getURlView
   * @description  Toma el nombre de la vista cargada en la url
   * @param {any} event evento capturado
   * @param {any} urlRoute route capturado de la URL
   * -------------------------------------------------------
   */
  public getURlView(event: any, urlRoute: any) {
    let arrayUrl1 = urlRoute.split('/');
    let arrayUrl2 = arrayUrl1[1].split('#');
    let urlActiveLevel1 = '';
    let urlActiveLevel2 = '';
    if (arrayUrl2.length === 1) {
      if (arrayUrl2[0] === '') {
        urlActiveLevel1 = '/home';
      } else {
        urlActiveLevel1 = '/' + arrayUrl2[0];
      }
      this._reduxService.setUrl(urlActiveLevel1, '')
    }
    else {
      urlActiveLevel1 = arrayUrl2[0];
      urlActiveLevel2 = arrayUrl2[1];
      this._reduxService.setUrl(urlActiveLevel1, urlActiveLevel2)
    }
  }

  /**
   * -------------------------------------------------------
   * @summary ngOnDestroy
   * @description  Destruye conexiones abiertas
   * -------------------------------------------------------
   */
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
