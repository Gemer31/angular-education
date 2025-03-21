import { Component, computed, HostBinding, signal } from '@angular/core';
import { DisplayBlockImages, ViewDisplayBlockComponent } from "../view-display-block/view-display-block.component";
import { LifeCycleComponent } from "../../common/components/life-cycle/life-cycle.component";

@Component({
    selector: 'view-signals',
    templateUrl: './view-signals.component.html',
    styleUrls: ['./view-signals.component.less'],
    imports: [
        ViewDisplayBlockComponent
    ]
})
export class ViewSignalsComponent {
  @HostBinding('class.view-directives') private host = true;

  public readonly BOLD_DIRECTIVE_IMAGES: DisplayBlockImages = {
    html: ['../../../assets/images/bold-directive/bold-directive-html.png'],
    ts: ['../../../assets/images/bold-directive/bold-directive-ts.png'],
  }

  public counter = signal<number>(0);
  public doubleCounter = computed<number>(() => this.counter() * 2);

  public changeCount(operation: '-' | '+'): void {
    operation == '-' ?
      this.counter.update((value) => value - 1)
      : this.counter.update((value) => value + 1);
  }
}
