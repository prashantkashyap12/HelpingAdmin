import { Routes } from '@angular/router';
import { LoginComponent } from './userAuth/login/login.component';
import { SignupComponent } from './userAuth/signup/signup.component';
import { ForgetComponent } from './userAuth/forget/forget.component';
import { IndexComponent } from './main/index/index.component';
import { VarifyComponent } from './userAuth/varify/varify.component';

export const routes: Routes = [
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'forget', component:ForgetComponent},
    {path:'verify', component:VarifyComponent},
    {path:'deshboard', component:IndexComponent}
];
