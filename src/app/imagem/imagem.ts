import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-imagem',
  styleUrl: './imagem.css',
  templateUrl: './imagem.html',
})
export class Imagem {

    urlImagem: string = '';

}
