import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditregisterPageRoutingModule } from './editregister-routing.module';

import { EditregisterPage } from './editregister.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditregisterPageRoutingModule
  ],
  declarations: [EditregisterPage]
})
export class EditregisterPageModule {}
