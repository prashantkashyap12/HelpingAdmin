import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CommonService } from './service/common.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
showFirst = false;
  showSecond = false;


  title:any;
  isVisible:any = true;
  isBrowser:any;
  constructor(private _common:CommonService, @Inject(PLATFORM_ID) private platformId: any, private _route:Router)
    {this.isBrowser = isPlatformBrowser(this.platformId);
  }

 ngAfterViewInit(){
    var valueToken;
    if (this.isBrowser) {
      valueToken = sessionStorage.getItem('token');
    }
    this.isVisible = valueToken == null ? false : true;
    console.log(this.isVisible);
  }

  logout(){
    sessionStorage.clear();
    this._route.navigate(['/login']);
  }

}
