# Chat com Socket.io e EJS

Este é um projeto de um chat simples que utiliza a biblioteca Socket.io para realizar a comunicação em tempo real entre cliente e servidor. O projeto consiste em uma aplicação web em que o usuário pode inserir mensagens e visualizar as mensagens enviadas por outros usuários que também estão conectados ao chat.

#### O projeto possui dois arquivos principais:

index.js: arquivo que contém o código do servidor, desenvolvido com a biblioteca Express e Socket.io. Esse arquivo define as rotas e eventos para o servidor.

index.ejs: arquivo que contém o código HTML e JavaScript da aplicação web. Esse arquivo define a interface do usuário e as funções que serão executadas no navegador.

#### Como executar o projeto
Para executar o projeto, siga os seguintes passos:

#### Clone este repositório em sua máquina:

```bash
git clone https://github.com/exemplo/chat-socket.io.git
```
1. Instale as dependências do projeto utilizando o npm:

```bash
npm install
```

2. Execute o servidor com o seguinte comando:

```bash
 npm run dev ## ou yarn dev
```

3. Abra o navegador e acesse o endereço http://localhost:8080.

#### Funcionamento do chat

O chat é bastante simples e possui uma interface minimalista. No lado esquerdo da tela, há um menu com o título "Chat" e um ícone de balão de conversa que, ao ser clicado, atualiza a página. No lado direito da tela, há uma área onde são exibidas as mensagens do chat e uma área onde o usuário pode inserir suas mensagens e enviar para o chat.

Para enviar uma mensagem, basta digitar o texto no campo de mensagem, seu username e clicar no botão "Enviar". As mensagens serão exibidas na área de mensagens e serão enviadas para todos os usuários conectados ao chat.

#### Considerações finais

Este é um projeto bastante simples e pode ser utilizado como base para o desenvolvimento de um chat mais completo. O Socket.io é uma excelente biblioteca para a comunicação em tempo real entre cliente e servidor e possui diversas funcionalidades que podem ser exploradas em projetos mais complexos.
