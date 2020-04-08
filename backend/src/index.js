/** este é o arquivo principal do Back-end */

/** importação do módulo express */
const express = require('express');
/** importação do módulo cors */
const cors = require('cors');
/** importação do módulo routes*/
const routes = require('./routes');

/** criação da aplicação express */
const app = express();

/** utilização do app cors */
app.use(cors());
/** utilização do app express*/
app.use(express.json());
/** utilização do app rutes*/
app.use(routes);


app.listen(3333);