import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetRegistroPage } from './get-registro.page';

const routes: Routes = [
  {
    path: '',
    component: GetRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetRegistroPageRoutingModule {}
