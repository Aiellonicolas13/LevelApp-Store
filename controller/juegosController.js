const juegosService = require('../service/juegosService');

exports.readAllJuegos = async (req, res) => {
    try {
        console.log('* CONTROLLER - readAllJuegos *');
        const juegos = await juegosService.getAllJuegosService();
        res.status(200).json(juegos);

    } catch (error) {
        console.log('* Error en readAllJuegos *', error);
        res.status(500).json({
            message: 'Error al obtener los juegos'
        });
    }
};

exports.updateJuego = async (req, res) => {
    try {
        const id = req.params.id
        const juegoActualizado = req.body
        console.log("controller-updateJuego - id:", id, " - juegoActulizado: ", juegoActualizado)
        const juego = await juegosService.updateJuegoService(id, juegoActualizado)

        if(!juego){
            return res.status(404).send(`No se encuentra un juego a modificar con el id:${id}`)
        }
        res.status(200).send(JSON.stringify(juego))
    } catch (error) {
        console.log("Error - CONTROLLER updateJegos", error)
        res.status(500).send({
            code: 500,
            message: "Error al actualizar el juego"
        })
    }
}

exports.readJuegoById = async (req, res) => {
    try {
        console.log('* CONTROLLER - readJuegoById *');
        const { id } = req.params;
        const juego = await juegosService.getJuegoByIdService(id);

        if (!juego) {
            return res.status(404).json({
                message: `Juego con id ${id} no encontrado`
            });
        }
        res.status(200).json(juego);

    } catch (error) {
        console.log('* Error en readJuegoById *', error);
        res.status(500).json({
            message: 'Error al obtener el juego'
        });
    }
};

exports.deleteJuegoById = async (req, res) => {
    try {
        const id = req.params.id
        const juego = await juegosService.deleteJuegoByIdService(id)

        if (juego === 0) {
            return res.status(404).send(`No se encuentra el juego a eliminar con el id:${id}`)
        }
        res.status(200).json({
            message: "Juego eliminado correctamente"
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            message: "Error al eliminar el juego seleccionado"
        })
    }
}

exports.createJuego = async (req, res) => {
    try {
        const juego = req.body;
        res.send(await juegosService.createJuegoService(juego))
    } catch (error) {
        console.log("Error - controller createJuego", error)
        res.status(500).send({
            code: 500,
            message: "Error al agregar el juego"
        })
    }
}