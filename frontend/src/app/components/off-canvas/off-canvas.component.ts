import { Component, Input, Output, EventEmitter} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(100%)' 
      })),
      transition('void <=> *', animate(300)),
    ]),
  ],
})
export class OffCanvasComponent {
  @Input() visivel: boolean = false;
  @Output() closeOffCanvas = new EventEmitter();

  close() {
    this.closeOffCanvas.emit();
  }
}
