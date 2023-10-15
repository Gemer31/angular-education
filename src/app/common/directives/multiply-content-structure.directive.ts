import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[multiplyContent]',
  standalone: true,
})
export class MultiplyContentStructureDirective {

  @Input() public set multiplyContent(multiplyAmount: number) {
    new Array(multiplyAmount).fill(null).forEach(() => this.viewContainer.createEmbeddedView(this.templateRef));
  }

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
  ) {
  }
}
