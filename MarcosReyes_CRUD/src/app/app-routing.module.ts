import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MRMPerritosService } from './services/mrm-perritos.service';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'get-registro',
    loadChildren: () => import('./registro/get-registro/get-registro.module').then( m => m.GetRegistroPageModule)
  },
  {
    path: 'detalle-registro/:id',
    loadChildren: () => import('./registro/detalle-registro/detalle-registro.module').then( m => m.DetalleRegistroPageModule)
  },
  {
    path: 'create-data-registro',
    loadChildren: () => import('./registro/create-data-registro/create-data-registro.module').then( m => m.CreateDataRegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules },)
  ],
  exports: [RouterModule],
  providers: [MRMPerritosService]
})
export class AppRoutingModule { }
