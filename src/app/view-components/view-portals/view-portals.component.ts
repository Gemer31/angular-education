import { Component, computed, HostBinding, signal, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DisplayBlockImages, ViewDisplayBlockComponent } from "../view-display-block/view-display-block.component";
import { LifeCycleComponent } from "../../common/components/life-cycle/life-cycle.component";
import { PortalService } from "../../services/portal.service";
import { ComponentPortal, TemplatePortal } from "@angular/cdk/portal";

@Component({
    selector: 'view-portals',
    templateUrl: './view-portals.component.html',
    styleUrls: ['./view-portals.component.less'],
})
export class ViewPortalsComponent {
  @ViewChild(TemplateRef) templatePortalContent: TemplateRef<any>

  private templatePortal = signal<TemplatePortal | null>(null);
  private componentPortal = signal<ComponentPortal<any> | null>(null)

  constructor(
    private portalService: PortalService,
    private viewContainerRef: ViewContainerRef,
    ) {

  }

  public attachTemplate() {
    this.templatePortal.set(new TemplatePortal(this.templatePortalContent, this.viewContainerRef));
    this.portalService.attachView(this.templatePortal());
  }

  public attachComponent() {
    this.componentPortal.set(new ComponentPortal(ViewPortalComponentExample));
    this.portalService.attachView(this.componentPortal());
  }
}

@Component({
  selector: 'view-portal-component-example',
  template: `
    <div>{{counter()}}</div>

    <button (click)="increase()">Increase</button>
    <button (click)="decrease()">Decrease</button>
  `,
})
export class ViewPortalComponentExample {
  protected counter = signal(0);

  protected increase() {
    this.counter.update((prev) => prev++);
  }

  protected decrease() {
    this.counter.update((prev) => prev--);
  }
}
