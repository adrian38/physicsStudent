import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private primengConfig: PrimeNGConfig) {
        // this.initializeApp();
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

    // initializeApp() {
    //   this.platform.ready().then(() => {
    //     this.changeStatusBar();
    //   });
    // }

    // async changeStatusBar() {
    //   // Verifica si la plataforma es móvil y está lista para manipular la barra de estado
    //   if (this.platform.is('capacitor')) {
    //     try {
    //       await StatusBar.setStyle({ style: Style.Light });
    //       await StatusBar.setBackgroundColor({ color: '63b5f6' });
    //     } catch (err) {
    //       console.log('Error setting status bar style and color', err);
    //     }
    //   }
    // }
}
