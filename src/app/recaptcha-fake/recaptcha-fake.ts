import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaptcha-fake',
  imports: [],
  templateUrl: './recaptcha-fake.html',
  styleUrl: './recaptcha-fake.css',
})
export class RecaptchaFake implements OnInit, OnDestroy {

  posicaoX = 0;
  posicaoY = 0;

  verificado = false;
  segundos = 30;

  private intervalo?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.iniciarDesafio();
  }

  iniciarDesafio(): void {
    this.verificado = false;
    this.segundos = 30;

    this.gerarNovaPosicao();

    if (this.intervalo) {
      clearInterval(this.intervalo);
    }

    this.intervalo = setInterval(() => {
      this.segundos--;

      if (this.segundos <= 0) {
        this.reiniciar();
      }
    }, 1000);
  }

  gerarNovaPosicao(): void {
    this.posicaoX = Math.floor(Math.random() * 250);
    this.posicaoY = Math.floor(Math.random() * 120);
  }

  passarPerto(): void {
    if (!this.verificado) {
      this.gerarNovaPosicao();
    }
  }

  verificar(): void {
    this.verificado = true;

    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  reiniciar(): void {
    this.iniciarDesafio();
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}