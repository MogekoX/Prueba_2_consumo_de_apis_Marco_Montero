import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { respuestaUser, User } from '../modelos/usuarios';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {
  public URL_AUTH = 'https://dummyjson.com/auth/login'
  public datosUsuario: respuestaUser | null = null

  constructor(
    private client: HttpClient,
    private alerta: AlertController,
    private route: Router
  ) { }

  public login({ username, password,recordar }: User) {
    this.client.post<respuestaUser>(this.URL_AUTH, {
      username,
      password,
      recordar
    }, {
      headers: { 'ContentType': 'application/json' }
    })
      .pipe(
        catchError(async (error: HttpErrorResponse) => {
          if (error.status === 400) {
            const alert = await this.alerta.create(
              {
                header: 'Datos Incorrectos',
                buttons: [
                  {
                    text: 'Ok',
                    role: 'confirm'
                  }
                ]
              }
            )
            await alert.present()
          }
          return null
        }
        )
      )
      .subscribe(async (datos) =>{
        if(datos){
          this.datosUsuario = datos
          this.route.navigate(['/principal'])
          const alertOk = await this.alerta.create(
            {
              header: 'Bienvenid@: ' + this.datosUsuario.firstName,
              buttons:[
                {
                  text:'Gracias :D',
                  role:'confirm'
                }
              ]
            }
          )
          await alertOk.present()
        }
      }
      )

  }

  public obtenerToken(){
    return this.datosUsuario?.token
  }

}

