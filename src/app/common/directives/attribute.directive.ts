import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[customAttributeDirective]',
  standalone: true,
  host: {
    '(click)': 'onHostMouseClick()',
  }
})
export class AttributeDirective implements OnInit {
  private fontWeight = 'normal';
  private color: string = 'black';

  @Input() public customBackgroundColor: string = 'yellow';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.customBackgroundColor);
  }

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight;
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostBinding('style.fontSize') get getFontSize() {
    return '24px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontWeight = 'normal';
  }

  public onHostMouseClick(): void {
    this.color = this.color === 'black' ? 'green' : 'black'
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.color);
  }
}
