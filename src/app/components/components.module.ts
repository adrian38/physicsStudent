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
import { TextDisplayComponent } from './text-display/text-display.component';
import { TextTutorialComponent } from './text-tutorial/text-tutorial.component';

@NgModule({
    declarations: [HeaderComponent, CardGeneralComponent, CardPreComponent, MenulateralComponent, CardIconComponent,TextDisplayComponent,TextTutorialComponent],
    exports: [HeaderComponent, CardGeneralComponent, CardPreComponent, MenulateralComponent, CardIconComponent,TextDisplayComponent,TextTutorialComponent],
    imports: [CommonModule, IonicModule, AvatarModule],
    // imports: [CommonModule, IonicModule, AvatarModule,RouterModule],
})
export class ComponentsModule {}
