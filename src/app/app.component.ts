import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CommonService } from './service/common.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:any;
  isVisible:any;
  isBrowser:any;
  constructor(private _common:CommonService, @Inject(PLATFORM_ID) private platformId: any){
        this.isBrowser = isPlatformBrowser(this.platformId);
  }

 ngOnInit(){
   if (this.isBrowser) {
     sessionStorage.setItem('email', '12345');
     sessionStorage.setItem('password', "12345");
     sessionStorage.setItem('user', '12345');
     sessionStorage.setItem('role', 'user');
     sessionStorage.setItem('token', "asdf12342asdr23");
     this.isVisible = sessionStorage.getItem('token');
    }
    this.isVisible = this.isVisible == null ? false : true;
  }
}
