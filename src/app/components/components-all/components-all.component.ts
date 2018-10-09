import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm, } from '@angular/forms';
import { ThemeData } from '../../providers/theme-data';
import { ErrorStateMatcher } from '@angular/material/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

//for lists
export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-components-all',
  templateUrl: './components-all.component.html',
  styleUrls: ['./components-all.component.scss']
})
export class ComponentsAllComponent implements OnInit {
  themeValues = ThemeData;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  //for date picker
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  matcher = new MyErrorStateMatcher();

  //for lists
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  //text field
   value = 'Clear me';

  constructor() { }

  ngOnInit() {
  }

}