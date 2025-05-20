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
    let url = "/MMI/Master/cityList";
    return  this.http.post(this._common.getBaseUrl()+url, model)
  }
}

