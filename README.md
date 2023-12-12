#Site Desenvolvido - API com JavaScript, Express, PG e TypeORM

Descrição do Projeto
Este repositório contém o código-fonte de uma aplicação web construída como uma API utilizando JavaScript, Express, PG (PostgreSQL) e TypeORM. A aplicação fornece operações CRUD (Create, Read, Update, Delete) e foi desenvolvida com o framework Vue.js para o frontend e a biblioteca Bootstrap para o estilo.

Tecnologias Utilizadas
Linguagem de Script: JavaScript

Backend:

Framework: Express
Banco de Dados: PostgreSQL (PG)
ORM: TypeORM
Servidor de Aplicação: Node.js
Frontend:

Framework: Vue.js
Biblioteca de Estilo: Bootstrap
Funcionalidades
A aplicação oferece as seguintes funcionalidades através de uma API:

Listagem de Dados: Visualização dos registros armazenados no banco de dados.
Inserção de Dados: Adição de novos registros ao banco de dados.
Atualização de Dados: Modificação de registros existentes no banco de dados.
Exclusão de Dados: Remoção de registros do banco de dados.
Configuração e Execução
Para configurar e executar o projeto, siga as instruções abaixo:

Clonar o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
Instalar as Dependências:

bash
Copy code
npm install
Configuração do Banco de Dados:

Crie um banco de dados PostgreSQL e configure as credenciais no arquivo ormconfig.json.
Executar a Aplicação:

bash
Copy code
npm start
Acesse a aplicação através do navegador, geralmente em http://localhost:3000.

Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

/src: Contém o código-fonte da aplicação.
/src/controllers: Controladores da aplicação.
/src/models: Modelos de dados.
/src/routes: Rotas da aplicação.
/src/views: Componentes do frontend (Vue.js).
/public: Contém arquivos estáticos públicos.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar ou adicionar novas funcionalidades.

Licença
Este projeto está licenciado sob a Licença MIT.
