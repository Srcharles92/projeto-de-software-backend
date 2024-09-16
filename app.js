// site.js
const express = require('express');
const livrosRouter = require('./routes/livraria.routes');
const connection = require('./configDb/db');
const cors = require('cors') 
const bodyParser = require('body-parser')


const app = express();
const port = 4000;


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true})); // Configuração para usar parâmetros na URL.
app.use('/api', livrosRouter); // Base da URL para as rotas dos livros

// conecta com o banco e mostra se deu erro.
connection.connect(error => {
  error ? console.log(error): console.log("conectado com sucesso ao banco de dados");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});