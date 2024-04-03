import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AvatarModule } from 'primeng/avatar';

import { IonicModule } from '@ionic/angular';
import { CardGeneralComponent } from './card-general/card-general.component';
import { CardPreComponent } from './card-pre/card-pre.component';
import { MenulateralComponent } from './menulateral/menulateral.component';

@NgModule({
  declarations: [HeaderComponent, CardGeneralComponent, CardPreComponent,MenulateralComponent],
  exports: [HeaderComponent, CardGeneralComponent, CardPreComponent,MenulateralComponent],
  imports: [CommonModule, IonicModule, AvatarModule],
})
export class ComponentsModule {}
