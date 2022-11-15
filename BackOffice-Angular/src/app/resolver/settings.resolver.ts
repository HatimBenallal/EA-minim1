import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SettingsService } from '../services/settings.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsResolver implements Resolve<boolean> {
  constructor(private settingsServ: SettingsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.settingsServ.getSetting(route.paramMap.get('id')!)
  }
}
