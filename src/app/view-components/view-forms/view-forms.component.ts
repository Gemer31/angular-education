import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'view-ng-model',
  templateUrl: './view-forms.component.html',
  styleUrls: ['./view-forms.component.less']
})
export class ViewFormsComponent {
  @ViewChild("form") public form: unknown;


}
