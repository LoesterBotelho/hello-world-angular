import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contador',
  styleUrl: './contador.css',
  templateUrl: './contador.html',
})
export class Contador {

   contador: number = 0;

  incrementar(): void {
    if (this.contador === 10) {
      this.contador = 0;
    } else {
      this.contador++;
    }
  }

  zerar(): void {
    this.contador = 0;
  }
  
}
