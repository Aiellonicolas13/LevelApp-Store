const express = require('express');
const controllerBack = require('../controller/controllerBack');

const routerBack = express.Router();

routerBack.use(express.json());

routerBack.get('/', controllerBack.readAllJuegos);
routerBack.get('/compras', controllerBack.readAllCompras);
routerBack.get('/:id', controllerBack.readJuegoById);
routerBack.get('/:id/compras', controllerBack.readJuegoByIdCompras);
routerBack.delete('/:id', controllerBack.deleteJuegoById)
module.exports = routerBack;