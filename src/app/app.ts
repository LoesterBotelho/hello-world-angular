import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteFilho1 } from './componente-filho-1/componente-filho-1';
import { ComponenteFilho2 } from './componente-filho-2/componente-filho-2';

@Component({
  imports: [RouterOutlet,
    ComponenteFilho1, 
    ComponenteFilho2
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hello-world');
}
