// Terminal pagina principal execultado o |npm install express | ao instalar aparecerá as dependências
// O Framworks criou automaticamente as pastas com os códigos fontes das dependências instaladas do próprio express.  
// Criado arquivo index.js 

// Base | importando funcionalidades do express para variavel.
const express = require('express');

// Criando variavel para aplicação
const app = express();

// Traçando rota


/*   
Falha na execução
app.get('/', (req, res) => {
    return res.send('Hello World');
}); 
*/


// Rota execultada com sucesso !!  send fomato texto
//app.get('/', (req, res) => res.send('Hello World!'))


/*
Reposta no formato Json, EXECULTADO COM SUCESSO objeto em javaScript ex:dados de usuario.

app.get('/', (req, res) => res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana Paula'
})
)
*/

// Retornando uma reposta no formato Json, EXECULTADO COM SUCESSO objeto em javaScript ex:dados de usuario.

/***Rota (app.get) ->conjunto completo   ('/') Recurso -> Local especifico para ser acessado - Ex: Listar usuários no banco
http://localhost:3333/users
*/


app.get('/users', (req, res) => {
    return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana Paula'
})
})

/****Métodos 
* HTTP Get ->Buscar uma informação do back-end - Ex. Buscar informação de Usuário
* HTTP Post ->Criar uma informação no back-end - Ex. Cria Usuário.
* HTTP Put -> Alterar uma informação no back-and.
* HTTP Delete: Deletar uma informação no back-end.
*/

// Definindo porta de localhost:
app.listen(3333);
//Feita a rota de uma pagina especifica!



/* Pasta principal realizada a instalação do npm i -g create-react-app para iniciar o projeto com ReactJs 
                       | npx create-react-app frontend
Feito a instalação dele, aí você poderá utilizar o mesmo para criar novos projetos.
 */

//Teminal executar na pasta frontEnd o comando | npm start | -> esse comando iniciara um script dentro do package.json



// Teminal executar aplicação | node index.js

/** Start realizado | React app  
 *Edição realizada na pasta src/App.js do arquivo carregado 
 no React app  http://localhost:3000 
**/
