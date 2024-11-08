import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDataRegistroPage } from './edit-data-registro.page';

const routes: Routes = [
  {
    path: '',
    component: EditDataRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDataRegistroPageRoutingModule {}
