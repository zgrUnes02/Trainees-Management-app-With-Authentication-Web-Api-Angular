import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService , private router: Router , private toastr: ToastrService) {}

  ngOnInit(): void {
      
  }

  loginSubmit() {
    this.authService.login(this.loginFormValidation.value).subscribe({
      next: (res => {
        this.authService.storeToken(res.token) ;
        this.toastr.success(res.message) ;
        this.router.navigate(['/trainees']);

      }) , 
      error:(err => {
        this.toastr.error(err?.error.message) ;
      })
    }) ;
  }

  loginFormValidation = new FormGroup({
    email: new FormControl("" , [Validators.email , Validators.required]) ,
    password: new FormControl("" , [Validators.required]) ,
  }) ;

  get email(): FormControl {
    return this.loginFormValidation.get('email') as FormControl ;
  }

  get password(): FormControl {
    return this.loginFormValidation.get('password') as FormControl ;
  }

}
