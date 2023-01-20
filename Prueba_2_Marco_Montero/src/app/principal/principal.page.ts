import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(
    public prod: ProductoService
  ) { }

  ngOnInit() {
  }

}
