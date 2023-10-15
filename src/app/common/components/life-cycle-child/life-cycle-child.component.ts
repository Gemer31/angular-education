import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.less'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() public counter: number;
  @Output() public counterChange: EventEmitter<number> = new EventEmitter<number>();

  ngAfterContentChecked(): void {
    console.log('%c----child ngAfterContentChecked', 'color: green');
  }
  ngAfterContentInit(): void {
    console.log('%c----child ngAfterContentInit', 'color: green');
  }
  ngAfterViewChecked(): void {
    console.log('%c----child ngAfterViewChecked', 'color: green');
  }
  ngAfterViewInit(): void {
    console.log('%c----child ngAfterViewInit', 'color: green');
  }
  ngDoCheck(): void {
    console.log('%c----child ngDoCheck', 'color: green');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('%c----child ngOnChanges', 'color: green');
  }
  ngOnInit(): void {
    console.log('%c----child ngOnInit', 'color: green');
  }
  ngOnDestroy(): void {
    console.log('%c----child ngOnDestroy', 'color: green');
  }
}
