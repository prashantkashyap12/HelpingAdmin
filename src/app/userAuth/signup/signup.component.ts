import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import moment from 'moment';
import { AuthserviceService } from '../authservice.service';
import { CommonModule } from '@angular/common';
import { Router, RouterEvent, RouterOutlet } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  userSignup!: FormGroup;
  constructor(private _fb:FormBuilder, private _router:Router){}
  ngOnInit(): void {
    this.initForm();
  }

  select1:any = "selected";

  // Password Validator
  PwdValidator(){
    let pwd = this.userSignup.get("passwrod");
    let pwd2 = this.userSignup.get("rePasswrod");
    if(pwd == pwd2){
      return null
    }else{
      this.userSignup.get("password")?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }

  // Define Form Controller
  initForm(){
    this.userSignup = this._fb.group({
      tdate: [moment(new Date()).format("DD-MM-YYYY")],
      fName:['', [Validators.required]],
      email:['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)], Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')],
      rePassword: ['', [Validators.required, Validators.minLength(6)], Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')],
      role:['user', [Validators.required]],
    })
  }

  // Data save Model 
  datamodel(){
    tdate:new Date()
    fName: this.userSignup.value.name == null || this.userSignup.value.name == undefined ? "" : this.userSignup.value.name;
    email: this.userSignup.value.email == null || this.userSignup.value.email == undefined ? "" : this.userSignup.value.email;
    contact: this.userSignup.value.contact == null || this.userSignup.value.contact == undefined ? "" : this.userSignup.value.contact;
    password: this.userSignup.value.password == null || this.userSignup.value.password == undefined ? "" : this.userSignup.value.password;
    role: this.userSignup.value.role == null || this.userSignup.value.role == undefined ? "" : this.userSignup.value.role;
  }

  // check all value is Valid or not send ngPrime Alert 
  isFormValid(){
    if(this.userSignup.value.name == null || this.userSignup.value.name == ""){
      alert("Please Enter Name");
      setTimeout(()=>{
        document.getElementById('fName')?.focus();
      },1500)
    }else if(this.userSignup.value.email == null || this.userSignup.value.email == ""){
      setTimeout(()=>{
        $("#" + "email").find("input").focus()
      },1500)
      alert("Please Enter Email")
    }
    else{
      true
    }
  }


  // Data Submit function 
  onSubmit(){
    this.isFormValid();
    if (this.userSignup.valid) {
      console.log('Form Submitted', this.userSignup.value);
    } else {
      console.warn('Form Invalid');
    }
  }

  signin(){
    this._router.navigate(['/login'])
  }

}
