# Coding challenge "projeto-arquivo-local"

Este é um projeto React que envia, exibe o nome e deleta arquivos enviados pelo usuário. O projeto é dividido em duas partes principais: `projeto-backend` (servidor Node.js) e `projeto-frontend` (aplicação React).

## Configuração do Projeto

Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

### Projeto Backend

1. Navegue até o diretório `projeto-backend`.
bash
cd meu-projeto/projeto-backend
Instale as dependências.
bash
npm install
Inicie o servidor.
bash
node server.js
O servidor estará disponível em http://localhost:3001.


### Projeto Frontend
2. Navegue até o diretório projeto-frontend.
bash
cd meu-projeto/projeto-frontend
Instale as dependências.
bash
npm install
Inicie a aplicação React.
bash
npm start
A aplicação estará disponível em http://localhost:3000.

### Uso da Aplicação
3. Acesse a aplicação no navegador usando o link fornecido durante a inicialização.

Envie arquivos usando a interface fornecida.

Visualize os nomes dos arquivos enviados.

Para excluir um arquivo, clique no botão de exclusão correspondente.

### Estrutura do Projeto
projeto-backend: Contém o servidor Node.js.

node_modules: Dependências do servidor.
uploads: Diretório para armazenar arquivos enviados pelos usuários.
server.js: Arquivo principal do servidor.
package.json, package-lock.json: Informações e dependências do servidor.
projeto-frontend: Contém a aplicação React.

node_modules: Dependências da aplicação React.
public: Arquivos públicos da aplicação.
src: Código-fonte da aplicação React.
package.json, package-lock.json: Informações e dependências da aplicação React.
node_modules: Dependências compartilhadas entre os projetos.

package.json, package-lock.json: Informações e dependências do projeto global.