import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Define la estructura de una foto devuelta por la API.
 * Se usará en los componentes para tipar los datos.
 */
export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  // Inyección de HttpClient para hacer peticiones API
  private http = inject(HttpClient);
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  /**
   * Obtiene una lista de 50 fotos de la API.
   * @returns Un Observable con el array de fotos.
   */
  getPhotos(): Observable<Photo[]> {
    // Usamos el parámetro _limit para obtener solo 50 elementos
    return this.http.get<Photo[]>(`${this.apiUrl}?_limit=50`);
  }

  /**
   * Obtiene los detalles de una foto específica por su ID.
   * @param id El ID de la foto a buscar.
   * @returns Un Observable con el objeto Photo.
   */
  getPhotoById(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.apiUrl}/${id}`);
  }
}