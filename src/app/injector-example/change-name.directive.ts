import { Directive, Injector, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { NAME } from './name';

@Directive({ selector: '[changeNameAs]', standalone: true })
export class ChangeNameAsDirective {
  @Input('changeNameAs') set changeNameAs(_changeNameAs: string) {
    this.setName(_changeNameAs);
  }
  constructor(private vcr: ViewContainerRef, private templateRef: TemplateRef<unknown>) {}

  private setName(name: string): void {
    this.vcr.createEmbeddedView(
      this.templateRef,
      {}, // context
      {
        injector: Injector.create({
          providers: [
            {
              provide: NAME,
              useValue: name,
            },
          ],
        }),
      }
    );
  }
}
