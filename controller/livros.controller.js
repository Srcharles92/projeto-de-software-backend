// controllers/livrosController.js
const { error } = require('console');
const connection = require('../configDb/db');
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

        /*function findUserByPk(connection, bookId) {
                const query ='Select * from livros WHERE id = ?';

            connection.execute(query,[bookId], (error, results) => {
                if(error){
                    returnconsole.error('Erro na consulta: ' + error);
                }

                if(results.lenght > 0){
                    console.log('Livro encontrado: ', results[0]);
                } else{
                    console.log('Livro não encontrado')
                }


            })

            }*/
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
    };


    static async delete(req, res, next) { // tomar cuidado para que a fazendo a mesma chamada não tenha o m,esmo efeito 
        try {
            // Recuperar o livro pelo ID passado na requisição
            function deleteBookById(connection, bookId) {
                const query = 'DELETE FROM livros WHERE id = ?';
                
                connection.execute(query, [bookId], (err, results) => {
                  if (err) {
                    return console.error('Erro na consulta: ' + err);
                  }
              
                  if (results.affectedRows > 0) {
                    console.log(`Livro com ID ${bookId} excluído com sucesso.`);
                  } else {
                    console.log(`Livro com ID ${bookId} não encontrado.`);
                  }
                });
              }

              

            // remover o livro do BD
            await livro.destroy({
                Where: { id: livroId },
            });

            res.json({
                mensagem: `Livro ${req.params.id} removido com sucesso!`,
            });
        } catch (error) {
            next(error);
        }
    };



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

