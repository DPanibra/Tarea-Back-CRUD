import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  // emisor es un disparador de eventos
  // su funcion emit() es escuchada por el padre
  usuario;

  @Output()
  emisor = new EventEmitter<void>();

  receptor() {
    alert(' No puedes pasar :v ')
  }

  constructor(private _sAuth: AuthService) { }

  ngOnInit() {
    this.usuario = (JSON.parse(this._sAuth.getUserDetails()).usuario_nom);

  }
  cerrarSesion() {
    this._sAuth.logout();
  }

}