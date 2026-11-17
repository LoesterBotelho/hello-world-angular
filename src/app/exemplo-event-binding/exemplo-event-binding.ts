import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-exemplo-event-binding',
  styleUrl: './exemplo-event-binding.css',
  templateUrl: './exemplo-event-binding.html',
})
export class ExemploEventBinding {

  texto = '';
  botaoDesabilitado = true;


  ativarBotao(){
    this.botaoDesabilitado = false;
  }

  mostrarMensagem(){    
    this.botaoDesabilitado = true;
    alert('O Botão foi clicadoooooo!!!!!');
  }

  passarPorCima(){    
    alert('passou por cima !!!!!');
  }

}
