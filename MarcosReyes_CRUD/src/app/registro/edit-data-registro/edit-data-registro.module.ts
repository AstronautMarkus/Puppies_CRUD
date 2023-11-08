import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDataRegistroPageRoutingModule } from './edit-data-registro-routing.module';

import { EditDataRegistroPage } from './edit-data-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDataRegistroPageRoutingModule
  ],
  declarations: [EditDataRegistroPage]
})
export class EditDataRegistroPageModule {}
