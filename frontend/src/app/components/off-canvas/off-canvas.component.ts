import { Component, Input, Output, EventEmitter} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as moment from 'moment-timezone';



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
  @Input() historico: any[] = [];

  close() {
    this.closeOffCanvas.emit();
  }

  formatarData(data: string): string {
    const formattedDate = moment(data).tz('America/Sao_Paulo').format('MM/DD/YYYY HH:mm:ss');

    return formattedDate;
  }
}
