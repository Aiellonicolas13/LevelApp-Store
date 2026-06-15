const serviceBack = require('../service/serviceBack');

exports.readAllJuegos = async (req, res) => {
    try {
        console.log('* CONTROLLER - readAllJuegos *');
        const juegos = await serviceBack.getAllJuegosService();
        res.status(200).json(juegos);
    } catch (error) {
        console.log('* Error en readAllJuegos *', error);
        res.status(500).json({
            code: 500,
            message: 'Error al obtener los juegos'
        });
    }
};