import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Produto } from './produto';
import { Pessoa } from './pessoa';
import { Mercado } from './mercado';

@Component({
  imports: [DatePipe],
  selector: 'app-exemplo-objeto',
  styleUrl: './exemplo-objeto.css',
  templateUrl: './exemplo-objeto.html',
})
export class ExemploObjeto {

    skate: Produto = {
    nome: 'Robson',
    descricao: 'Skate sem rodas',
    preco: 1000000
  };

    henrique: Pessoa = {
    nome: 'Henrique',
    sexo: 'Confidencial',
    dataNascimento: new Date(1995, 5, 10),
    estadoCivil: 'Casado'
  };  

    heloisa: Pessoa = {
    nome: 'Heloisa',
    sexo: 'Confidencial',
    dataNascimento: new Date(1995, 5, 10),
    estadoCivil: 'Casado'
  };  

   unidadeDeBlumenau: Mercado = {
    nome: 'Mercado Blumenau',
    macasVendidasPorAno: 10000,
    precoMacas: 2.50,
    laranjasVendidasPorAno: 8000,
    precoLaranjas: 3.00
  };

  unidadeDeJoinville: Mercado = {
    nome: 'Mercado Joinville',
    macasVendidasPorAno: 15000,
    precoMacas: 2.75,
    laranjasVendidasPorAno: 12000,
    precoLaranjas: 3.25
  };

  unidadeDeFlorianopolis: Mercado = {
    nome: 'Mercado Florianópolis',
    macasVendidasPorAno: 20000,
    precoMacas: 3.00,
    laranjasVendidasPorAno: 18000,
    precoLaranjas: 3.50
  };


}
