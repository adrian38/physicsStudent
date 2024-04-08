import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss'],
})
export class CardIconComponent implements OnInit {
  @Input() title: string = '';

  disable: boolean = false;
  image = '';

  constructor() {}

  ngOnInit() {
    this.image = `assets/images/${this.title}.png`;

    // if (
    //   // this.title === 'Tutoriales' ||

    //   // this.title === 'Evaluación' ||
    //   this.title === 'Magnetismo'
    // ) {
    //   this.disable = true;
    // }
  }
}
