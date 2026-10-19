# MVC com Express + EJS — Biblioteca

Trabalho de Arquitetura de Software (Aula 09 — MVC), ULBRA Torres.

**Dupla:** Lucas Roldão Cardoso e [Abner Bergmüller Silva da Silva](https://github.com/abnerbergmuller)

## O que é

Funcionalidade pequena de uma biblioteca: **emprestar livros**, com regra de negócio.

- O livro já emprestado não pode ser emprestado de novo.
- Cada matrícula pode ter no máximo 2 livros.
- A matrícula precisa ter 6 dígitos (validação de formato).

## Onde mora cada parte

| Parte | Arquivo |
|---|---|
| Model (dados + regra) | `src/models/biblioteca.js` |
| Controller | `src/controllers/livros.controller.js` |
| View | `src/views/livros.ejs` |
| Rotas | `src/routes.js` |
| Configuração | `server.js` |
| Teste da regra (sem HTTP) | `test/biblioteca.test.js` |

## Como rodar

Precisa de Node.js 18 ou mais novo.

```
npm install
npm start
```

Abra http://localhost:3000/livros

Para rodar os testes da regra:

```
npm test
```

## Slides

Na pasta `slides/`: o PDF entregue e a versão animada em HTML (abrir no navegador, tecla F para tela cheia).
