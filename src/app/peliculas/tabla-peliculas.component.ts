import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from './listado-pelicula.model'; // Asegúrate de que la ruta sea correcta

@Component({
  standalone: true,
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css'],
  imports: [CommonModule],
})
export class TablaPeliculasComponent {
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();

  peliculas: Pelicula[] = [
    {
      id: 1,
      nombre: 'Ejemplo 1',
      tipo: 'comedia',
      fechaEstreno: new Date(),
      cantidadPublico: 100,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKP-UD_EsIz6Mk2dRpAbnSqfRyPZsrgr6xNSm438xeXM9CcyNN',
      protagonista: 'Actor 1',
    },
    {
      id: 2,
      nombre: 'Ejemplo 2',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTu8eBOMKo7M2N1bJPP8g9OPnu7kDkjK-SzQEYH1FZF0VM2PUsz',
      protagonista: 'Actor 2',
    },
    {
      id: 3,
      nombre: 'Ejemplo 3',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRTP-j51D5LbT3V_xXtI7L639TWsN2KABuVeSyMRqZZDzoccDE',
      protagonista: 'Actor 3',
    },
    {
      id: 4,
      nombre: 'Ejemplo 4',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqBdrSZ8622V19hyCBl7oMctM1J0XlCXTm9OfKes6hFrST7p11',
      protagonista: 'Actor 4',
    },
    {
      id: 5,
      nombre: 'Ejemplo 5',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6pfZrcjK6FuLYJy7fTFdKiceH393nf5eERJFGN1LT7qIL3vu',
      protagonista: 'Actor 5',
    },
    {
      id: 6,
      nombre: 'Ejemplo 6',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-VEPe3Jc-evokwKmc6MLiylMGHBvXDkxuzULzXG1S0vPJW5_1',
      protagonista: 'Actor 6',
    },
    {
      id: 7,
      nombre: 'Ejemplo 7',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8yEl8xpdrkOPXpEOeKMfknAo6GKzyBOjrZ7iOnnxW8WSYEf48',
      protagonista: 'Actor 7',
    },
    {
      id: 8,
      nombre: 'Ejemplo 8',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIsLXCIR1KNEy7RyPqdx8A2Yex4afcyOeXgMCetf_JhIrAhzl',
      protagonista: 'Actor 8',
    },
    {
      id: 9,
      nombre: 'Ejemplo 9',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjo4Ki3zBMzCNFS8JwmKDgUWP9vVme_ixQjgqARinbMw8pULB',
      protagonista: 'Actor 9',
    },
    {
      id: 10,
      nombre: 'Ejemplo 10',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcThhjyuvm8752k7_VRvsDLboM3hl6u_CggQxnSer0CiPJXcXAJn',
      protagonista: 'Actor 10',
    },
    {
      id: 11,
      nombre: 'Ejemplo 11',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXyPXz-NK3kaIzOAzZKQgfXiaoR6Tej0onLaNhzi0pfOC8FlF',
      protagonista: 'Actor 11',
    },
    {
      id: 12,
      nombre: 'Ejemplo 12',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0RwxAQiQ1E6RU4zGUjyk6mb7Xl5MQweiBwSKd8JgggCbnmuDA',
      protagonista: 'Actor 12',
    },
    {
      id: 13,
      nombre: 'Ejemplo 13',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQafx9_DkVcVC5F3ykgqx3gNGhq1bcj7VlXQaEhAisLV1-wDNdw',
      protagonista: 'Actor 13',
    },
    {
      id: 14,
      nombre: 'Ejemplo 14',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSndn5Zsq4KWE07AvT3tUJLpfnNp3AkjnZFb3gt6JsKequUv2gZ',
      protagonista: 'Actor 14',
    },
    {
      id: 15,
      nombre: 'Ejemplo 15',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT74Gq-kjQa45bEEVBT0jqBw1MoIdl6QBdq1DCiC15WjucfQp8j',
      protagonista: 'Actor 15',
    },
    {
      id: 16,
      nombre: 'Ejemplo 16',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUiSc9NB_k-4rAZA27qfXth5zJTtVx8t2yLARgddV0x4wx-RP5',
      protagonista: 'Actor 16',
    },
    {
      id: 17,
      nombre: 'Ejemplo 17',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTaKau3sA2uVa6bbwn1KAw6GJWAddPEH5OpOqtJICSgDT-jSCnK',
      protagonista: 'Actor 17',
    },
    {
      id: 18,
      nombre: 'Ejemplo 18',
      tipo: 'terror',
      fechaEstreno: new Date(),
      cantidadPublico: 200,
      foto: 'https://pics.filmaffinity.com/Del_revaes_2_Inside_Out_2-347157127-large.jpg',
      protagonista: 'Actor 18',
    },
    // Agrega más películas aquí
  ];

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada.emit(pelicula);
  }
}
