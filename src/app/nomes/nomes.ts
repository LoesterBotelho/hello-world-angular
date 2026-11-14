import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-nomes',
  styleUrl: './nomes.css',
  templateUrl: './nomes.html',
})
export class Nomes {

  nome: string = '';

  nomes: string[] = [];

  adicionarNome(): void {
    this.nomes.push(this.nome);

    this.nome = '';
  }
}
