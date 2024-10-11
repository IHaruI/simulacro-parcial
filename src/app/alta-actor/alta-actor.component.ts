import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from './tabla-paises.component';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-alta-actor',
  standalone: true,
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css'],
  imports: [ReactiveFormsModule, CommonModule, TablaPaisesComponent],
})
export class AltaActorComponent {
  // Controles individuales con validaciones
  nombre = new FormControl('', [Validators.required, Validators.minLength(3)]);
  apellido = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  documento = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
  ]);
  edad = new FormControl('', [Validators.required, Validators.min(18)]);
  pais = new FormControl('', [Validators.required]);

  actores: any[] = [];
  paisSeleccionado: string = '';

  constructor(private firestore: Firestore) {}

  recibirPaisSeleccionado(pais: string) {
    this.paisSeleccionado = pais;
    this.pais.setValue(pais);
  }

  async guardarActor() {
    console.log('Intentando guardar actor...');

    // Espera de 2 segundos antes de mostrar el estado del formulario
    setTimeout(async () => {
      console.log(
        'Estado del formulario:',
        this.nombre.valid,
        this.apellido.valid,
        this.documento.valid,
        this.edad.valid,
        this.pais.valid
      );

      if (
        this.nombre.valid &&
        this.apellido.valid &&
        this.documento.valid &&
        this.edad.valid &&
        this.pais.valid
      ) {
        const nuevoActor = {
          nombre: this.nombre.value,
          apellido: this.apellido.value,
          documento: this.documento.value,
          edad: this.edad.value,
          pais: this.pais.value,
        };

        // Espera de 2 segundos antes de guardar el actor
        setTimeout(async () => {
          try {
            console.log('Guardando actor:', nuevoActor);
            await addDoc(collection(this.firestore, 'actores'), nuevoActor);
            this.actores.push(nuevoActor);
            console.log('Actor guardado correctamente.');
            this.limpiarFormulario();
          } catch (error) {
            console.error('Error al guardar actor: ', error);
          }
        }, 2000);
      } else {
        console.log('El formulario no es válido.');
      }
    }, 2000);
  }

  limpiarFormulario() {
    this.nombre.reset();
    this.apellido.reset();
    this.documento.reset();
    this.edad.reset();
    this.pais.reset();
    this.paisSeleccionado = '';
  }
}
