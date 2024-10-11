import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './alta-actor/tabla-paises.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    AltaActorComponent,
    TablaPaisesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corregido "styleUrls" en lugar de "styleUrl"
})
export class AppComponent {
  title = 'simulacro-parcial';
}
