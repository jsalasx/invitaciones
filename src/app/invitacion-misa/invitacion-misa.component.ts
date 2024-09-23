import { Component } from '@angular/core';

@Component({
  selector: 'app-invitacion-misa',
  standalone: true,
  imports: [],
  templateUrl: './invitacion-misa.component.html',
  styleUrl: './invitacion-misa.component.scss'
})
export class InvitacionMisaComponent {
  nombreFallecido: string = 'Segundo Angel Aluisa Analuisa';
  fechaMisa: string = '28 de septiembre de 2024';
  horaMisa: string = '13:00 PM';
  nombreIglesia: string = 'Catedral de Guaranda ';
  nombreFamilia: string = 'Familia Aluisa ';
  linkGoogleMaps: string = 'https://maps.app.goo.gl/ZWgZUygtKxSWabHt5'
}
