// detalle-pais.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css'],
})
export class DetallePaisComponent implements OnInit {
  @Input() pais: string | null = null; // Aquí se recibe el país del actor seleccionado
  paisDetalles: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.pais) {
      this.obtenerDetallesPais();
    }
  }

  obtenerDetallesPais() {
    if (this.pais) {
      const url = `https://restcountries.com/v3.1/name/${this.pais}`;
      this.http.get(url).subscribe((data: any) => {
        this.paisDetalles = data[0]; // Guardamos el primer resultado
      });
    }
  }
}
