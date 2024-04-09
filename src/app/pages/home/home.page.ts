import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    options: string[] = ['Contenido', 'Simulaciones', 'Tutoriales', 'Exámenes', 'Quiz', 'Progreso', 'Chat'];

    constructor(public navCtrl: NavController, private platform: Platform) {}

    ngOnInit() {
        this.platform.backButton.subscribeWithPriority(10, () => {
            this.navCtrl.navigateRoot('/login', {
                animated: true,
                animationDirection: 'back',
            });
        });
    }

    routeTopage(element: number) {
        setTimeout(() => {
            let path;
            switch (element) {
                case 1:
                    // Assuming `this.options[element]` is a string that needs to be converted to lower case.
                    path = `/${this.options[element].toLocaleLowerCase()}/0`;
                    break;
                case 2:
                    path = '/simulaciones/1';
                    break;
                case 3:
                    path = '/autoexamen';
                    break;
                default:
                    // This assumes that for all other values of `element`, `this.options[element]` is valid and intended.
                    path = `/${this.options[element].toLocaleLowerCase()}`;
                    break;
            }

            this.navCtrl.navigateRoot(path, {
                animated: true,
                animationDirection: 'forward',
            });
        }, 300);
    }
}
