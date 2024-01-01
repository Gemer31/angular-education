import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'view-ng-model',
  templateUrl: './view-forms.component.html',
  standalone: true,
  styleUrls: ['./view-forms.component.less']
})
export class ViewFormsComponent {
  @ViewChild("form") public form: unknown;


}
