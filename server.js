const express = require('express');
const juegosRouter = require('./router/juegosRouter');
const comprasRouter = require('./router/comprasRouter');
const cors = require('cors');


const app = express();
app.use(cors());

const PORT = 3000;
const HOST = '127.0.0.1';

app.use(express.json());

app.use('/juegos', juegosRouter);
app.use('/compras', comprasRouter);

app.get('/', (req, res) => {
    console.log('* Entrando a la raiz *');
    res.status(200).json({
        mensaje: 'Bienvenido a la API LevelApp-Store'
    });
});

app.listen(PORT, HOST, () => {
    console.log(`El servidor está corriendo en: http://${HOST}:${PORT}`);
});