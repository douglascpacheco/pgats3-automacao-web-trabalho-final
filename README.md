# Automação Web — Trabalho Final

Automação dos casos de teste da aplicação [Automation Exercise](https://www.automationexercise.com), como Trabalho Final da Disciplina 08 — Automação Web.

O projeto usa Cypress e JavaScript. Os casos automatizados são CT01, CT02, CT03, CT04, CT05, CT08, CT09, CT10, CT15 e CT16.

## Estrutura

- `cypress/e2e/`: specs dos casos de teste.
- `cypress/modules/`: módulos organizados por funcionalidade.
- `cypress/support/`: configuração de suporte do Cypress.

## Instalação e execução

Instale as dependências:

```sh
npm ci
```

Execute todos os testes:

```sh
npm test
```

Abra a interface do Cypress:

```sh
npm run cy:open
```

O relatório HTML local é gerado em `cypress/reports/html/index.html`.

## Integração contínua

O GitHub Actions executa os testes automaticamente em cada push para `main` e permite execução manual. A pipeline utiliza Node.js 22.

O relatório HTML fica disponível no artefato `relatorio-mochawesome` da execução.
