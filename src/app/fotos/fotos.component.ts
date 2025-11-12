import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FotosService, Photo } from '../fotos.service';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  // Inicialización de Signals
  photos = signal<Photo[]>([]);
  isLoading = signal(true);
  hasError = signal(false);

  private fotosService = inject(FotosService);

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.isLoading.set(true);
    this.hasError.set(false);

    this.fotosService.getPhotos().subscribe({
      next: (data) => {
        this.photos.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar las fotos:', err);
        this.hasError.set(true);
        this.isLoading.set(false);
      }
    });
  }

  openDetalleInWindow(id: number) {
    const url = window.location.origin + '/detalle/' + id;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
