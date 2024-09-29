# 🛒 E-commerce de Cadastro de Produtos - Santander Coders 2024

Este repositório contém a implementação de um sistema de e-commerce com funcionalidades de CRUD (Create, Read, Update, Delete), desenvolvido como parte da Atividade Final do Módulo 3 do **Santander Coders 2024**.

## 📆 Comando da Atividade Final - Módulo 3
Este exercício faz parte do Módulo 3 do programa Santander Coders 2024, com os seguintes requisitos principais:

- Implementação de todas as cinco telas principais do CRUD (listar, criar, acessar, editar, deletar).
- Utilização obrigatória de TypeScript.
- Estrutura modular com pastas para componentes e páginas.
- Manipulação do DOM utilizando TypeScript.
- Persistência de dados usando Local Storage ou CRUDCRUD API.

## 🚀 EXTRA:
- Persistência de dados do CRUD utilizando API externa (CRUDCRUD API).

## 📋 Desafio Explicado:
O desafio proposto consiste na criação de um sistema CRUD completo para cadastro e gerenciamento de produtos, com as seguintes funcionalidades:

- **Listar** todos os produtos.
- **Visualizar** um produto específico.
- **Adicionar** um novo produto.
- **Editar** os dados de um produto existente.
- **Excluir** um produto.

Além disso, foi solicitado que o projeto seguisse boas práticas de modularização e manipulação do DOM com **TypeScript**. A estrutura dos dados deve ser mantida de forma persistente utilizando **Local Storage** ou uma API de persistência.

## 🎯 Objetivos do Projeto
- **CRUD completo**: Implementar as funcionalidades de criação, leitura, atualização e exclusão de produtos.
- **Organização em classes**: Cada página e componente será uma classe separada.
- **Modularização**: O código será organizado em pastas de componentes e páginas.
- **Manipulação do DOM**: Todos os elementos serão inseridos dinamicamente no HTML usando TypeScript.
- **Persistência de dados**: Os dados serão salvos e recuperados utilizando o Local Storage ou a API do CRUDCRUD.
- **TypeScript**: O uso de TypeScript é obrigatório.

## 💻 Tecnologias Utilizadas
- **TypeScript**: Linguagem de tipagem estática utilizada para desenvolvimento seguro e eficiente.
- **HTML5**: Estruturação das páginas e componentes.
- **CSS3**: Estilização da interface do usuário.
- **SCSS**: Utilizado para facilitar a escrita, manutenção e organização de folhas de estilo.
- **BEM**: Metodoligoa utilizada para nomear classes em CSS com foco em facilitar a reutilização e manutenção do código.git 
- **CRUDCRUD**: API opcional para persistência de dados (além do Local Storage).
- **Local Storage**: Persistência dos dados localmente no navegador.
- **JavaScript**: Manipulação básica do DOM.

## 🗂️ Estrutura do Projeto
O projeto segue uma organização modular para facilitar a manutenção e escalabilidade:

📁 **src/**  
├── 📁 **components/**      # Componentes reutilizáveis (botões, formulários, etc.)  
├── 📁 **pages/**           # Páginas principais do CRUD (listar, criar, editar, visualizar, deletar)  
├── 📁 **models/**          # Modelos TypeScript para representar as entidades  
├── 📁 **services/**        # Serviços para comunicação com a API ou Local Storage  
└── **index.html**          # Página inicial do projeto


### 📁 components/
Contém componentes reutilizáveis, como botões, campos de formulários, etc.

### 📁 pages/
Contém as páginas principais do CRUD:

- `listProducts.ts`: Lista todos os produtos.
- `createProduct.ts`: Página para adicionar um novo produto.
- `editProduct.ts`: Página para editar um produto existente.
- `viewProduct.ts`: Detalhes de um produto específico.
- `deleteProduct.ts`: Confirmação e exclusão de um produto.

### 📁 models/
Contém o modelo TypeScript que representa a entidade de Produto:

- `productModel.ts`: Representa a estrutura de dados do produto (nome, preço, descrição, etc.).

### 📁 services/
Contém os serviços de persistência de dados:

- `productService.ts`: Responsável pela interação com o Local Storage ou API do CRUDCRUD.

## 📖 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado.
- Editor de código recomendado: VSCode.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/danielmrz-dev/projeto-em-grupo

## 👥 Equipe de Desenvolvimento
Este projeto foi desenvolvido por:

- **[Daniel Mariz](https://github.com/danielmrz-dev)**
- **[Felipe Garrido](https://github.com/fgarrido-dev)**
- **[Marcely Lobato](https://github.com/marcelylobato/)**
- **[Natália Kuester](https://github.com/nataliakstr)**


Orientado pelo professor **[Luis Fernando Teixeira Bicalho]** como parte do programa Santander Coders 2024.

## 🔗 Links Úteis
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [CRUDCRUD API](https://crudcrud.com/)


Esse é o arquivo `README.md` completo para o projeto de e-commerce de cadastro de produtos. Ele segue boas práticas, fornece detalhes claros sobre o desafio, objetivos, tecnologias utilizadas, estrutura do projeto e instruções de execução.