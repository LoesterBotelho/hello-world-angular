# Angular 22 — Anotações

## 1. Node.js e npm

Verificar as versões instaladas:

```bash
node -v
npm -v
```

### Atualizar o npm

Instalar uma versão específica do npm globalmente:

```bash
npm install -g npm@12.2.2
```

Verificar a versão instalada:

```bash
npm -v
```

---

## 2. Instalação do Angular CLI

Instalar o Angular CLI versão 22 globalmente:

```bash
npm install -g @angular/cli@22
```

Verificar a instalação:

```bash
ng version
```

---

## 3. Criar um projeto Angular

Criar um novo projeto:

```bash
npx ng new hello-world
```

Entrar na pasta do projeto:

```bash
cd hello-world
```

---

## 4. Executar o projeto

Iniciar o servidor de desenvolvimento:

```bash
npx ng serve
```

Por padrão, o Angular disponibiliza a aplicação em:

```text
http://localhost:4200
```

---

## 5. Build do projeto

Gerar o build da aplicação:

```bash
npx ng build
```

### Build em modo de desenvolvimento com Watch

Gerar o build e observar alterações nos arquivos:

```bash
npx ng build --watch --configuration development
```

Sempre que houver alterações no código, o build será atualizado automaticamente.

---

## 6. Testes

Executar os testes:

```bash
npx ng test
```

Os arquivos de teste normalmente utilizam a extensão:

```text
.spec.ts
```

Exemplo:

```text
app.component.spec.ts
```

### Vitest

Projetos Angular podem utilizar **Vitest** para execução dos testes.

---

## 7. npm Scripts

Executar um script definido no `package.json`:

```bash
npm run watch
```

Exemplo:

```json
{
  "scripts": {
    "watch": "ng build --watch --configuration development"
  }
}
```

Nesse caso:

```bash
npm run watch
```

é equivalente a:

```bash
npx ng build --watch --configuration development
```

---

# 8. Gerar componentes

Gerar um componente:

```bash
npx ng g c exemplo
```

Ou utilizando o comando completo:

```bash
npx ng generate component exemplo
```

### Gerar componentes específicos

```bash
npx ng g c componente-filho-1
```

```bash
npx ng g c componente-filho-2
```

### Abreviações do Angular CLI

```text
ng g c
```

Significa:

```text
ng generate component
```

### Exemplos

```bash
npx ng g c exemplo
npx ng g c componente-filho-1
npx ng g c componente-filho-2
```

---

# 9. Gerar interfaces

Gerar uma interface utilizando o Angular CLI:

```bash
npx ng g i veiculo
```

Ou utilizando o comando completo:

```bash
npx ng generate interface veiculo
```

O comando normalmente cria:

```text
veiculo.ts
```

### Exemplo de interface

```typescript
export interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
}
```

### Abreviações do Angular CLI

```text
ng g i
```

Significa:

```text
ng generate interface
```

### Exemplos

```bash
npx ng g i veiculo
npx ng g i usuario
npx ng g i produto
```

---

# 10. VS Code

## Angular Language Service

Extensão recomendada:

**Angular Language Service**

Ela fornece recursos para desenvolvimento Angular, como:

- Autocomplete;
- IntelliSense;
- Verificação de erros;
- Navegação pelo código;
- Suporte aos templates Angular;
- Informações sobre componentes e propriedades.

---

# 11. Arquivo `styles.css`

O arquivo:

```text
src/styles.css
```

é utilizado para definir o **CSS global da aplicação**.

Ou seja, estilos definidos nele podem ser aplicados em toda a aplicação.

### Exemplo

```css
body {
  margin: 0;
}
```

---

## CSS Reset

Um CSS Reset pode ser utilizado para remover estilos padrão do navegador.

Exemplo simples:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Um dos objetivos é evitar que elementos HTML tenham margens e espaçamentos padrão inesperados.

---

# 12. `main.ts`

Arquivo:

```text
src/main.ts
```

É o ponto de inicialização da aplicação Angular.

Em projetos Angular modernos, normalmente **não é necessário alterar esse arquivo durante o desenvolvimento comum**.

> Regra prática para os estudos: evite modificar `main.ts` sem necessidade.

---

# 13. Estrutura básica

Uma estrutura simplificada pode ser:

```text
hello-world/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.component.spec.ts
│   │
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json
└── ...
```

### Arquivos importantes

| Arquivo | Função |
|---|---|
| `main.ts` | Inicialização da aplicação |
| `styles.css` | CSS global |
| `*.component.ts` | Lógica do componente |
| `*.component.html` | Template HTML |
| `*.component.css` | Estilos do componente |
| `*.component.spec.ts` | Testes do componente |
| `package.json` | Dependências e scripts |
| `angular.json` | Configurações do Angular CLI |

---

# 14. Resumo dos principais comandos

| Comando | Função |
|---|---|
| `node -v` | Verifica a versão do Node.js |
| `npm -v` | Verifica a versão do npm |
| `npm install -g npm@12.2.2` | Instala o npm 12.2.2 globalmente |
| `npm install -g @angular/cli@22` | Instala o Angular CLI 22 |
| `ng version` | Exibe as versões do Angular CLI e do ambiente |
| `npx ng new hello-world` | Cria um projeto Angular |
| `npx ng serve` | Executa o servidor de desenvolvimento |
| `npx ng build` | Gera o build |
| `npx ng test` | Executa os testes |
| `npm run watch` | Executa o script `watch` do `package.json` |
| `npx ng build --watch --configuration development` | Build contínuo em desenvolvimento |
| `npx ng g c exemplo` | Gera um componente |
| `npx ng g c nome` | Gera um componente com o nome informado |
| `npx ng g i veiculo` | Gera uma interface |
| `npx ng generate component exemplo` | Gera um componente usando o comando completo |
| `npx ng generate interface veiculo` | Gera uma interface usando o comando completo |

---

# 15. Atalhos do Angular CLI

O Angular CLI possui abreviações para facilitar os comandos.

| Abreviação | Comando completo | Finalidade |
|---|---|---|
| `ng g c` | `ng generate component` | Gerar componente |
| `ng g i` | `ng generate interface` | Gerar interface |
| `ng g s` | `ng generate service` | Gerar service |
| `ng g d` | `ng generate directive` | Gerar diretiva |
| `ng g p` | `ng generate pipe` | Gerar pipe |
| `ng g guard` | `ng generate guard` | Gerar guard |
| `ng g class` | `ng generate class` | Gerar classe |

### Exemplos

```bash
npx ng g c exemplo
npx ng g i veiculo
npx ng g s veiculo
npx ng g d destaque
npx ng g p moeda
```