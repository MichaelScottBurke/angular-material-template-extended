import { Component, OnInit } from '@angular/core';


export interface TypeScale {
  category: string;
  oldcategory: string;
  typeface: string;
  font: string;
  size: number;
  weight: number;
  letterspacing: number;
  lineheight: number;
  case: string;
  cssclass: string;
}

const ELEMENT_DATA: TypeScale[] = [

  {
  category: 'Headline 1',
  oldcategory: 'was "Display 4"',
  typeface: 'Avenir',
  font: 'Light',
  size: 96,
  weight: 200,
  letterspacing: 0,
  lineheight: 112,
  case: 'Sentence',
  cssclass: 'custom-headline-1',
  img: 'Headline-1.png'
  },


{
  category: 'Headline 2',
  oldcategory: 'was "Display 3"',
  typeface: 'Avenir',
  font: 'Light',
  size: 60,
  weight: 200,
  letterspacing: 0,
  lineheight: 71,
  case: 'Sentence',
  cssclass: 'custom-headline-2',
  img: 'Headline-2.png'
},
{
  category: 'Headline 3',
  oldcategory: 'was "Display-2"',
  typeface: 'Avenir',
  font: 'Roman',
  size: 48,
  weight: 400,
  letterspacing: 0,
  lineheight: 57,
  case: 'Sentence',
  cssclass: 'custom-headline-3',
  img: 'Headline-3.png'
},
{
  category: 'Headline 4',
  oldcategory: 'was "Display-1"',
  typeface: 'Avenir',
  font: 'Roman',
  size: 34,
  weight: 400,
  letterspacing: 0,
  lineheight: 40,
  case: 'Sentence',
  cssclass: 'custom-headline-4',
  img: 'Headline-4.png'
},

  {
    category: 'Headline 5',
    oldcategory: 'was "Headline"',
    typeface: 'Avenir',
    font: 'Roman',
    size: 24,
    weight: 400,
    letterspacing: 0,
    lineheight: 28,
    case: 'Sentence',
    cssclass: 'custom-headline-5',
    img: 'Headline-5.png'
  },
  {
    category: 'Headline 6',
    oldcategory: 'was "Title"',
    typeface: 'Avenir',
    font: 'Roman',
    size: 20,
    weight: 700,
    letterspacing: 0,
    lineheight: 24,
    case: 'sentence',
    cssclass: 'custom-headline-6',
    img: 'Headline-6.png'
  },
  {
    category: 'Subtitle 1',
    oldcategory: 'was "Subheading 2"',
    typeface: 'Avenir',
    font: 'Roman',
    size: 16,
    weight: 400,
    letterspacing: 0,
    lineheight: 24,
    case: 'sentence',
    cssclass: 'custom-subtitle-1',
    img: 'Subtitle-1.png'
  },
  {
    category: 'Subtitle 2',
    oldcategory: 'was "Subheading 1"',
    typeface: 'Avenir',
    font: 'Roman',
    size: 15,
    weight: 700,
    letterspacing: 0,
    lineheight: 24,
    case: 'sentence',
    cssclass: 'custom-subtitle-2',
    img: 'Subtitle-2.png'
  },
  {
    category: 'Body 1',
    oldcategory: 'was "Body 2"',
    typeface: 'Avenir',
    font: 'Medium',
    size: 16,
    weight: 400,
    letterspacing: 0,
    lineheight: 28,
    case: 'sentence',
    cssclass: 'custom-body-1',
    img: 'Body-1.png'
  },
  {
    category: 'Body 2',
    oldcategory: 'was "Body 1"',
    typeface: 'Avenir',
    font: 'Roman',
    size: 14,
    weight: 400,
    letterspacing: 0,
    lineheight: 20,
    case: 'sentence',
    cssclass: 'custom-body-2',
    img: 'Body-2.png'
  },
  {
    category: 'Button',
    oldcategory: '',
    typeface: 'Avenir',
    font: 'Heavy',
    size: 14,
    weight: 700,
    letterspacing: .8,
    lineheight: 16,
    case: 'ALL-CAPS',
    cssclass: 'custom-button',
    img: 'Button.png'
  },
  {
    category: 'Caption',
    oldcategory: '',
    typeface: 'Avenir',
    font: 'Roman',
    size: 12,
    weight: 400,
    letterspacing: 0,
    lineheight: 16,
    case: 'Sentence',
    cssclass: 'custom-caption',
    img: 'Caption.png'
  },
  {
    category: 'Overline',
    oldcategory: '',
    typeface: 'Avenir',
    font: 'Heavy',
    size: 10,
    weight: 700,
    letterspacing: 1.5,
    lineheight: 14,
    case: 'ALL-CAPS',
    cssclass: 'custom-overline',
    img: 'Overline.png'
  }
];


@Component({
  selector: 'app-typography-categories',
  templateUrl: './typography-categories.component.html',
  styleUrls: ['./typography-categories.component.scss']
})
export class TypographyCategoriesComponent implements OnInit {

  displayedColumns: string[] = [
    'category', 
    'typeface', 
    'font', 
    'size', 
    'letterspacing', 
    'lineheight', 
    'case', 
    'cssclass'   
  ];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}