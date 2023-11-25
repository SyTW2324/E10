import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  email: string = '';
  username: string = '';
  password: string = '';
  registrationSuccess: boolean = false;
  registrationError: boolean = false;

  onSubmit() {
    // Aquí puedes agregar la lógica de registro, como enviar una solicitud al servidor
    // y manejar la respuesta para establecer registrationSuccess o registrationError.
    
    // Por ejemplo, puedes hacer algo como esto para simular una respuesta exitosa:
    // this.registrationSuccess = true;

    // O simular un error:
    // this.registrationError = true;
  }
}