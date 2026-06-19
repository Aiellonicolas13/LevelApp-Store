const repositoryBack = require('../repository/repositoryBack');

exports.getAllJuegosService = async () => {
    try {
        console.log('* SERVICE - getAllJuegosService *');
        const juegos = await repositoryBack.getAllJuegosRepository();
        return juegos;
        
    } catch (error) {
        console.log('* Error en getAllJuegosService *', error);
    }
};

exports.getJuegoByIdService = async (id) => {
    try {
        console.log('* SERVICE - getJuegoByIdService *');
        return await repositoryBack.getJuegoByIdRepository(id);

    } catch (error) {
        console.log('* Error en getJuegoByIdService *', error);
    }
};
exports.getJuegoByIdComprasService = async (id) => {
    try {
        console.log('* SERVICE - getComprasByIdService *');
        return await repositoryBack.getJuegoByIdComprasRepository(id);

    } catch (error) {
        console.log('* Error en getComprasByIdService *', error);
    }
};
exports.getAllComprasService = async () => {
    try {
        console.log('* SERVICE - getAllComprasService *');
        const compras = await repositoryBack.getAllComprasRepository();
        return compras;
        
    } catch (error) {
        console.log('* Error en getAllComprasService *', error);
    }
};
exports.deleteJuegoByIdService = async (id) => {
    try {        
        return await repositoryBack.deleteJuegoByIdRepository(id)
    } catch (error) {
        console.log("Error en deleteJuegoByIdService", error)
    }
}