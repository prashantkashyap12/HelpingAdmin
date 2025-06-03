import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor( @Inject(PLATFORM_ID) private platformId: Object, private _router:Router){
  }
  ngOnInit(){
    this.init();  
  }
  userName:any ;
  userProfile:any;
  init(){
    let userProfile
    let userName
    if (isPlatformBrowser(this.platformId)) {
      userProfile = sessionStorage.getItem('role');
      userName = sessionStorage.getItem('user');
    }
    this.userName = userName ?? '';
    this.userProfile = userProfile ?? '';
  }


  // index(){
  //   this._router.navigate(['/deshboard']);
  // }
  profile(){
    this._router.navigate(['/profileupdate']);
  }
  resetPwd(){
    this._router.navigate(['/resetPwd']);
  }
  help(){
    this._router.navigate(['/help']);
  }
  logout(){
    this._router.navigate(['/login']);
  }
}
