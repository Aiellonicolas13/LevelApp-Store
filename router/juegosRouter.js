const express = require('express');
const juegosController = require('../controller/juegosController');

const juegosRouter = express.Router();
juegosRouter.use(express.json());

juegosRouter.get('/', juegosController.readAllJuegos);
juegosRouter.get('/:id', juegosController.readJuegoById);

juegosRouter.patch('/:id', juegosController.updateJuego);

juegosRouter.post('/', juegosController.createJuego);

juegosRouter.delete('/:id', juegosController.deleteJuegoById);

module.exports = juegosRouter;