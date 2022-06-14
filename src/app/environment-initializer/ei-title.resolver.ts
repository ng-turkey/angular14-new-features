import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EnvironmentInitializerTitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot): Observable<string> | Promise<string> | string {
    return of('Environment Initializer');
  }
}
