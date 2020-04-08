/**
 * Este arquivo armazena as rotas da aplicação 
 */

 /** importando os módulos */
const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/** criando o módulo 'routes' */
const routes = express.Router();

/** rota de login  */
routes.post('/sessions', SessionController.create);

/** rotas de listagem e criação de ONG */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/** rota de listagem de incident por perfil */
routes.get('/profile', ProfileController.index);

/** rotas de listagem total de incidents, criação e exclusão de incident */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


/**exportação do módulo 'routes' */
module.exports = routes;