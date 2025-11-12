import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FotosService, Photo } from '../fotos.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  // Inicialización de Signals
  photo = signal<Photo | null>(null);
  isLoading = signal(true);
  hasError = signal(false);

  private fotosService = inject(FotosService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;
    if (id === null || Number.isNaN(id)) {
      this.hasError.set(true);
      this.isLoading.set(false);
      return;
    }

    this.fotosService.getPhotoById(id).subscribe({
      next: (data) => {
        this.photo.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar la foto:', err);
        this.hasError.set(true);
        this.isLoading.set(false);
        this.photo.set(null);
      }
    });
  }

  goToGaleria() {
    // regresa a la galería en la misma ventana
    window.location.href = window.location.origin + '/fotos';
  }
}
