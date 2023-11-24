import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-dinamic',
  templateUrl: './input-dinamic.component.html',
  styleUrls: ['./input-dinamic.component.css']
})
export class InputDinamicComponent {

  @Input() label: string = '';
  @Input() inputType: string = '';
  @Input() value: any;
  @Output() onInputChange: EventEmitter<any> = new EventEmitter<any>();

  emitInputChange(value: any) {
    this.onInputChange.emit(value);
  }
}
