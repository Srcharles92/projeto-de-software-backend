// controllers/livrosController.js
const queryExe = require('../configDb/queryExe'); // Importando a conexão com o banco de dados

class livroController {
    static async getOne(req, res, next) {
        try {
            const id = req.params.id;
            const sql = "SELECT * FROM livros where id = ?";
            const livro = await queryExe(sql, id);
            console.log(livro);
            res.json(livro);
        } catch (error) {
            next()
        }
    }

    static async getAll(req, res, next) {
        try {
            const sql = "SELECT * FROM livros";
            const livro = await queryExe(sql, "");
            console.log(livro);
            res.json(livro);
        } catch (error) {
            next();
        }
    }

    static async post(req, res, next) {
        try {
            const sql = 'INSERT INTO livros SET ?';
            const params = {
                ...req.body
            }
            console.log(params);
            const livros = await queryExe(sql, params);
            let response;
            if (livros) response = "livro cadastrado com sucesso";
            res.json(response);
        } catch (error) {
            next(error);
        }
    };


    static async delete(req, res, next) { // tomar cuidado para que a fazendo a mesma chamada não tenha o m,esmo efeito 
        try {
            const id = req.params.id;
            const sql = "DELETE FROM livros where id = ?";
            const livro = await queryExe(sql, id);
            console.log(livro);
            let response;
            if(livro) response = "Livro deletado com sucesso!"; // se for deletado affectrows vai ser 1 e ai eu coloco mensagem de deletado com sucesso, se não mensagem de livro não deletado
            res.json(response);
        } catch (error) {
            next(error);
        }
    };



    static async patch(req, res, next) {
        try {
            const id = req.params.id;
            const livro = req.body;
            const sql = "UPDATE livros SET ? WHERE id = ?";
            const response = await queryExe(sql, [livro, id]);
            if(response) res.json("Atualização feita com sucesso! ");
        } catch (error) {
            next(error);
        }
    }
}

module.exports = livroController;

