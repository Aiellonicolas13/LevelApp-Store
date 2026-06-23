const comprasRepository = require('../repository/comprasRepository');

exports.getJuegoByIdComprasService = async (id) => {
    try {
        console.log('* SERVICE - getComprasByIdService *');
        return await comprasRepository.getJuegoByIdComprasRepository(id);

    } catch (error) {
        console.log('* Error en getComprasByIdService *', error);
    }
};

exports.getAllComprasService = async () => {
    try {
        console.log('* SERVICE - getAllComprasService *');
        const compras = await comprasRepository.getAllComprasRepository();
        return compras;
        
    } catch (error) {
        console.log('* Error en getAllComprasService *', error);
    }
};

exports.getVentasPorMesService = async (mes) => {
    try {
        console.log('* SERVICE - getVentasPorMesService *');

        return await comprasRepository.getVentasPorMesRepository(mes);

    } catch (error) {
        console.log('* Error en getVentasPorMesService *', error);
    }
};