import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  /**
   * openFotosNew - abre la ruta /fotos en una nueva ventana.
   * Usamos window.open con window.location.origin para mantener el mismo host.
   */
  openFotosNew() {
    const url = window.location.origin + '/fotos';
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
