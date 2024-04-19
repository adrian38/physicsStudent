import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-tutorial',
  templateUrl: './text-tutorial.component.html',
  styleUrls: ['./text-tutorial.component.scss'],
})
export class TextTutorialComponent implements OnInit {

  @Input() title: string;
  @Input() text_principal: string;
  @Input() text_objetivo: string;
  @Input() text_materiales: string[];
  //@Input() text_materiales: string;

  constructor() {

   }

  ngOnInit() {
   
  }

}
