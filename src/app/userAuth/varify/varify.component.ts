import { Component } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-varify',
  standalone: true,
  imports: [],
  templateUrl: './varify.component.html',
  styleUrl: './varify.component.css'
})
export class VarifyComponent {

  constructor(private _common:CommonService, private _router:Router){}
        
onsubmit(){
  let email = sessionStorage.getItem('email');
  sessionStorage.removeItem('email');
  let pwd = sessionStorage.getItem('pwd');
  sessionStorage.removeItem('pwd');

  // make api mathord email, pwd, otp 
  // if api subs.res true/false
  let token;
  this._common.setToken(token);         // Return Token value are saved. 
  this._router.navigate(['/deshboard']);// After token save go to Dashboard.
  
}


}
