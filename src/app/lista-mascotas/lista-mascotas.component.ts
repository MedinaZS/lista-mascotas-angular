import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})

export class ListaMascotasComponent {

  @Input() lista: any

}
