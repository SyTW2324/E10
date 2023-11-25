// src/app/login/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    // Simulación de una solicitud de inicio de sesión al servicio de autenticación
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          console.log('Inicio de sesión exitoso');
          // Puedes redirigir al usuario a la página principal o hacer otras acciones necesarias
        },
        (error) => {
          console.error(error);
          this.loginError = true;
        }
      );
  }
}
