import { Component } from '@angular/core';
import { Pelicula } from './listado-pelicula.model'; // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common';
import { TablaPeliculasComponent } from './tabla-peliculas.component';
import { DetallePeliculaComponent } from './detalle-pelicula.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [TablaPeliculasComponent, DetallePeliculaComponent, CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent {
  peliculaSeleccionada: Pelicula | null = null;

  onPeliculaSeleccionada(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }
}
