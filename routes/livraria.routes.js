// rotas/livros.js
const express = require('express');
const livrosController = require('../controller/livros.controller');

const router = express.Router();


// rota para criar um novo livro (POST)
router.post('/livros', livrosController.post);


// rota para buscar todos os livros (GET)
router.get('/livros', livrosController.getAll);


// rota para buscar um livro por ID (GET)
router.get('/livros/:id', livrosController.getOne);


// rota para atualizar um livro (PUT)
router.put('/livros/:id', livrosController.put);


// rota para deletar um livro (DELETE)
router.delete('/livros/:id', livrosController.delete);


module.exports = router;