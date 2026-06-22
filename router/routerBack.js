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
routerBack.post('/', controllerBack.createJuego);
routerBack.post('/compras', controllerBack.createCompra);
routerBack.delete('/compras/:idJuego/:idUsuario', controllerBack.deleteCompra);
routerBack.get('/usuarios/:idUsuario/juegos', controllerBack.readJuegosByUsuario);
routerBack.get('/:idJuego/usuarios', controllerBack.readUsuariosByJuego);

module.exports = routerBack;