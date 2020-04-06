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

// Rota execultada com sucesso !!
app.get('/', (req, res) => res.send('Hello World!'))


// Definindo porta de localhost:
app.listen(3333);

//Teminal executar aplicação | node index.js