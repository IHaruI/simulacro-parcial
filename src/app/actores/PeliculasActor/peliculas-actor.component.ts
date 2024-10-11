import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

interface Pelicula {
  id?: string;
  nombre: string;
  tipo: string;
  fechaEstreno: Date;
  cantidadPublico: number;
  foto: string; // Se espera que esta propiedad contenga la URL
  protagonista: string;
}

@Component({
  selector: 'app-peliculas-actor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas-actor.component.html',
  styleUrls: ['./peliculas-actor.component.css'],
})
export class PeliculasActorComponent implements OnInit, OnChanges {
  @Input() actor: any; // El actor seleccionado
  peliculas: Pelicula[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    console.log('Componente inicializado, actor:', this.actor);
    this.obtenerPeliculas();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['actor'] && this.actor) {
      console.log('Actor cambiado:', this.actor);
      this.obtenerPeliculas();
    }
  }

  obtenerPeliculas() {
    const peliculasRef = collection(this.firestore, 'peliculas');

    const nombreCompleto = `${this.actor.nombre} ${this.actor.apellido}`;
    console.log('Nombre completo para la consulta:', nombreCompleto);

    const peliculasQuery = query(
      peliculasRef,
      where('protagonista', '==', nombreCompleto)
    );

    collectionData(peliculasQuery, { idField: 'id' }).subscribe(
      (data: Pelicula[]) => {
        this.peliculas = data; // Asigna los datos de las películas
        console.log('Películas obtenidas:', this.peliculas);
      }
    );
  }
}
