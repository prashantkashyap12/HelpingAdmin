import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _router:Router){}

  routForgt(){
    this._router.navigate(['/forget'])
  }
  signup(){
    this._router.navigate(['/signup'])
  }
  onSubmit(){}
}
