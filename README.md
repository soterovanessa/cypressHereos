# Cypress Heroes - Testes Automatizados

### **Descrição**:
Este projeto contém testes automatizados desenvolvidos como parte do meu aprendizado em automação de testes com Cypress. Os testes são baseados no projeto Cypress Hero Demo Application, uma aplicação que simula cenários de super-heróis e permite interações como criar, editar e excluir heróis. O aplicativo é utilizado para demonstrar o uso de automação de testes com Cypress em diferentes funcionalidades.

### **Estrutura de Testes:**
Este projeto contém uma suíte de testes automatizados para verificar as principais funcionalidades do sistema, incluindo login, adição de um novo héroi, curtir e enviar moedas para todos os heroís cadastrados, editar , remover um herói e logout do sistema. Todas as funcionalidades estão com validação.

### **Funcionalidades Testadas:**
- Login: Verifica se o usuário consegue fazer login com credenciais válidas e validação de mensagem de erro quando o usuário tenta logar com credenciais inválidas.
- Criação de um novo herói: Valida a criação de um novo usuário com informações válidas através de um usuário administrador.
- Curtir um herói: Funcionalidade de curtir os heróis.
- Enviar moedas: Funcionalidade de enviar moedas para os heróis.
- Editar: Funcionalidade de editar todas ou algumas informações de um herói, realizada por um usuário administrador.
- Excluir: Funcionalidade de excluir algum heróis, realizada por um usuário administrador.
- Logout: Confirma que o usuário pode efetuar logout do sistema.


### *Tecnologias Utilizadas*: 
- Cypress: Framework para automação de testes end-to-end.
- Node.js: Ambiente de execução JavaScript necessário para o Cypress.

### Configuração e Execução dos Testes
Para configurar e executar os testes, siga as etapas abaixo:

Clone o repositório para o seu ambiente local:
```sh
git clone https://github.com/soterovanessa/cypressHereos.git
```
Navegue até a pasta raiz do projeto no terminal:
```sh
cd seu-repositorio
```
Instale as dependências listadas no arquivo package.json:
```sh
npm install
```
Execute os testes de diferentes maneiras:

Para executar todos os testes no terminal:
```sh
npx cypress run
```
Para executar os testes no navegador:
```sh
npx cypress open
```

#### Após abrir o Cypress, você pode escolher os testes individuais para execução, seguindo a ordem recomendada:
1 - Login

2 - Criação de um novo herói

3 - Curtir e enviar moedas para os heróis

4 - Editar informações

5 - Excluir herói

6 - Logout

###### Observação: a ordem das funcionalidades dentro do projeto é ordenada por números.



> Note: Antes de rodar os testes, certifique-se de que o Cypress Hero Demo Application está rodando localmente. Para isso, siga as instruções no [repositório oficial](https://github.com/cypress-io/cypress-heroes) do projeto.
