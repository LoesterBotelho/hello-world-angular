import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contador',
  styleUrl: './contador.css',
  templateUrl: './contador.html',
})
export class Contador {

  private contador = signal<number>(0);

  incrementar(): void {
    if (this.contador() === 10) {
      this.zerar();
    } else {
      this.contador.update(valorAtual => valorAtual + 1);
    }
  }

  zerar(): void {
    this.contador.set(0);
  }
  
}
