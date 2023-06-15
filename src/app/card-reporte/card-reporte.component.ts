import { Component, Input } from '@angular/core';


@Component({
  selector: 'card-reporte',
  templateUrl: './card-reporte.component.html',
  styleUrls: ['./card-reporte.component.css']
})

export class CardReporteComponent {
  @Input() reporte: any
}


