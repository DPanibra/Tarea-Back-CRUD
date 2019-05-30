
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  objUsuario = {
    usuario_email: '',
    usuario_pass: ''
  }

  constructor(private _sAuth: AuthService,
    private  _router:Router) {
  
   }
   
  ngOnInit() {
    
  }

  login() {
    this._sAuth.login(this.objUsuario).subscribe((respuesta) => {
      if(respuesta.message=="ok" && respuesta.token){
        this._sAuth.saveToken(respuesta.token);
        this._router.navigateByUrl("/logged");
      }else{
        console.log("error");
        
      }
    });
  }

}