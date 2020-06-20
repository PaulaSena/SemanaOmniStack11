/**** Passo anterior.
 *  Terminal pagina principal execultar:
| ~> npm install express 
*** O Framworks cria automaticamente as pastas com os códigos fontes e dependências do próprio express.  
*/

// 1 - Criado esse arquivo index.js dentro da pasta backEnd.


// 2 - Base | importando funcionalidades do express para variavel.
const express = require('express');

// 3 - Criando variavel para aplicação
const app = express();

// Quando Undefined Informar ao navegador que requisições pode vim em Json 
app.use(express.json());

// 4 - Traçando rota.

// Rota é um conjunto com *Método  *Recurso, *Requisição e Resposta.

/**** Rota (app.get) -> get método de busca.  
* ('/') *Recurso -> Local especifico para ser acessado 
*  Ex: Listar USERS no banco http://localhost:3333/ USERS
*/



/**** Resposta execultada no formato de texto Send  ex1
app.get('/', (req, res) => {
    return res.send('Hello World');
}); 
*/


/**** Resposta execultada no formato de texto Send  ex2
app.get('/', (req, res) => res.send('Hello World!'))
*/



/*** Retornando uma reposta no formato Json = (objeto em javaScript) ex:dados de usuario.
app.get('/', (req, res) => {
    return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana Paula Sena'
})
})
*/

//*** Criando um usuario com método POST e realizando teste com software Postman!
/*
app.get('/users/', (req, res) => {
    return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana Paula Silva'
})
})
*/

/* (Criar Editar)  Metodo Post  para criar Usuario
*  Request  Body : Parâmetros para criar ou alterar recurso
*  EX: Nome E-mail senha.
*/
 
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



/****  No terminal Pasta principal realizar a instalação do app react. 
|~> npm i -g create-react-app 
*** Para iniciar o projeto com ReactJs digite o comando seguinte... e por ultimo o nome da pasta.
|~> npx create-react-app frontend
***Feito a instalação dele, poderá utiliza-lo para criar novos projetos.
 ****/

/**** Executar Teminal na pasta frontEnd:
| ~> npm start 
// esse comando iniciara um script dentro do package.json



// Executar Teminal na rota da aplicação 
|~> node index.js

/** Start realizado =) | React app  
 *Edição realizada =) Ola mundo, pasta src/App.js no React app  http://localhost:3000 
**/
