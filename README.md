# Rick and Morty Character Database

Este projeto é uma base de dados de personagens do Rick and Morty, onde é possível filtrar os personagens por nome e status. Além disso, o sistema possui uma funcionalidade de paginação para melhorar a experiência do usuário.

## Demonstração

Confira a [demo online](https://rick-and-morty-db-mu.vercel.app/) hospedada no Vercel.

## Tecnologias Utilizadas

- Vue 3: Utilizamos a versão mais recente do Vue.js para desenvolver este projeto, aproveitando os recursos modernos e eficientes do framework.

- Vue Router: Implementamos o Vue Router para gerenciar a navegação dentro do aplicativo, permitindo que os usuários filtrem os personagens e naveguem pelas diferentes páginas de forma suave e intuitiva.

- Pinia: Para gerenciar o estado global da aplicação, optamos por utilizar o Pinia, uma biblioteca de gerenciamento de estado simples e poderosa projetada para o Vue.js 3.

- Axios: Utilizamos o Axios como cliente HTTP para fazer requisições à API do Rick and Morty e obter os dados dos personagens.

- CSS: Utilizamos o CSS para estilizar a interface do aplicativo, garantindo uma apresentação visual agradável e responsiva.

- ESLint e Prettier: Utilizamos o ESLint para garantir que nosso código esteja em conformidade com as boas práticas e padrões de codificação. Além disso, o Prettier foi configurado para garantir a formatação consistente do código.

## Configuração Recomendada do IDE

Para uma experiência de desenvolvimento ideal, recomendamos usar o Visual Studio Code ([VSCode](https://code.visualstudio.com/)) com as seguintes extensões:

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar): Essa extensão fornece suporte aprimorado para o Vue 3.

- [Vue Router 4 Snippets](https://marketplace.visualstudio.com/items?itemName=dcasia.vuerouter4-snippets): Oferece snippets para Vue Router 4, facilitando a criação de rotas.

- [Pinia](https://marketplace.visualstudio.com/items?itemName=antfu.pinia): Adiciona suporte ao Pinia, auxiliando no desenvolvimento do gerenciamento de estado.

## Configuração do Projeto

Para iniciar o projeto, execute o seguinte comando:

```sh
npm install
```

## Utilizando Cypress

Para iniciar o teste, execute o seguinte comando:

```sh
npx cypress run
```
