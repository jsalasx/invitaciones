import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvitacionMisaComponent } from './invitacion-misa/invitacion-misa.component';
import { InvitacionMisaCalumaComponent } from './invitacion-misa-caluma/invitacion-misa-caluma.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvitacionMisaComponent, InvitacionMisaCalumaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invitaciones';
}
