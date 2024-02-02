import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private authService: AuthService , private router: Router , private toastr: ToastrService) {}

  ngOnInit(): void {
      
  }

  signUpSubmit() {
    this.authService.register(this.signUpFormValidation.value).subscribe({
      next:(res => {
        this.toastr.success(res.message) ;
        this.router.navigate(['/login']);
      }) ,
      error:(err => {
        this.toastr.error(err?.error.message) ;
      }) 
    });
  }

  signUpFormValidation = new FormGroup({
    fullName: new FormControl("" , [Validators.required]) ,
    email: new FormControl("" , [Validators.required , Validators.email]) ,
    password: new FormControl("" , [Validators.required , Validators.minLength(5) , Validators.maxLength(20)]) ,
    role: new FormControl("admin" , []) ,
    token: new FormControl("string" , []) ,
  }) ;

  get fullName(): FormControl {
    return this.signUpFormValidation.get("fullName") as FormControl ;
  }

  get email(): FormControl {
    return this.signUpFormValidation.get("email") as FormControl ;
  }

  get password(): FormControl {
    return this.signUpFormValidation.get("password") as FormControl ;
  }

}
