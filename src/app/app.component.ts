import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: `./app.component.html`,
  styleUrl: `./app.component.css`
})
export class AppComponent {
  contato = {
    nome: '',
    email: '',
    mensagem: ''
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulário enviado', this.contato);
      // Aqui você normalmente enviaria os dados para um servidor
    }
  }
}
