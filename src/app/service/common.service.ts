import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // Add Token for API Calling
  _localStorage:any="token";
  getHeaderOptions(): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'con': this._localStorage.get_con_LocalStorage(),
      })
    }
    return httpOptions;
  }

  getHostUrl(): string {
    let hostName = this._localStorage.getHostingName();
    return hostName;
  }
  public getHostingName() {
    return  sessionStorage.getItem("HOSTING_KEY");
  }
}
