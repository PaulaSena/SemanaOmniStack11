// 1 - Criado esse arquivo index.js dentro da pasta backEnd.

// 2 - Base | importando funcionalidades do express para variavel.
const express = require('express');

// 3 - Criando variavel para aplicação
const app = express();

// Quando Undefined Informar ao navegador que requisições pode vim em Json 
app.use(express.json());

// 4 - Traçando rota.

 
    app.post('/users', (req, res) => {
        const body=req.body;

        console.log(body);

    return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Theo David'
})
})

/**Métodos HTTP
* HTTP Get ->Buscar uma informação do back-end - Ex. Buscar informação de Usuário
* HTTP Post ->Criar uma informação no back-end - Ex. Cria Usuário.
* HTTP Put -> Alterar uma informação no back-and.
* HTTP Delete: Deletar uma informação no back-end.
**/

/** Tipos de Parametros
 * Query Parms -> Parâmetros nomeados enviados na rota após“?” GET *Ex (filtros, paginação)        
 * Route Parms -> Parâmetros para identificar recursos. Get *Ex. ID usuário especifico.
 * Request  Body -> Corpo da requisição do usuário.
 * HTTP Delete -> Deletar uma informação no back-end.


 **/

// Definindo porta de localhost:
app.listen(3333);
//Feita a rota de uma pagina especifica!
