import { Routes } from '@angular/router';
import { InvitacionMisaCalumaComponent } from './invitacion-misa-caluma/invitacion-misa-caluma.component';
import { InvitacionMisaComponent } from './invitacion-misa/invitacion-misa.component';

export const routes: Routes = [
    { path: '', component: InvitacionMisaComponent }, // Ruta a HomeComponent
    { path: 'caluma', component: InvitacionMisaCalumaComponent }, // Ruta a HomeComponent
];
