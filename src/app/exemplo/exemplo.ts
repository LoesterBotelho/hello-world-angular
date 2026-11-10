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
  private nomeProduto: string = 'Fone sem fio';
  private preco: number = 250.99;
  private quantidadeEstoque: number = 100;

  // Objeto utilizando a Interface Veiculo
  private v1: Veiculo = {
    marca: 'Honda',
    modelo: 'Civic',
    placa: 'AAA1A11',
    ano: 2010,
    preco: 50000,
  };

  // Método do clique
  private registrarClick(): void {
    alert('O botão foi clicado');
  }

}