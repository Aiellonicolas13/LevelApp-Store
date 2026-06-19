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

exports.updateJuego = async (req, res) => {
    try {
        const id = req.params.id
        const juegoActualizado = req.body
        console.log("CONTROLLER updateFrontendLanguage - id:", id, " - juegoactulizado: ", juegoActualizado)
        const juego = await serviceBack.updateJuegoService(id, juegoActualizado)

        if(juego.length === 0){
            return res.status(404).send(`No se encuentra un juego a modificar con el id:${id}`)
        }
        res.status(200).send(JSON.stringify(juego))
    } catch (error) {
        console.log("Error - CONTROLLER updateJegos", error)
        res.status(500).send({
            code: 500,
            message: "Error al actualizar el lenguaje de frontend"
        })
    }
}
