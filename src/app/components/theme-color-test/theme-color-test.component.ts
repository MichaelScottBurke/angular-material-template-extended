import { Component, OnInit } from '@angular/core';
import { ThemeData } from '../../providers/theme-data';

@Component({
  selector: 'app-theme-color-test',
  templateUrl: './theme-color-test.component.html',
  styleUrls: ['./theme-color-test.component.scss']
})
export class ThemeColorTestComponent implements OnInit {
themeLevels = ThemeData;
  constructor() { }

  ngOnInit() {
  }

}