import { Routes } from '@angular/router';
import { LoginComponent } from './userAuth/login/login.component';
import { SignupComponent } from './userAuth/signup/signup.component';
import { ForgetComponent } from './userAuth/forget/forget.component';
import { IndexComponent } from './main/index/index.component';
import { VarifyComponent } from './userAuth/varify/varify.component';
import { SupportComponent } from './main/support/support.component';
import { FileManagerComponent } from './main/file-manager/file-manager.component';
import { HelpCompComponent } from './main/help-comp/help-comp.component';
import { ProfileSetComponent } from './main/profile-set/profile-set.component';
import { ResetPasswordComponent } from './main/reset-password/reset-password.component';

export const routes: Routes = [
    {path: '', redirectTo: 'deshboard', pathMatch: 'full'},
    // User Auth - Done
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'verify', component:VarifyComponent},
    {path:'forget', component:ForgetComponent},


    // 
    {path:'deshboard', component:IndexComponent},
    {path:'profile', component:SupportComponent},
    
    // head menu
    {path:'fileManger', component:FileManagerComponent},
    {path:'profileupdate', component:ProfileSetComponent},
    {path:'helpComp', component:HelpCompComponent},
    {path:'resetPwd', component:ResetPasswordComponent},

];
