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