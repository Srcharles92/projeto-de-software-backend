// controllers/livrosController.js
const queryExe = require('../configDb/queryExe'); // Importando a conexão com o banco de dados



class livroController {
    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const [livros] = await connection.query('SELECT * FROM livros WHERE id = ?', [id]);
            res.json(livros);
        } catch (error) {
            next(error);
        }
    }

    static async getAll(req, res, next) {
        try {
            const [livros] = await connection.query('SELECT * FROM livros');
            res.json(livros);
        } catch (error) {
            next(error);
        }
    }

    static async post(req, res, next) {
        try {
            const sql = 'INSERT INTO livros SET ?';
            const params = {
                ...req.body
            }

            const livros = await queryExe(sql, params);
     
            let response;
            if (livros) response = "livro cadastrado com sucesso";   
            res.json(response);
        } catch (error) {
            next(error);
        }
    };7

    static async delete(req, res, next) {
        try {
            const [livros] = await connection.query('DELETE FROM livros WHERE title;');
            res.json(livros);
        } catch (error) {
            next(error);
        }
    }



    static async put(req, res, next) {
        try {
            const { title, author, publisher, pages, year_published } = req.body;

            const sql2 = 'UPDATE livros SET';

        } catch (error) {
            next(error);
        }
    }
}

module.exports = livroController;

