import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculatorFormGroup!: FormGroup;

  coffeeInput!: number;
  waterInput!: number;

  coffeeResult!: number;
  waterResult!: number;


  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
    this.calculatorFormGroup = this.fb.group({

      coffeeInput: [],
      waterInput: [],

      coffeeResult: [],
      waterResult: []
    });
  }

}
