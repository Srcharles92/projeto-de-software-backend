// esse é o arquivo que faz a conexão com o Banco de Dados (MySQL)
const mysql = require('mysql2'); //biblioteca que interagem com o banco de dados

// const pool = mysql.createPool ({
//     host:'Prometheus',
//     user: 'user',
//     passoword: '65590997p',
//     database: 'Livraria'
// });

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'prometheus',
    password: 'Azul@123',
    database: 'livraria'
});

module.exports = connection;