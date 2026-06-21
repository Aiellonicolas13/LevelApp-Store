const express = require('express');
const controllerBack = require('../controller/controllerBack');

const routerBack = express.Router();

routerBack.use(express.json());

routerBack.get('/', controllerBack.readAllJuegos);

routerBack.patch('/:id', controllerBack.updateJuego);

routerBack.get('/compras', controllerBack.readAllCompras);
routerBack.get('/:id', controllerBack.readJuegoById);
routerBack.get('/:id/compras', controllerBack.readJuegoByIdCompras);
routerBack.delete('/:id', controllerBack.deleteJuegoById)
routerBack.put('/:id', controllerBack.updateJuegoCompleto)
routerBack.delete('/:id', controllerBack.deleteJuegoById);
routerBack.post('/', controllerBack.createJuego);
module.exports = routerBack;