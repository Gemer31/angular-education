import { Component, HostBinding } from '@angular/core';
import { DisplayBlockImages, ViewDisplayBlockComponent } from "../view-display-block/view-display-block.component";
import { LifeCycleComponent } from "../../common/components/life-cycle/life-cycle.component";

@Component({
    selector: 'view-life-cycle',
    templateUrl: './view-life-cycle.component.html',
    styleUrls: ['./view-life-cycle.component.less'],
    imports: [
        LifeCycleComponent,
        ViewDisplayBlockComponent,
    ]
})
export class ViewLifeCycleComponent {
  @HostBinding('class.view-directives') private host = true;

  public readonly BOLD_DIRECTIVE_IMAGES: DisplayBlockImages = {
    html: ['../../../assets/images/bold-directive/bold-directive-html.png'],
    ts: ['../../../assets/images/bold-directive/bold-directive-ts.png'],
  }
}
