import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-autenticacao',
  styleUrl: './autenticacao.css',
  templateUrl: './autenticacao.html',
})
export class Autenticacao {

    logado: boolean = false;

  alterarEstado(): void {
    this.logado = !this.logado;
  }
  
}
