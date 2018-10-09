import { Component, OnInit } from '@angular/core';
import { ThemeData } from '../../providers/theme-data';

@Component({
  selector: 'app-buttons-example',
  templateUrl: './buttons-example.component.html',
  styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent implements OnInit {
  themeValues = ThemeData;

  constructor() { }

  ngOnInit() {
  }

}