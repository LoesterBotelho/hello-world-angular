import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exemplo2.html',
  styleUrl: './exemplo2.css',
})
export class Exemplo2 {
  private botaoDesabilitado: boolean = true;

  private mudarEstadoBotao(): void {
    this.botaoDesabilitado = !this.botaoDesabilitado;
  }

  private texto: string = '';

  private nota: number = 10;
  private userRole: string = 'admin';

  private id = 1;
  public readonly arrayDeValores = [1, 2, 3];
}