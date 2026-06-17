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

exports.readJuegoById = async (req, res) => {
    try {
        console.log('* CONTROLLER - readJuegoById *');
        const {id} = req.params;
        const juego = await serviceBack.getJuegoByIdService(id);

        if (!juego) 
            return res.status(404).json({ message: `Juego con id ${id} no encontrado` });
            res.status(200).json(juego);
            
    } catch (error) {
        console.log('* Error en readJuegoById *', error);
        res.status(500).json({
            code: 500,
            message: 'Error al obtener el juego'
        });
    }
};