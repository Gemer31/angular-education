import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit, Renderer2,
  TemplateRef,
  ViewChild
} from '@angular/core';
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
export class ViewDisplayBlockComponent implements OnInit, AfterViewInit {
  @Input() public title: string = '';
  @Input() public images: DisplayBlockImages;
  @ContentChild('resultView') public resultView: TemplateRef<unknown>;

  constructor(
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    console.log(this.resultView)
  }

  ngAfterViewInit(): void {
    console.log(this.resultView)

  }
}
