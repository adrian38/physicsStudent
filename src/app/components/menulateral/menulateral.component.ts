import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.scss'],
})
export class MenulateralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToPage(route: string) {
    this.router.navigateByUrl(route);
  }

  

  

}
