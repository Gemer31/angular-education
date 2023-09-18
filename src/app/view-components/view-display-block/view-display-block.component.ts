import { Component, ContentChildren, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatTabsModule } from "@angular/material/tabs";
import { CommonModule } from "@angular/common";

export interface DisplayBlockImages {
  html?: string[];
  ts?: string[];
}

@Component({
  selector: 'view-display-block',
  templateUrl: './view-display-block.component.html',
  styleUrls: ['./view-display-block.component.less'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatTabsModule],
})
export class ViewDisplayBlockComponent implements OnInit {
  @Input() public title: string = '';
  @Input() public images: DisplayBlockImages;
  @ViewChild('resultView') public result: unknown;

  ngOnInit() {
    console.log(this.result);
  }
}
