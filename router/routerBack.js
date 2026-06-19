const express = require('express');
const controllerBack = require('../controller/controllerBack');

const routerBack = express.Router();

routerBack.use(express.json());

routerBack.get('/', controllerBack.readAllJuegos);

routerBack.patch('/:id', controllerBack.updateJuego);

module.exports = routerBack;