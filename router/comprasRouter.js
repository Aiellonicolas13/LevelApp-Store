const express = require('express');
const comprasController = require('../controller/comprasController');

const comprasRouter = express.Router();

comprasRouter.use(express.json());

comprasRouter.get('/', comprasController.readAllCompras);
comprasRouter.get('/ventas-mes/:mes', comprasController.readVentasPorMes);
comprasRouter.get('/:id', comprasController.readJuegoByIdCompras);

module.exports = comprasRouter;