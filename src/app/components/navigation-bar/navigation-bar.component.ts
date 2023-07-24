import { Component, HostBinding, HostListener } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface NavigationNode {
  name: string;
  routerLink: string;
  children?: NavigationNode[];
}

const TREE_DATA: NavigationNode[] = [
  {
    name: 'Forms',
    routerLink: '/forms',
    children: [
      {
        name: 'NgModel',
        routerLink: '/forms/ng-model'
      },
    ],
  },
  {
    name: 'Directives',
    routerLink: '/directives',
    children: [
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less']
})
export class NavigationBarComponent {
  private _transformer = (node: NavigationNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  @HostListener('resize', ['$event'])
  public click(event: Element): void {
    console.log(event);
  }
}
