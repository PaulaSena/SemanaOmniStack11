// Base | importando funcionalidades do express para variavel
const express = require('express');

// Criando variavel para aplicação
const app = express();

// Traçando rota 

/*   Falha na execução
app.get('/', (req, res) => {
    return res.send('Hello World');
}); 

*/

// Rota execultada com sucesso !!  send fomato texto

/*app.get('/', (req, res) => res.send('Hello World!'))
*/

// Reposta no formato Json, EXECULTADO COM SUCESSO objeto em javaScript ex:dados de usuario.

/*app.get('/', (req, res) => res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana Paula'
})
)*/

// Retornando uma reposta no formato Json, EXECULTADO COM SUCESSO objeto em javaScript ex:dados de usuario.

app.get('/', (req, res) => {
    return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana Paula'
})
})

// Definindo porta de localhost:
app.listen(3333);

//Teminal executar aplicação | node index.js

// Feita a instalação do npm i -g create-react-app para iniciar o projeto com ReactJs 