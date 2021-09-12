# clean-mvvm-architecture

Proposta de Arquitetura MVVM no VueJS seguindo o Clean Architecture

Utilizando Ports and Adapters Pattern (Hexagonal Architecture), Repository Pattern e Store Pattern

Todas as sugestões estão considerando um acoplamento inexistente da camada de domínio (Não necessariamente utilizada no Front) e as ViewModels e Repositories
E com uma baixa dependência, junto de uma inversão de controle através da DIP (Dependence Inversion Principle), sendo implementada em sua maioria com DI (Dependence Injection)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
