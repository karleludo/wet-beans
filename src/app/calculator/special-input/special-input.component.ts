import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-special-input',
  templateUrl: './special-input.component.html',
  styleUrls: ['./special-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SpecialInputComponent,
      multi: true,
    }
  ]
})
export class SpecialInputComponent implements OnInit, ControlValueAccessor {
  @Input() labelName!: string;
  value!: number;
  
  onChange!: (value: number) => void;

  constructor() {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}

  ngOnInit(): void {}
}

