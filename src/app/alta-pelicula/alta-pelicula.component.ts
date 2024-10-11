import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { TablaActoresComponent } from './tabla-actores.component';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';

@Component({
  selector: 'app-alta-pelicula',
  standalone: true,
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css'],
  imports: [ReactiveFormsModule, CommonModule, TablaActoresComponent],
})
export class AltaPeliculaComponent {
  nombre = new FormControl('', [Validators.required]);
  tipo = new FormControl('otros', [Validators.required]);
  fecha = new FormControl('', [Validators.required]);
  cantidadPublico = new FormControl('', [Validators.required]);
  protagonista = new FormControl('', [Validators.required]);

  peliculas: any[] = [];
  protagonistaSeleccionado: string = '';
  fotoSeleccionada: File | null = null;

  constructor(private firestore: Firestore, private storage: Storage) {}

  recibirActorSeleccionado(actor: string) {
    this.protagonistaSeleccionado = actor;
    this.protagonista.setValue(actor);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fotoSeleccionada = file;
    }
  }

  esFormularioValido(): boolean {
    return (
      this.nombre.valid &&
      this.tipo.valid &&
      this.fecha.valid &&
      this.cantidadPublico.valid &&
      this.protagonista.valid
    );
  }

  async guardarPelicula() {
    if (this.esFormularioValido() && this.fotoSeleccionada) {
      // Subir la imagen a Firebase Storage
      const filePath = `peliculas/${this.fotoSeleccionada.name}`;
      const storageRef = ref(this.storage, filePath);

      try {
        // Subir archivo
        await uploadBytes(storageRef, this.fotoSeleccionada);
        // Obtener la URL de descarga
        const downloadURL = await getDownloadURL(storageRef);

        const nuevaPelicula = {
          nombre: this.nombre.value,
          tipo: this.tipo.value,
          fechaEstreno: this.fecha.value,
          cantidadPublico: this.cantidadPublico.value,
          protagonista: this.protagonista.value,
          foto: downloadURL, // Guardar URL de la imagen
        };

        console.log('Guardando película:', nuevaPelicula);
        await addDoc(collection(this.firestore, 'peliculas'), nuevaPelicula);
        this.peliculas.push(nuevaPelicula);
        this.limpiarFormulario();
      } catch (error) {
        console.error('Error al guardar película:', error);
      }
    }
  }

  limpiarFormulario() {
    this.nombre.reset();
    this.tipo.setValue('otros');
    this.fecha.reset();
    this.cantidadPublico.reset();
    this.protagonista.reset();
    this.protagonistaSeleccionado = '';
    this.fotoSeleccionada = null;
  }
}
