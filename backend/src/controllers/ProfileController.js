/** este arquivo armazena os módulos ou 'controladores' de perfil */

/** importação do banco de dados */
const connection = require('../database/connection');

/** criação e exportação do controlador de listagem de incident por perfil */
module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
};