import { Component, HostBinding } from '@angular/core';
import { AttributeDirective } from "../../common/directives/attribute.directive";
import { DisplayBlockImages, ViewDisplayBlockComponent } from "../view-display-block/view-display-block.component";
import { MultiplyContentStructureDirective } from "../../common/directives/multiply-content-structure.directive";

@Component({
    selector: 'view-directives',
    templateUrl: './view-directives.component.html',
    styleUrls: ['./view-directives.component.less'],
    imports: [
        ViewDisplayBlockComponent,
        AttributeDirective,
        MultiplyContentStructureDirective,
    ]
})
export class ViewDirectivesComponent {
  @HostBinding('class.view-directives') private host = true;

  public readonly BOLD_DIRECTIVE_IMAGES: DisplayBlockImages = {
    html: ['../../../assets/images/bold-directive/bold-directive-html.png'],
    ts: ['../../../assets/images/bold-directive/bold-directive-ts.png'],
  }
}
