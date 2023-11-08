import { Component, OnInit, Injector, Optional } from '@angular/core';
import { MRMPerritosService } from 'src/app/services/mrm-perritos.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-registro',
  templateUrl: './get-registro.page.html',
  styleUrls: ['./get-registro.page.scss'],
})
export class GetRegistroPage implements OnInit {
  private perritosService: MRMPerritosService | null = null;
  registros: any[] = [];
  private subscription: Subscription | null = null;

  constructor(@Optional() private injector: Injector, private Router: Router) {}

  verDetalle(MRM_id: number) {
    console.log('ID:', MRM_id);
    this.Router.navigate(['/detalle-registro', MRM_id]);
  }
  
  ngOnInit() {
    // Obtener el servicio cuando sea necesario
    this.perritosService = this.injector.get(MRMPerritosService);
    
    // Suscribirte al servicio y almacenar la suscripción
    this.subscription = this.perritosService.MRM_listarRegistros().subscribe((registros) => {
      this.registros = registros;
      // Hacer algo con la lista de registros
    });
  }

  ngOnDestroy() {
    // Desuscribirte de la suscripción al destruir la página
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
