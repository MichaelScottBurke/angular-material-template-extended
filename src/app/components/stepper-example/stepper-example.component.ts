import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-example',
  templateUrl: './stepper-example.component.html',
  styleUrls: ['./stepper-example.component.scss']
})
export class StepperExampleComponent implements OnInit {
   //stepper
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}