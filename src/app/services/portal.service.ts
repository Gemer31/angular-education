import { Injectable, Injector } from "@angular/core";
import { Subject } from "rxjs";
import { ComponentPortal, Portal, TemplatePortal } from "@angular/cdk/portal";

@Injectable({
  providedIn: "root",
})
export class PortalService {
  private _portal$: Subject<Portal<any> | null> = new Subject();
  private _content: TemplatePortal | ComponentPortal<any> | null;

  public attachView(content: TemplatePortal | ComponentPortal<any> | null) {
    this._content?.detach();
    this._content = content;
    this._portal$.next(content);
  }

  public getPortal() {
    return this._portal$;
  }
}
