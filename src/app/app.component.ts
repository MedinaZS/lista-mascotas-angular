import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reporte de Mascotas';

  lista: any = []

  constructor() {
    this.lista = [
      { visible: true, title: 'PERRO PERDIDO', image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*', ultimo_visto: '01/02/2021', description: 'Lorem ipsum', contact: '85412', country: 'Paraguay', url: '#' },
      { visible: true, title: 'GATO PERDIDO', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg', ultimo_visto: '01/02/2021', description: 'Perro perdido cerca de mi casa', contact: '85412', country: 'Paraguay', url: '#' },
      { visible: true, title: 'PERRO ENCONTRADO', image: 'https://www.humanesociety.org/sites/default/files/2019/02/dog-451643.jpg', ultimo_visto: '01/02/2021', description: 'Lorem ipsum 2', contact: '85412', country: 'Paraguay', url: '#' },
      { visible: false, title: 'PERRO AVISTADO', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0S_CD0scNvLlcPGrdOYREOFnR6udFK7i6A&usqp=CAU', ultimo_visto: '01/02/2021', description: 'Perro avistado cerca de Mcal Lopez', contact: '85412', country: 'Paraguay', url: '#' }
    ]
  }
  // Form

  formData = {
    title: '',
    description: '',
    image: '',
    contact: '',
    last_view: '',
    country: '',
    url: ''
  };

  newReport = {}

  patternUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/

  todayDate = new Date().toLocaleDateString('fr-ca')

  submitForm(form: NgForm) {
    if (form.valid) {
      // Realizar acciones cuando el formulario es válido
      console.log('Formulario válido');
      // Add item to list
      this.newReport = {
        title: this.formData.title,
        description: this.formData.description,
        image: this.formData.image,
        contact: this.formData.contact,
        last_view: this.formData.last_view,
        country: this.formData.country,
        url: this.formData.url
      }
      
      this.lista.unshift(this.newReport)
      form.resetForm()
      alert("Reporte agregado")

    } else {
      // Mostrar mensajes de error o realizar acciones adicionales
      console.log('Formulario inválido');
    }
  }
}
