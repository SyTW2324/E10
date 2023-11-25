// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Simulación de credenciales válidas
  private validUsername: string = 'usuario';
  private validPassword: string = 'contraseña';

  login(username: string, password: string): Observable<void | null> {
    // Simulación de una solicitud de inicio de sesión
    return of(null).pipe(
      delay(1000), // Simular una pequeña demora para mostrar la animación de carga
      map(() => {
        // Comprobar si las credenciales son válidas
        if (username === this.validUsername && password === this.validPassword) {
          // Si las credenciales son válidas, la autenticación se considera exitosa
          return null;
        } else {
          // Si las credenciales no son válidas, lanzamos un error
          throw new Error('Credenciales inválidas');
        }
      })
    );
  }
}

