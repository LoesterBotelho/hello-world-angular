import { Routes } from '@angular/router';

import { Nomes } from './nomes/nomes';
import { Imagem } from './imagem/imagem';
import { Autenticacao } from './autenticacao/autenticacao';
import { Contador } from './contador/contador';
import { ExemploInterpolacao } from './exemplo-interpolacao/exemplo-interpolacao';
import { ExemploObjeto } from './exemplo-objeto/exemplo-objeto';
import { HelloWorld } from './hello-world/hello-world';
import { ComponenteFilho1 } from './componente-filho-1/componente-filho-1';
import { ComponenteFilho2 } from './componente-filho-2/componente-filho-2';
import { Exemplo } from './exemplo/exemplo';
import { Exemplo2 } from './exemplo2/exemplo2';
import { Website } from './website/website';
import {NaoEncontrado} from './nao-encontrado/nao-encontrado';
import { ExemploEventBinding } from './exemplo-event-binding/exemplo-event-binding';
import { Login } from './login/login';
import { RecaptchaFake } from './recaptcha-fake/recaptcha-fake';

export const routes: Routes = [
  { path: 'nomes', component: Nomes },
  { path: 'imagem', component: Imagem },
  { path: 'autenticacao', component: Autenticacao },
  { path: 'contador', component: Contador },
  { path: 'interpolacao', component: ExemploInterpolacao },
  { path: 'objeto', component: ExemploObjeto },
  { path: 'hello-world', component: HelloWorld },
  { path: 'componente-filho-1', component: ComponenteFilho1 },
  { path: 'componente-filho-2', component: ComponenteFilho2 },
  { path: 'exemplo', component: Exemplo },
  { path: 'exemplo2', component: Exemplo2 },
  { path: 'website', component: Website },
  { path: 'exemplo-event-binding', component: ExemploEventBinding },
  { path: 'login', component: Login },
    { path: 'recaptcha', component: RecaptchaFake },
  { path: 'nao-encontrado', component: NaoEncontrado },


  { path: '', redirectTo: 'hello-world', pathMatch: 'full' },
  { path: '**', redirectTo: 'nao-encontrado' }
];