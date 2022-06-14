import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, TitleStrategy } from '@angular/router';
import { appRoutes } from './app.routes';
import { MatButtonModule } from '@angular/material/button';
import { PageTitleStrategy } from './page-title-strategy';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {}),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
      } as MatFormFieldDefaultOptions,
    },
    { provide: TitleStrategy, useClass: PageTitleStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
