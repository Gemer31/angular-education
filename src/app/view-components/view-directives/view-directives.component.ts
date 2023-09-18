import { Component } from '@angular/core';
import { ReverseIfDirective } from "../../common/directives/reverse-if.directive";
import { BoldDirective } from "../../common/directives/bold.directive";
import { DisplayBlockImages, ViewDisplayBlockComponent } from "../view-display-block/view-display-block.component";

@Component({
  selector: 'view-reverse-if',
  templateUrl: './view-directives.component.html',
  styleUrls: ['./view-directives.component.less'],
  standalone: true,
  imports: [
    ViewDisplayBlockComponent,
    BoldDirective,
    ReverseIfDirective,
  ],
})
export class ViewDirectivesComponent {
  public readonly BOLD_DIRECTIVE_IMAGES: DisplayBlockImages = {
    html: ['../../../assets/images/bold-directive/bold-directive-html.png'],
    ts: ['../../../assets/images/bold-directive/bold-directive-ts.png'],
  }
}
