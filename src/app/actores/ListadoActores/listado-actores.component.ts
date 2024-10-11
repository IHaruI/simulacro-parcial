import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

interface Actor {
  id?: string;
  nombre: string;
  apellido: string;
  documento: number;
  edad: number;
  pais: string;
}

@Component({
  selector: 'app-listado-actores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css'],
})
export class ListadoActoresComponent {
  @Output() actorSeleccionado = new EventEmitter<Actor>();
  actores: Actor[] = [];

  constructor(private firestore: Firestore) {
    this.obtenerActores();
  }

  obtenerActores() {
    const actoresRef = collection(this.firestore, 'actores');
    collectionData(actoresRef, { idField: 'id' }).subscribe((data: Actor[]) => {
      this.actores = data;
    });
  }

  seleccionarActor(actor: Actor) {
    this.actorSeleccionado.emit(actor);
  }
}
