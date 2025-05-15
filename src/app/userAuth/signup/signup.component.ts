import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  userSignup!: FormGroup;
  
  // constructor(private _fb:FormBuilder, private _authSer:AuthserviceService){}
  // ngOninit(){
  //   this.Init();
  // }

  // Init(){
  //   this.userSignup = this._fb.group({
  //     tdate: ['', [Validators.required]],
  //     name:['', [Validators.required]],
  //     role:['', [Validators.required]],
  //     email:['', [Validators.required]],
  //     contact:[0, [Validators.required]],
  //     password:['', [Validators.required]],
  //     re_password:['',[Validators.required]],
  //   })
  // }

  // // form Inislization
  // formControl(){
  // }


  // // data save Model 
  // datamodel(){
  //   // tdate:moment(new Date()).format('YYYY-MM-DD')
  //   name: this.userSignup.value.name == null || this.userSignup.value.name == undefined ? 0 : this.userSignup.value.name;
  //   role: this.userSignup.value.role == null || this.userSignup.value.role == undefined ? 0 : this.userSignup.value.role;
  //   email: this.userSignup.value.email == null || this.userSignup.value.email == undefined ? 0 : this.userSignup.value.email;
  //   contact: this.userSignup.value.contact == null || this.userSignup.value.contact == undefined ? 0 : this.userSignup.value.contact;
  //   password: this.userSignup.value.password == null || this.userSignup.value.password == undefined ? 0 : this.userSignup.value.password;
  // }

  // // data Submit function 
  // onSubmit(){
  //   let model = this.datamodel();
  //   this._authSer.signup(model).subscribe(res=>{
  //     if (res) {
  //       alert(res.message);
  //     }else{

  //     }
  //   })
  // }

  // // Data Allot Function
  // allotFun(){ }

  // // delete function
  // delete(){}

  // fresh(){

  //   this.userSignup.reset();
    
  // }
}
