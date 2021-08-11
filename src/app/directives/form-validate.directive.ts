import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
@Directive({
  selector: '[appFormValidate]'
})
export class FormValidateDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

  /**
   * -------------------------------------------------------
   * @summary @HostListener('input', ['$event'])
   * @description aplica patron regex al input
   * -------------------------------------------------------
   */
  @HostListener('input', ['$event']) onInputChange(event: any) {
    const eleControl = this._el.nativeElement;
    for (let index = 0; index < eleControl.classList.length; index++) {
      const maskType = eleControl.classList[index];
      const initalValue = eleControl.value;
      switch (maskType) {
        case 'apponlytexts':
          eleControl.value = initalValue.replace(/[0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]*/g, '');
          break;
        case 'apponlyalphanumerics':
          eleControl.value = initalValue.replace(/[`~!@#$%^&*()|+\-=¿´´?;:'"<>\{\}\[\]\\\/]*/g, '');
          break;
        case 'apponlynumbers':
          eleControl.value = initalValue.replace(/[^0-9]*/g, '');
          break;
        case 'apponlyemails':
          eleControl.value = initalValue.replace(/[ÑñáéíóúüÁÉÍÓÚÜ´¨`~!#$%^&´´*|\=-?+;:'()",<>\{\}\[\]\\\/]*/g, '');
          break;
        case 'apponlyphones':
          eleControl.value = initalValue.replace(/[a-zA-ZÑñáéíóúüÁÉÍÓÚÜ´¨`~!@#$%^&*_|\=?;:'",<>\{\}\[\]\\\/]*/g, '');
          break;
        case 'apponlypassword':
          eleControl.value = initalValue.replace(/[ÑñáéíóúüÁÉÍÓÚÜ´¨`~!@#$%^&*_|\=?() ;:'",<>\{\}\[\]\\\/]*/g, '');
          break;
        case 'apponlyusername':
          eleControl.value = initalValue.replace(/[ÑñáéíóúüÁÉÍÓÚÜ´¨`~!@#$%^&*|\=?() ;:'",<>\{\}\[\]\\\/]*/g, '');
          break;
      }
      if (initalValue !== eleControl.value) {
        event.stopPropagation();
      }
    }
  }
}
