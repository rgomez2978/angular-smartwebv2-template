import { Directive, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
import { ReduxService } from '@services/index';

@Directive({
  selector: '[appScrollContent]'
})
export class ScrollContentDirective {

  @Input() public tagType: any;
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection!: string;

  constructor(
    private _el: ElementRef,
    private _reduxService: ReduxService,
  ) { }

  /**
 * -------------------------------------------------------
 * @summary HostListener('window:scroll', ['$event'])
 * @description Manda seccion activa al hacer scroll para poder mostrar en el componente
 * -------------------------------------------------------
 */
  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
    let currentSection!: string;
    const children = this._el.nativeElement.children;
    const scrollTop = event.target['scrollingElement'].scrollTop;
    const parentOffset = event.target['scrollingElement'].offsetTop;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.tagType.some((t: any) => t === element.tagName)) {
        if (((element.offsetTop - parentOffset) - 260) <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      if (currentSection === undefined) {
        this.currentSection = 'section0';
      } else {
        this.currentSection = currentSection;
      }
      // evnvia valor al compente  q llama la directiva es el output
      this.sectionChange.emit(this.currentSection);
    }
  }

}
