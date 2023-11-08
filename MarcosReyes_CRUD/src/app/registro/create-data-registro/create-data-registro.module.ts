import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDataRegistroPageRoutingModule } from './create-data-registro-routing.module';

import { CreateDataRegistroPage } from './create-data-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDataRegistroPageRoutingModule
  ],
  declarations: [CreateDataRegistroPage]
})
export class CreateDataRegistroPageModule {}
