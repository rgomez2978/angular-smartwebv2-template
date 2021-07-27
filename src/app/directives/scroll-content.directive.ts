import { Directive, Injectable, Input, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollContent]'
})
export class ScrollContentDirective {

  @Input() public tagType: any;
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection!: string;

  constructor(private _el: ElementRef) { }

  @HostListener('scroll', ['$event'])

  onScroll(event: any) {
    let currentSection!: string;
    const children = this._el.nativeElement.children;
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.tagType.some((t: any) => t === element.tagName)) {
        if ((element.offsetTop - parentOffset) <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      // evnvia valor al compente  q llama la directiva es el output
      this.sectionChange.emit(this.currentSection);
    }
  }

}
