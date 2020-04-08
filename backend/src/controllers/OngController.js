/** este arquivo armazena os módulos ou 'controladores' das ONGs */

/** importação do módulo de criptografia */
const crypto = require('crypto');
/** importação do banco de dados */
const connection = require('../database/connection');

/** criação e exportação dos módulos */
module.exports = {
    /** módulo de listagem das ongs */
    async index(request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    /** módulo de criação das ongs */
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        /** criação de id */
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};