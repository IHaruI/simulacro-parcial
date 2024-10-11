import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-actor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css'],
})
export class DetalleActorComponent {
  @Input() actor: any;
}
