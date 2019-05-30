import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;


  constructor(private _http: HttpClient,
    private _router:Router) {
    this.getToken();
  }
  isLogged() {
    let userDtails = this.getUserDetails();
    if (userDtails) {
      let ahora = Date.now() / 1000;
      if (JSON.parse(userDtails).exp > ahora) {
        return true;
      }
      localStorage.removeItem('token');
    } return false;
  }
  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
  }
  login(objUsuario): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post('http://localhost:3000/api/auth/login', objUsuario, { headers: headers });
  }
  

  saveToken(token) {
    localStorage.setItem('token', token);
    this.token = token;
    this.getUserDetails();
  }

  getUserDetails() {
    if (this.token) {
      let centro = this.token.split('.')[1];
      return (window.atob(centro));
    } return null;
  }
  logout(){
    this.token=null;
    localStorage.removeItem("token");
    this._router.navigateByUrl('');

  }

}