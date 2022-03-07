import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  CoffeeInput: number;
  WaterInput: number;

  CoffeeResult: number;
  WaterResult: number;


  constructor() {

    this.CoffeeInput = 0;
    this.WaterInput = 0;

    this.CoffeeResult = 0;
    this.WaterResult = 0;
    
   }

  ngOnInit(): void {
  }

}
