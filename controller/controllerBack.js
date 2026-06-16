const serviceBack = require('../service/serviceBack');

exports.readAllJuegos = async (req, res) => {
    try {
        console.log('* CONTROLLER - readAllJuegos *');
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(await serviceBack.getAllJuegosService())
    } catch (error) {
        console.log('* Error en readAllJuegos *', error);
        res.status(500).json({
            code: 500,
            message: 'Error al obtener los juegos'
        });
    }
};
