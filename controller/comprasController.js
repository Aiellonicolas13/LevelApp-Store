const comprasService = require('../service/comprasService');

exports.readJuegoByIdCompras = async (req, res) => {
    try {
        console.log('* CONTROLLER - readJuegoByIdCompras *');
        const { id } = req.params;
        const compras = await comprasService.getJuegoByIdComprasService(id);

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
        const compras = await comprasService.getAllComprasService();
        res.status(200).json(compras);

    } catch (error) {
        console.log('* Error en readAllCompras *', error);
        res.status(500).json({
            message: 'Error al obtener las compras'
        });
    }
};