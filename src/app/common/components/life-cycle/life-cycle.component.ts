import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { LifeCycleChildComponent } from "../life-cycle-child/life-cycle-child.component";

@Component({
    selector: 'life-cycle',
    templateUrl: './life-cycle.component.html',
    styleUrls: ['./life-cycle.component.less'],
    imports: [
        LifeCycleChildComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  public value: number = 0;

  ngAfterContentChecked(): void {
    console.log('%c--parent ngAfterContentChecked', 'color: red');
  }
  ngAfterContentInit(): void {
    console.log('%c--parent ngAfterContentInit', 'color: red');
  }
  ngAfterViewChecked(): void {
    console.log('%c--parent ngAfterViewChecked', 'color: red');
  }
  ngAfterViewInit(): void {
    console.log('%c--parent ngAfterViewInit', 'color: red');
  }
  ngDoCheck(): void {
    console.log('%c--parent ngDoCheck', 'color: red');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c--parent ngOnChanges', 'color: red');
  }
  ngOnInit(): void {
    console.log('%c--parent ngOnInit', 'color: red');
  }
  ngOnDestroy(): void {
    console.log('%c--parent ngOnDestroy', 'color: red');
  }
}
