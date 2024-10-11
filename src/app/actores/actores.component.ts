import { Component } from '@angular/core';
import { ListadoActoresComponent } from './ListadoActores/listado-actores.component';
import { DetalleActorComponent } from './DetalleActor/detalle-actor.component';
import { DetallePaisComponent } from './DetallePais/detalle-pais.component';
import { PeliculasActorComponent } from './PeliculasActor/peliculas-actor.component';

@Component({
  selector: 'app-actores',
  standalone: true,
  imports: [
    ListadoActoresComponent,
    DetalleActorComponent,
    DetallePaisComponent,
    PeliculasActorComponent,
  ],
  templateUrl: './actores.component.html',
  styleUrl: './actores.component.css',
})
export class ActoresComponent {
  actorSeleccionado: any;
  paisSeleccionado: any;

  onActorSeleccionado(actor: any) {
    this.actorSeleccionado = actor;
    this.paisSeleccionado = actor.pais; // Asumiendo que el actor tiene un campo 'pais'
  }
}
