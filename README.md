# vitaMed - Challenge PHC

## Descrição

O **vitaMed** é um projeto desenvolvido para o Challenge PHC com o objetivo de melhorar a experiência digital na área da saúde. A plataforma busca facilitar o acesso a informações, contatos e serviços digitais, tornando o processo mais intuitivo e acessível para os usuários.


## Estrutura do Projeto

vitaMed/
├── node_modules/
├── src/
│ ├── assets/
│ │ ├── img/ 
│ │ ├── index.css 
│ │ └── main.tsx 
│ ├── components/
│ │ ├── Cabecalho/
│ │ │ └── Cabecalho.tsx
│ │ ├── Menu/
│ │ │ └── Menu.tsx
│ │ └── Rodape/
│ │ └── Rodape.tsx
│ ├── routes/
│ │ ├── Ajuda/
│ │ │ └── index.tsx
│ │ ├── Contatos/
│ │ │ └── index.tsx
│ │ ├── Error/
│ │ │ └── index.tsx
│ │ ├── Home/
│ │ │ └── index.tsx
│ │ ├── Integrantes/
│ │ │ └── index.tsx
│ │ └── Sobre/
│ │ └── index.tsx
│ └── App.tsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.cjs
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
├── README.md


## Tecnologias Utilizadas

- **React** + **TypeScript**  
- **Vite** como bundler  
- **Tailwind CSS** para estilização  
- **PostCSS** para processar CSS  
- **ESLint** e **Prettier** (opcional) para padronização de código  


## Funcionalidades

- Navegação entre páginas: Home, Sobre, Contatos, Ajuda, Integrantes e página de erro 404.  
- Layout responsivo com Tailwind CSS.  
- Componentes reutilizáveis: Cabeçalho, Menu e Rodapé.  
- Integração com imagens e ícones do projeto.  

## Link do repositório do projeto

https://github.com/felipeflosii/sprint3.git

## Link do video de apresentação do projeto no YouTube

https://youtu.be/PhNh0ukZ97g

## Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/felipeflosii/sprint3.git
Entre na pasta do projeto:

bash
Copiar código
cd vitaMed
Instale as dependências:

bash
Copiar código
npm install
Rode o projeto em ambiente de desenvolvimento:

bash
Copiar código
npm run dev
Abra o navegador no endereço indicado pelo Vite (geralmente http://localhost:5173).


Equipe

Arthur Brito da Silva - RM562085 - 1TDSPG
Luiz Felipe Flosi dos Santos — RM563197 - 1TDSPG
Pedro Henrique Brum Lopes — RM561780  - 1TDSPG


Observações

A pasta node_modules não deve ser versionada.
Algumas imagens estão localizadas em src/assets/img.
Todas as rotas principais estão em src/routes.