import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { IndexComponent } from './main/index/index.component';
import { LoginComponent } from './userAuth/login/login.component';
import { SignupComponent } from './userAuth/signup/signup.component';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, RangeValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin';



}
