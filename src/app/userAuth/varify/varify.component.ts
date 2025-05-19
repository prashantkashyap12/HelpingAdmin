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
        
  ngOnInit(){
    this.TimeCoutner()
  }
  minStr:any;
  secStr:any;
  TimeCoutner(){
    let minutes = 10;
    let seconds = 0;
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      // Format and print the time
      this.minStr = minutes.toString().padStart(2, '0');
      this.secStr = seconds.toString().padStart(2, '0');
    }, 1000);
  }
  
onSubmit(){
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
