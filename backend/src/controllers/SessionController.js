/** este arquivo armazena os módulos ou 'controladores' de login */

/** importação do banco de dados */
const connection = require('../database/connection');

/** criação e exportação do controlador de login */
module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }

        return response.json(ong);
    }
};