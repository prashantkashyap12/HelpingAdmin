import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import moment from 'moment';
import { AuthserviceService } from '../authservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';


declare var $: any;

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [AuthserviceService]
})
export class SignupComponent implements OnInit{

  userSignup!: FormGroup;
  constructor(private _fb:FormBuilder, 
    private _router:Router, 
    private _common:CommonService, 
    private _auth:AuthserviceService 
   ){}
  ngOnInit() {
    this.initForm();
  }

  select1:any = "selected";

  // Password Validator
  // PwdValidator(){
  //   let pwd = this.userSignup.get("password")?.value;
  //   let pwd2 = this.userSignup.get("rePassword")?.value;
  //   if(pwd == pwd2){
  //     return null
  //   }else{
  //     this.userSignup.get("password")?.setErrors({ mismatch: true });
  //     return { mismatch: true };
  //   }
  // }

  PwdValidator(form: FormGroup) {
    const pwd = form.get('password')?.value;
    const rePwd = form.get('rePassword')?.value;
    return pwd === rePwd ? null : { mismatch: true };
  }


  // Define Form Controller
  initForm(){
    this.userSignup = this._fb.group({
      tdate: [moment(new Date()).format("DD-MM-YYYY")],
      fName:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      rePassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      role:['user', [Validators.required]]
    }, {validators: this.PwdValidator });
  }

  // Data before save validation Model 
  datamodel(){
    return {
      tdate: new Date(),
      fName: this.userSignup.value.fName ?? '',
      email: this.userSignup.value.email ?? '',
      contact: this.userSignup.value.contact ?? '',
      password: this.userSignup.value.password ?? '',
      role: this.userSignup.value.role ?? '',
    };

  }



  // Submit Token
  onSubmit(){
    if (this.userSignup.invalid) {
      this.userSignup.markAllAsTouched();
      return;
    }
    const model= this.datamodel();  // validation
    let resp = this._auth.signup(model).subscribe(
      // res=>{  }

    {next: (res: any) => {
      if (res?.status === true) {
        // success
      } else {
        alert("Signup failed. Please try again.");
      }
    },
    error: (err) => {
      alert("Something went wrong during signup.");
    }}

    );
  }


  // signIn Btn
  signin(){
    this._router.navigate(['/login']);
  }
}
