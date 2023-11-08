import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MRMPerritosService } from 'src/app/services/mrm-perritos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.page.html',
  styleUrls: ['./detalle-registro.page.scss'],
})
export class DetalleRegistroPage implements OnInit {
  registro: any;

  constructor(private route: ActivatedRoute,private perritosService: MRMPerritosService, private Router: Router, private AlertController: AlertController) { }


  async confirmarEliminacion() {
    const alert = await this.AlertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Eliminar',
          handler: () => {
            // Lógica para eliminar el registro
            this.eliminarRegistro();
          },
        },
      ],
    });

    await alert.present();
  }

  eliminarRegistro() {
    if (this.registro && this.registro.id) {
      const id = this.registro.id;
  
      console.log('Eliminando registro con ID: ' + id);
  
      // Llama al servicio para eliminar el registro por ID
      this.perritosService.MRM_eliminarRegistro(id).subscribe((response) => {
        console.log('Respuesta del servidor:', response);
        // Redirige a la lista después de eliminar
        this.Router.navigate(['/get-registro']).then(() => {
          location.reload();
        });
      });
    }
  }
  
  

  backList() {
    this.Router.navigate(['/get-registro']);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.perritosService.MRM_leerRegistro(id).subscribe((registro) => {
        this.registro = registro;
      });
    });
  }

}
