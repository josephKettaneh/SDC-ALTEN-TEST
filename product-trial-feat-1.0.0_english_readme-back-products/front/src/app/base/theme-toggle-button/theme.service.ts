import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  public switchTheme(theme: 'dark' | 'light') {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = `mdc-${theme}-deeppurple.css`;
    }
  }
}
