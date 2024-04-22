import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController ,} from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.scss'],
})
export class MenulateralComponent implements OnInit {

  ruta = ""

  constructor(private router: Router,private navCtrl: NavController) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('URL actual:', event.url);
      this.ruta= event.url
      // Aquí puedes hacer cualquier cosa que necesites con la URL actual
    });
  }

     
  

   

  ngOnInit() {
  
  }

/*   navigateToPage(route: string) {
    this.router.navigateByUrl(route);
  }

   */

  
  navigateToInicio() {
    this.navCtrl.navigateForward('/home');
  }
  navigateToContenido() {
    this.navCtrl.navigateForward('/contenido');
  }
  navigateToSimulaciones() {
    this.navCtrl.navigateForward('/simulaciones/0');
  }
  navigateToTutoriales() {
    this.navCtrl.navigateForward('/simulaciones/1');
  }
  navigateToExamenes() {
    this.navCtrl.navigateForward('/autoexamen');
  }
  navigateToQuiz() {
    this.navCtrl.navigateForward('/quiz');
  }
  navigateToProgreso() {
    this.navCtrl.navigateForward('/home');
  }
  navigateToChat() {
    this.navCtrl.navigateForward('/home');
  }
}

