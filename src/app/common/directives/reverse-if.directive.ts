import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[bold]',
  standalone: true,
})
export class ReverseIfDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
  }
}
