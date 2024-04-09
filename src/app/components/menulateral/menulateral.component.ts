import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.scss'],
})
export class MenulateralComponent implements OnInit {



  constructor(private router: Router,private navCtrl: NavController) { }

  ngOnInit() {}

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

