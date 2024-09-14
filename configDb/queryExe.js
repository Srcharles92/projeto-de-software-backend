const connection = require('./db');


// executa a chamada para o bd
const queryExe = (query, params) => {
    return new Promise ((resolve, reject) => {
        connection.query(query, params, (error, result) => {
            error ? reject(error): resolve(result)

        })

    })
}

module.exports = queryExe;