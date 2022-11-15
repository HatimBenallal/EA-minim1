import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Settings } from '../interfaces/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private apiURL = 'http://localhost:5432/api/settings/';
  constructor(private http: HttpClient) { }

   getAll(): Observable<HttpResponse<Settings[]>>{
      return this.http.get<Settings[]>(this.apiURL, {observe: 'response'});
  } 
  
  
  deleteOne(settingsID: string):Observable<HttpResponse<Settings>>{
    return this.http.delete<Settings>(this.apiURL+ settingsID +'/delete/', {observe: 'response'})
  }
  getSetting(settingsId: String): Observable<HttpResponse<Settings>>{
    return this.http.get<Settings>(this.apiURL + settingsId, {observe: 'response'});
  }

  addOne(settings: Settings):Observable<HttpResponse<Settings>>{
    return this.http.post<Settings>(this.apiURL+'create/', settings, {observe: 'response'})
  }

  update(settingsID: string):Observable<HttpResponse<Settings>>{
    return this.http.delete<Settings>(this.apiURL+ settingsID +'/create/', {observe: 'response'})
  }
}
