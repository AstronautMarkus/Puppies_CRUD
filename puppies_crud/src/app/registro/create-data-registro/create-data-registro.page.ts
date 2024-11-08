import { Component, OnInit } from '@angular/core';
import { MRMPerritosService } from 'src/app/services/mrm-perritos.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-data-registro',
  templateUrl: './create-data-registro.page.html',
  styleUrls: ['./create-data-registro.page.scss'],
})
export class CreateDataRegistroPage implements OnInit {
  nuevoPerro = {
    MRM_nombre: '',
    MRM_raza: '',
    MRM_edad: 0,
    MRM_descripcion: ''
  };

  constructor(private perritosService: MRMPerritosService, private Router: Router, public alertController: AlertController){}


  isFormValid(): boolean {
    return [this.nuevoPerro.MRM_nombre, this.nuevoPerro.MRM_raza, this.nuevoPerro.MRM_descripcion].every(Boolean) && this.nuevoPerro.MRM_edad > 0;
  }
  
  

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  async mostrarAlertaConRedireccion(mensaje: string, redireccionUrl: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensaje,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.Router.navigate([redireccionUrl]).then(() => {
              location.reload();
            });
          }
        }
      ]
    });
  
    await alert.present();
  }

  crearPerro() {
    // Verifica si los campos están vacíos
    if (
      !this.nuevoPerro.MRM_nombre ||
      !this.nuevoPerro.MRM_raza
    ) {
      this.mostrarAlerta('Por favor, complete todos los campos y asegúrese de que la edad sea válida.');
      return; // No crea el perro si hay campos vacíos o edad no válida.
    }

    if (this.nuevoPerro.MRM_edad > 100){
      this.mostrarAlerta('Por favor, verifique la edad, no se admite mas de 100.');
      return;
    }
    
    if (this.nuevoPerro.MRM_edad < 0){
      this.mostrarAlerta('Por favor, verifique la edad, no se admite menos de 0.');
      return;
    }
    
    this.perritosService.MRM_grabarRegistro(this.nuevoPerro).subscribe(
      response => {
        // Comprobar si la respuesta del servidor es exitosa
        if (response) {
          this.mostrarAlertaConRedireccion('El perro se ha creado con éxito.', '/get-registro');
        } else {
          this.mostrarAlerta('No se pudo crear el perro. El servidor no responde correctamente.');
        }
      },
      error => {
        // Mostrar alerta de error en caso de una respuesta con error
        this.mostrarAlerta('Error: No se pudo crear el perro debido a un error en el servidor.');
        console.error('Error:', error);
      }
    );
  }

  

  ngOnInit() {
  }

}
