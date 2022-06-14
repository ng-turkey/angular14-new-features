import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const injectGithubIcon = () => {
  const iconRegistry = inject(MatIconRegistry);
  const domSanitizer = inject(DomSanitizer);
  const safeUrl = domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg');
  iconRegistry.addSvgIcon('github', safeUrl);
};

@Component({
  selector: 'app-github-icon',
  template: '<mat-icon svgIcon="github"></mat-icon>',
  standalone: true,
  imports: [MatIconModule],
})
export class GithubIconComponent {
  constructor() {
    injectGithubIcon();
  }
}
