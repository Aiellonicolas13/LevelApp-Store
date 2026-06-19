const serviceBack = require('../service/serviceBack');

exports.readAllJuegos = async (req, res) => {
    try {
        console.log('* CONTROLLER - readAllJuegos *');
        const juegos = await serviceBack.getAllJuegosService();
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
        const juego = await serviceBack.updateJuegoService(id, juegoActualizado)

        if(juego.length === 0){
            return res.status(404).send(`No se encuentra un juego a modificar con el id:${id}`)
        }
        res.status(200).send(JSON.stringify(juego))
    } catch (error) {
        console.log("Error - CONTROLLER updateJegos", error)
        res.status(500).send({
            code: 500,
            message: "Error al actualizar"
        })
    }
}
exports.readJuegoById = async (req, res) => {
    try {
        console.log('* CONTROLLER - readJuegoById *');
        const { id } = req.params;
        const juego = await serviceBack.getJuegoByIdService(id);

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
exports.readJuegoByIdCompras = async (req, res) => {
    try {
        console.log('* CONTROLLER - readJuegoByIdCompras *');
        const { id } = req.params;
        const compras = await serviceBack.getJuegoByIdComprasService(id);

        if (!compras) {
            return res.status(404).json({
                message: `Compras con id ${id} no encontrado`
            });
        }
        res.status(200).json(compras);

    } catch (error) {
        console.log('* Error en readJuegoByIdCompras *', error);
        res.status(500).json({
            message: 'Error al obtener las compras'
        });
    }
};
exports.readAllCompras = async (req, res) => {
    try {
        console.log('* CONTROLLER - readAllCompras *');
        const compras = await serviceBack.getAllComprasService();
        res.status(200).json(compras);

    } catch (error) {
        console.log('* Error en readAllCompras *', error);
        res.status(500).json({
            message: 'Error al obtener las compras'
        });
    }
};
// ---------------------------------
exports.deleteJuegoById = async (req, res) => {
    try {
        const id = req.params.id
        const juego = await serviceBack.deleteJuegoByIdService(id)//...

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
