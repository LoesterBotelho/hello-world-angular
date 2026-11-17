import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ExemploEventBinding } from './exemplo-event-binding';
// Descomente a linha abaixo se o seu projeto Angular 22 estiver usando Vitest:
// import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('ExemploEventBinding', () => {
  let component: ExemploEventBinding;
  let fixture: ComponentFixture<ExemploEventBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploEventBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(ExemploEventBinding);
    component = fixture.componentInstance;
    await fixture.whenStable(); // Garante sincronização em modo Zoneless (padrão no Angular 21/22)
  });

  it('deve criar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com a propriedade botaoDesabilitado como true', () => {
    expect(component.botaoDesabilitado).toBe(true);
  });

  it('deve alterar botaoDesabilitado para false ao chamar ativarBotao()', () => {
    component.ativarBotao();
    expect(component.botaoDesabilitado).toBe(false);
  });

  it('deve desabilitar o botão e exibir alerta ao chamar mostrarMensagem()', () => {
    // Se usar Vitest, troque spyOn(window, 'alert') por vi.spyOn(window, 'alert')
    const alertSpy = spyOn(window, 'alert');
    component.botaoDesabilitado = false;

    component.mostrarMensagem();

    expect(component.botaoDesabilitado).toBe(true);
    expect(alertSpy).toHaveBeenCalledWith('O Botão foi clicadoooooo!!!!!');
  });

  it('deve exibir alerta ao chamar passarPorCima()', () => {
    // Se usar Vitest, troque spyOn(window, 'alert') por vi.spyOn(window, 'alert')
    const alertSpy = spyOn(window, 'alert');

    component.passarPorCima();

    expect(alertSpy).toHaveBeenCalledWith('passou por cima !!!!!');
  });

  it('deve atualizar o atributo [disabled] e as classes CSS no DOM via Property Binding', async () => {
    const botoes = fixture.debugElement.queryAll(By.css('button'));

    if (botoes.length > 0) {
      const botaoPrincipal: HTMLButtonElement = botoes[0].nativeElement;

      // Estado inicial
      expect(botaoPrincipal.disabled).toBe(true);
      expect(botaoPrincipal.classList.contains('botao-desabilitado')).toBe(true);

      // Altera o estado e aguarda a atualização do DOM
      component.ativarBotao();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(botaoPrincipal.disabled).toBe(false);
      expect(botaoPrincipal.classList.contains('botao-habilitado')).toBe(true);
    }
  });
});