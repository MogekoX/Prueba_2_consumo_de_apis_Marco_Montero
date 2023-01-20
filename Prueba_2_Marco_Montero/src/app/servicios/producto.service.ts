import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, respuestaProducto } from '../modelos/productos';
import { AutenticarService } from './autenticar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public URL_PROD = 'https://dummyjson.com/auth/products'
  public datosProd?: respuestaProducto;
  constructor(
    private client: HttpClient,
    public auth: AutenticarService
  ) { }

  public llamarProductos() {
    this.client.get<respuestaProducto>(this.URL_PROD, {
      headers: {
        'ContentType': 'application/json',
        'Authorization': 'Bearer ' + this.auth.obtenerToken()
      }
    }
    )
      .subscribe((datosProductos) => {
        if (datosProductos) {
          this.datosProd = datosProductos
        }
      }
      )
  }
}
