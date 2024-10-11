import { Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { AltaPeliculaComponent } from './alta-pelicula/alta-pelicula.component';
import { ActoresComponent } from './actores/actores.component';

export const routes: Routes = [
  { path: 'Peliculas', component: PeliculasComponent },
  { path: 'AltaActor', component: AltaActorComponent },
  { path: 'AltaPelicula', component: AltaPeliculaComponent },
  { path: 'Actores', component: ActoresComponent },
  { path: '', redirectTo: '/Peliculas', pathMatch: 'full' },
  { path: '**', redirectTo: '/Peliculas' },
];
