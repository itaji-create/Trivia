# Boas vindas ao repositório do projeto do Game Trivia!

<summary><strong>Link do projeto no Heroku</strong></summary><br />

  - http://game-trivia-99app.herokuapp.com/

<summary><strong> Iniciando o projeto</strong></summary><br />

1. Clone o projeto com o comando:
    * `git clone git@github.com:itaji-create/Trivia.git`
    * Entre na pasta do projeto;
2. Instale as dependências:
    * `npm install`
3. Inicie o projeto:
    * `npm start`


<summary><strong>Principais dependências do projeto</strong></summary><br />

    - react
    - react-dom
    - redux
    - react-redux
    - redux-thunk
     -redux-devtools-extension
    - crypto-md5    

<summary><strong>Configurações mínimas que sua máquina deve ter</strong></summary><br />

1. Sistema Operacional Linux
2. Node
    * `deve ter versão igual ou superior à 16`
    * Rode os comandos abaixo para instalar a versão correta do node:
        * `nvm install 16 --lts`
        * `nvm use 16`
		* `nvm alias default 16` 



<h4>Neste projeto foi criado uma versão simplificada do jogo de Trivia. Detalhes do Projeto:</h4>

1. Usuários deveram fazer login;

2. Cada partida é composta por 5 questions;

3. Cada question possui um tempo máximo de resposta de 30 segundos;

4. Cada questão respondida corretamente equivale a um score cujo valor dependera do nível de dificuldade da questions e do tempo que a resposta foi dada;

5. Caso passe o tempo limite de resposta a questão será dada como errada e não somará nenhum ponto ao score;

6. Ao responder as 5 questions o usuário será direcionado para a página de feedback;

7. Na página de feedback o usuário poderá escolher ir a página de ranking ou jogar novamente;

8. Visualizar tela com ranking dos jogadores;
