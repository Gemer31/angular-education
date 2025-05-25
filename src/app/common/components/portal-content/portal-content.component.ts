import { Component, inject, OnInit } from '@angular/core';
import { CdkPortalOutlet, Portal } from "@angular/cdk/portal";
import { PortalService } from "../../../services/portal.service";
import { Subject } from "rxjs";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'portal-content',
  templateUrl: './portal-content.component.html',
  styleUrls: ['./portal-content.component.less'],
  imports: [
    CdkPortalOutlet,
    AsyncPipe
  ]
})
export class PortalContentComponent implements OnInit {
  private portalService = inject(PortalService);

  public _portal$: Subject<Portal<any> | null> = new Subject();

  ngOnInit(): void {
    this._portal$ = this.portalService.getPortal();
  }
}

