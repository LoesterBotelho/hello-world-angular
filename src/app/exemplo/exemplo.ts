import { Component } from '@angular/core';
import { Veiculo } from './../veiculo';

@Component({
  imports: [],
  selector: 'app-exemplo',
  styleUrl: './exemplo.css',
  templateUrl: './exemplo.html',
})

export class Exemplo {

  // Dados do produto
  nomeProduto: string = 'Fone sem fio';
  preco: number = 250.99;
  quantidadeEstoque: number = 100;

  // Objeto utilizando a Interface Veiculo
  v1: Veiculo = {
    marca: 'Honda',
    modelo: 'Civic',
    placa: 'AAA1A11',
    ano: 2010,
    preco: 50000,
  };

  // Método do clique
  registrarClick(): void {
    alert('O botão foi clicado');
  }

}