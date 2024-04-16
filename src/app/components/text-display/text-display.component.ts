import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-text-display',
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.scss'],
})
export class TextDisplayComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {}

}
