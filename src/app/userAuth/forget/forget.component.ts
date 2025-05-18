import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  timer:any = "10:01:01"
  constructor(private _router:Router){
  }
  ngOnInit(){
    // document.getElementById('otpmain')?.focus();
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


  onSubmit(){}
  signin(){
    this._router.navigate(['/login'])
  }
}
