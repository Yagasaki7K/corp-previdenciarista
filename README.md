
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Estrutura

_template_ de diretórios e arquivos:

```
.
├── src
│   └── pages
│   │    ├── [api]
│   │    │     └── [constants]
│   │    │     │       └── [index.js] 
│   │    │     └── [services]
│   │    │     │       └── [global-service]
│   │    │     │       └── [fluxo-service]
│   │    │     └── [utils]
│   │    │             └── [fluxo-utils]
│   │    ├── [fluxo]
│   │    │     └── [pagina-fluxo] 
│   │    ├── _app.js
│   │    ├── _document.js
│   │    ├── index.js
│   │    
│   └── components
│   │   ├── [fluxo]
│   │   │   └── [components-fluxo]
│   └── atoms
│   │   ├── [atoms]
│   │   │ 
├── styles
│   ├── globals.css
│   ├── home.modules
├── README.md
```

- src :
  concentra todo o código fonte do projeto.

- pages :
  cada fluxo contém seu diretório que é responsavel por montar o HTML da página

- componentes :
  cada fluxo contém seu diretório que responsavel por montar cad component da página

- atoms :
  os atomos são soltos pois podem se encaixar em qualquer fluxo logo são genéricos

- api :
  concentra toda funcionalidade/proxy infomação que o site precisa consumir

- constants :
  são infomação que podem ou não ser globais mas que são fixas/constantes

- services :
  cada fluxo tem seu diretório para os serviços

- utils :
  cada fluxo tem ser diretório para as utilidades 




Previdenciarista 2022 - Time de desenvolvimento!
