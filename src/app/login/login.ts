import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  posicaoX = 0;
  posicaoY = 0;

  fugir(): void {
    this.posicaoX = Math.random() * 250;
    this.posicaoY = Math.random() * 150;
  }
}