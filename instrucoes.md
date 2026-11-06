# Angular 22 — Anotações

## 1. Node.js e npm

Verificar as versões instaladas:

```bash
node -v
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

O projeto Angular pode utilizar **Vitest** para execução dos testes.

---

## 7. npm scripts

Executar um script definido no `package.json`:

```bash
npm run watch
```

Exemplo de utilização:

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

é equivalente a executar:

```bash
npx ng build --watch --configuration development
```

---

# 8. Gerar componentes

Gerar um componente:

```bash
npx ng g c componente-filho-1
```

Ou:

```bash
npx ng generate component componente-filho-1
```

Gerar outro componente:

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

---

# 9. VS Code

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

# 10. Arquivo `styles.css`

O arquivo:

```text
src/styles.css
```

é utilizado para definir **CSS global da aplicação**.

Ou seja, estilos definidos nele podem ser aplicados em todo o site.

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

# 11. `main.ts`

Arquivo:

```text
src/main.ts
```

É o ponto de inicialização da aplicação Angular.

Em projetos Angular modernos, normalmente **não é necessário alterar esse arquivo durante o desenvolvimento comum**.

> Regra prática para os estudos: evite modificar `main.ts` sem necessidade.

---

# 12. Estrutura básica

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

# 13. Resumo dos principais comandos

| Comando | Função |
|---|---|
| `node -v` | Verifica a versão do Node.js |
| `npm -v` | Verifica a versão do npm |
| `npm install -g @angular/cli@22` | Instala Angular CLI 22 |
| `npx ng new hello-world` | Cria um projeto Angular |
| `npx ng serve` | Executa o servidor de desenvolvimento |
| `npx ng build` | Gera o build |
| `npx ng test` | Executa os testes |
| `npm run watch` | Executa o script `watch` do `package.json` |
| `npx ng build --watch --configuration development` | Build contínuo em desenvolvimento |
| `npx ng g c nome` | Gera um componente |