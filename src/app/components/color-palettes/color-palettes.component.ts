import { Component, OnInit } from '@angular/core';
import { PalettesData } from '../../providers/palettes-data';

@Component({
  selector: 'app-color-palettes',
  templateUrl: './color-palettes.component.html',
  styleUrls: ['./color-palettes.component.scss']
})
export class ColorPalettesComponent implements OnInit {
  palettes = PalettesData;
  constructor() { }

  ngOnInit() {
  }

}