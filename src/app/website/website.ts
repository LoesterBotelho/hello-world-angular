import { Component } from '@angular/core';
import { Cabecalho } from './cabecalho/cabecalho';
import { Menu } from './menu/menu';
import { Conteudo } from './conteudo/conteudo';
import { Rodape } from './rodape/rodape';

@Component({
  selector: 'app-website',
  imports: [
    Cabecalho,
    Menu,
    Conteudo,
    Rodape
  ],
  templateUrl: './website.html',
  styleUrl: './website.css'
})
export class Website {}