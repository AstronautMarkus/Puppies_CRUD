import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDataRegistroPage } from './create-data-registro.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDataRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDataRegistroPageRoutingModule {}
