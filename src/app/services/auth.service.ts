import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url: string = "https://localhost:7083/api/User" ;

  constructor(private httpClient: HttpClient , private router: Router) { }

  //! Register new user
  register(userData: any) {
    return this.httpClient.post<any>(`${this.url}/register` , userData) ;
  }

  //! Login user
  login(userCredential: any) {
    return this.httpClient.post<any>(`${this.url}/login` , userCredential) ;
  }
  
  //! Store the token inside local storage
  storeToken(token: string) {
    localStorage.setItem('token' , token) ;
  }

  //! Get token
  getToken() {
    return localStorage.getItem('token') ;
  }

  //! Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')  ; //* "!!" means if there is a token return true else return false
  }

  //! Logout user
  logGout() {
    localStorage.clear() ;
    this.router.navigate(['login']);
  }
}
