import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-dinamic',
  templateUrl: './input-dinamic.component.html',
  styleUrls: ['./input-dinamic.component.css']
})
export class InputDinamicComponent {

  @Input() label: string = '';
  @Input() inputType: string = '';
  @Input() value:string = '';
  @Input() name:string = "";
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange() {
    this.valueChange.emit(this.value);
  }
}
