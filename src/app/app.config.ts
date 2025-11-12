import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Habilita el sistema de ruteo con nuestras rutas definidas en app.routes.ts
    provideRouter(routes), 
    
    // Habilita el módulo HttpClient para poder hacer llamadas API
    provideHttpClient() 
  ]
};