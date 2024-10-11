import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css'],
  imports: [CommonModule],
})
export class TablaPaisesComponent implements OnInit {
  paises: any[] = [];

  // Emitirá el país seleccionado al componente altaActor
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Obtener los países de la API
    this.http
      .get<any[]>('https://restcountries.com/v3.1/all')
      .subscribe((data) => {
        this.paises = data.map((pais) => pais.name.common); // Obtener el nombre común del país
      });
  }

  seleccionarPais(pais: string) {
    this.paisSeleccionado.emit(pais); // Emitir el país seleccionado
  }
}
