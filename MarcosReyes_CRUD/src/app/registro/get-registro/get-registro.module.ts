import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetRegistroPageRoutingModule } from './get-registro-routing.module';

import { GetRegistroPage } from './get-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetRegistroPageRoutingModule
  ],
  declarations: [GetRegistroPage]
})
export class GetRegistroPageModule {}
