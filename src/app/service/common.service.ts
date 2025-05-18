import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _router:Router){}

  // Add Token into Header for Common api
  _localStorage:any="token";
  getHeaderOptions(): any {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'con': this._localStorage.get_con_LocalStorage(),
      })
    }
    return httpOptions;
  }


  // Set Token




  // Token Management - OPEN
  setToken(token:any){
    sessionStorage.setItem('token', token)
  }
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
  removeToken(){
    sessionStorage.removeItem('token');
  }
  // Token Management - CLOSE




  // onSignupSuccess(response: any) {
  //   const token = response.token;  
  //   sessionStorage.setItem('token', token); 
  //   this.router.navigate(['/dashboard']); 
  // }

  getHostUrl(): string {
    let hostName = this._localStorage.getHostingName();
    return hostName;
  }
  public getHostingName() {
    return  sessionStorage.getItem("HOSTING_KEY");
  }
}
