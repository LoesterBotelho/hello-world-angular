import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ComponenteFilho1 } from './componente-filho-1/componente-filho-1';
import { ComponenteFilho2 } from './componente-filho-2/componente-filho-2';
import { Exemplo } from './exemplo/exemplo';
import { Exemplo2 } from './exemplo2/exemplo2';
import { HelloWorld } from './hello-world/hello-world';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComponenteFilho1,
    ComponenteFilho2,
    Exemplo,
    Exemplo2,
    HelloWorld
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hello-world');
}