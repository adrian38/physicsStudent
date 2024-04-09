import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AvatarModule } from 'primeng/avatar';

import { IonicModule } from '@ionic/angular';
import { CardGeneralComponent } from './card-general/card-general.component';
import { CardPreComponent } from './card-pre/card-pre.component';
import { MenulateralComponent } from './menulateral/menulateral.component';
import { RouterModule } from '@angular/router';
import { CardIconComponent } from './card-icon/card-icon.component';

@NgModule({
    declarations: [HeaderComponent, CardGeneralComponent, CardPreComponent, MenulateralComponent, CardIconComponent],
    exports: [HeaderComponent, CardGeneralComponent, CardPreComponent, MenulateralComponent, CardIconComponent],
    imports: [CommonModule, IonicModule, AvatarModule],
    // imports: [CommonModule, IonicModule, AvatarModule,RouterModule],
})
export class ComponentsModule {}
