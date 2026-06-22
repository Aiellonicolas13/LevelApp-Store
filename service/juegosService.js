const juegosRepository = require('../repository/juegosRepository');

exports.getAllJuegosService = async () => {
    try {
        console.log('* SERVICE - getAllJuegosService *');
        const juegos = await juegosRepository.getAllJuegosRepository();
        return juegos;
        
    } catch (error) {
        console.log('* Error en getAllJuegosService *', error);
    }
};

exports.updateJuegoService = async (id , juego) => {
    try {
        return await juegosRepository.updateJuegoRepository(id, juego)
    } catch (error) {
        console.log("Error en updateJuegoService()", error)
    }
}

exports.getJuegoByIdService = async (id) => {
    try {
        console.log('* SERVICE - getJuegoByIdService *');
        return await juegosRepository.getJuegoByIdRepository(id);

    } catch (error) {
        console.log('* Error en getJuegoByIdService *', error);
    }
};

exports.deleteJuegoByIdService = async (id) => {
    try {        
        return await juegosRepository.deleteJuegoByIdRepository(id)
    } catch (error) {
        console.log("Error en deleteJuegoByIdService", error)
    }
}

exports.createJuegoService = async (juego) => {
    try{
        return await juegosRepository.createJuegoRepository(juego)
    } catch (error) {
        console.log("Error en createJuegoService", error)
    }
}