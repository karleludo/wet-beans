import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-input',
  templateUrl: './special-input.component.html',
  styleUrls: ['./special-input.component.css']
})
export class SpecialInputComponent implements OnInit {
  @Input() labelName: string;
  

  constructor() { 
    this.labelName = "Label Text";
  }

  ngOnInit(): void {
  }

}
