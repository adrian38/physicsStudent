import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PrimeNGConfig } from 'primeng/api';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig,private platform: Platform) {
    this.initializeApp();
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.changeStatusBar();
    });
  }

  async changeStatusBar() {
    // Verifica si la plataforma es móvil y está lista para manipular la barra de estado
    if (this.platform.is('hybrid')) {
      try {
        await StatusBar.setStyle({ style: Style.Dark });
        await StatusBar.setBackgroundColor({ color: '#yourHexColor' });
      } catch (err) {
        console.log('Error setting status bar style and color', err);
      }
    }
  }
}
