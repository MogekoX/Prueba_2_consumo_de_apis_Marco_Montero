import { Component, OnInit } from '@angular/core';
import { AutenticarService } from '../servicios/autenticar.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    public auth:AutenticarService
  ) { }

  ngOnInit() {
  }

}
