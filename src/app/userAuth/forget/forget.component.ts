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
  }



  onSubmit(){}
  signin(){
    this._router.navigate(['/login'])
  }
}
