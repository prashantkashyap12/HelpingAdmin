import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../service/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient, private _common:CommonService) { }

  signup(model:any):Observable<any> {
    let url = "http://localhost:5181/api/Signup/signup";
    return  this.http.post(url, model)
  }
  varify(model:any):Observable<any>{
    let url = "http://localhost:5181/api/Signup/ForgetGen2";
    return this.http.post(url, model)
  }

  signIn(model:any):Observable<any>{
    let url = "http://localhost:5181/api/Signup/Signin";
    return this.http.post(url, model);
  }
}

