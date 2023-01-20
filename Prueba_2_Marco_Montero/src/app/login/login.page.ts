import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticarService } from '../servicios/autenticar.service';
import { AlertController } from '@ionic/angular';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public auth: AutenticarService,
    private alerta: AlertController,
    public prod: ProductoService
  ) { }

  ngOnInit() {
  }
  public formulario = new FormGroup(
    {
      username: new FormControl('', [Validators.minLength(4)]),
      password: new FormControl('', [Validators.minLength(4)]),
      recordar: new FormControl(false)
    }
  )

  public async iniciarSesion() {
    if (this.formulario.valid) {
      this.auth.login({
        username:'atuny0',
        password:'9uQFF1Lh',
        // username: this.formulario.value.username as string,
        // password: this.formulario.value.password as string,
        recordar: this.formulario.value.recordar as boolean
      }
      )
      this.prod.llamarProductos()
    }else{
      const alertForm = await this.alerta.create(
        {
          header:'Atencion, Formulario llenado incorrectamente',
          buttons:[
            {
              text:'Ok',
              role:'confirm'
            }
          ]
        }
        )
        await alertForm.present()
    }
  }
}


