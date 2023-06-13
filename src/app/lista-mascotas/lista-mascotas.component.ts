import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})



export class ListaMascotasComponent {

  lista: Array<{ title: string, image: string, ultimo_visto: string, description: string, contact: string, country: string, url: string, visible: boolean }>;

  constructor() {
    this.lista = [
      { visible: true, title: 'PERRO PERDIDO', image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*', ultimo_visto: '01/02/2021', description: 'Lorem ipsum', contact: '85412', country: 'Paraguay', url: '#' },
      { visible: true, title: 'GATO PERDIDO', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg', ultimo_visto: '01/02/2021', description: 'Perro perdido cerca de mi casa', contact: '85412', country: 'Paraguay', url: '#' },
      { visible: true, title: 'PERRO ENCONTRADO', image: 'https://www.humanesociety.org/sites/default/files/2019/02/dog-451643.jpg', ultimo_visto: '01/02/2021', description: 'Lorem ipsum 2', contact: '85412', country: 'Paraguay', url: '#' },
      { visible: false, title: 'PERRO AVISTADO', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0S_CD0scNvLlcPGrdOYREOFnR6udFK7i6A&usqp=CAU', ultimo_visto: '01/02/2021', description: 'Perro avistado cerca de Mcal Lopez', contact: '85412', country: 'Paraguay', url: '#' }
    ]
  }

}
