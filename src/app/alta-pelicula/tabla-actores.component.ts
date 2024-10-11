import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

// Definimos una interfaz para el tipo Actor
interface Actor {
  id: string;
  nombre: string;
  apellido: string;
  pais: string;
}

@Component({
  selector: 'app-tabla-actores',
  standalone: true,
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css'],
  imports: [CommonModule],
})
export class TablaActoresComponent {
  @Output() actorSeleccionado = new EventEmitter<string>();
  actores: any[] = [];

  constructor(private firestore: Firestore) {
    this.obtenerActores();
  }

  obtenerActores() {
    const actoresRef = collection(this.firestore, 'actores');
    collectionData(actoresRef, { idField: 'id' }).subscribe((data: Actor[]) => {
      this.actores = data; // Ahora 'data' tiene el tipo Actor[]
    });
  }

  seleccionarActor(actor: any) {
    this.actorSeleccionado.emit(`${actor.nombre} ${actor.apellido}`);
  }
}
