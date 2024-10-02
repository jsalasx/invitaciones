import { Component } from '@angular/core';

@Component({
  selector: 'app-invitacion-misa-caluma',
  standalone: true,
  imports: [],
  templateUrl: './invitacion-misa-caluma.component.html',
  styleUrl: './invitacion-misa-caluma.component.scss'
})
export class InvitacionMisaCalumaComponent {
  nombreFallecido: string = 'Segundo Angel Aluisa Analuisa';
  fechaMisa: string = '5 de octubre de 2024';
  horaMisa: string = '13h00';
  nombreIglesia: string = 'María Auxiliadora del cantón Caluma ';
  nombreFamilia: string = 'Familia Aluisa ';
  linkGoogleMaps: string = 'https://maps.app.goo.gl/dXBpxJcQp73zhLu88'
}
