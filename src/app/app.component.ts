import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvitacionMisaComponent } from './invitacion-misa/invitacion-misa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvitacionMisaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invitaciones';
}
