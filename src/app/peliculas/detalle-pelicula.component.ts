import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from './listado-pelicula.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css'],
  imports: [CommonModule],
})
export class DetallePeliculaComponent {
  @Input() pelicula: Pelicula | null = null; // Acepta null como valor
}
