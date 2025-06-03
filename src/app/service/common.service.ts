import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { mainurl } from '../config'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(){}
  
  ngOnInit(){
    this._localStorage = this.getToken();
    
  }
  
  // BaseUrl getBase
  getBaseUrl():string{
    var url = new mainurl();
    return url.baseURL;
  }

  // Add Token into Header for Common api
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

  // onSignupSuccess(response: any) {
  //   const token = response.token;  
  //   sessionStorage.setItem('token', token); 
  //   this.router.navigate(['/dashboard']); 
  // }



}
