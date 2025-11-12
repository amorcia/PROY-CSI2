import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; 

export const routes: Routes = [
  // 1. Ruta de Inicio
  { 
    path: 'inicio', 
    component: InicioComponent,
    title: 'Inicio | Galería de Fotos'
  },
  
  // 2. Ruta para la lista de fotos (Lazy Loading)
  {
    path: 'fotos',
    loadComponent: () => import('./fotos/fotos.component').then(m => m.FotosComponent),
    title: 'Fotos | Galería de Fotos'
  },
  
  // 3. NUEVA RUTA: Detalle de Foto (Lazy Loading)
  {
    path: 'detalle/:id', // Usa ':id' para capturar el ID de la foto
    loadComponent: () => import('./detalle/detalle.component').then(m => m.DetalleComponent),
    title: 'Detalle | Galería de Fotos'
  },

  // 4. Redirección: la ruta raíz ("/") redirige a "/inicio"
  { 
    path: '', 
    redirectTo: '/inicio', 
    pathMatch: 'full' 
  },
  
  // 5. Ruta comodín (404)
  { 
    path: '**', 
    redirectTo: '/inicio'
  }
];