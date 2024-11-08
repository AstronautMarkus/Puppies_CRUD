import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MRMPerritosService } from 'src/app/services/mrm-perritos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-edit-data-registro',
  templateUrl: './edit-data-registro.page.html',
  styleUrls: ['./edit-data-registro.page.scss'],
})
export class EditDataRegistroPage implements OnInit {


  registro: any;

  nuevoPerro = {
    MRM_nombre: '',
    MRM_raza: '',
    MRM_edad: 0,
    MRM_descripcion: ''
  };

  constructor(private route: ActivatedRoute,private perritosService: MRMPerritosService, private Router: Router, private AlertController: AlertController) { }


  isFormValid(): boolean {
    return [this.nuevoPerro.MRM_nombre, this.nuevoPerro.MRM_raza, this.nuevoPerro.MRM_descripcion].every(Boolean) && this.nuevoPerro.MRM_edad > 0;
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.AlertController.create({
      header: 'Alerta',
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  async mostrarAlertaConRedireccion(mensaje: string, redireccionUrl: string) {
    const alert = await this.AlertController.create({
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




  EditarPerro(){

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
        const registroActualizado = {
          MRM_nombre: this.nuevoPerro.MRM_nombre,
          MRM_raza: this.nuevoPerro.MRM_raza,
          MRM_edad: this.nuevoPerro.MRM_edad,
          MRM_descripcion: this.nuevoPerro.MRM_descripcion,
        };
      
        // Obtén el ID del registro a editar desde this.registro
        const id = this.registro.id;
      
        // Llama al servicio para actualizar el registro
        this.perritosService.MRM_actualizarRegistro(id, registroActualizado).subscribe(
          (response) => {
            if (response) {
              this.mostrarAlertaConRedireccion('El perro se ha actualizado con éxito.', '/get-registro');
            } else {
              this.mostrarAlerta('No se pudo actualizar el perro. El servidor no respondió correctamente.');
            }
          },
          (error) => {
            this.mostrarAlerta('Error: No se pudo actualizar el perro debido a un error en el servidor.');
            console.error('Error:', error);
          }
        );

  }


  regresarRegistro(){
    if (this.registro && this.registro.id) {
      this.Router.navigate(['/detalle-registro', this.registro.id]);
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.perritosService.MRM_leerRegistro(id).subscribe((registro) => {
        this.registro = registro;
        // Asignar los datos del registro al objeto nuevoPerro
        this.nuevoPerro.MRM_nombre = this.registro.MRM_nombre;
        this.nuevoPerro.MRM_raza = this.registro.MRM_raza;
        this.nuevoPerro.MRM_edad = this.registro.MRM_edad;
        this.nuevoPerro.MRM_descripcion = this.registro.MRM_descripcion;
      });
    });
  }

}
