/** este arquivo armazena o módulo de conexão da aplicação com o BD */

/** importação do knex */
const knex = require('knex');
/** importando o módulo de configuração do knex */
const configuration= require('../../knexfile');
/** criação do módulo de conexão*/
const connection = knex(configuration.development);
/** exportação do módulo de conexão */
module.exports = connection;