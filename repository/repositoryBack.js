const { juegos } = require('../src/juegos');

exports.getAllJuegosRepository = async () => {
    try {
        console.log('* REPOSITORY - getAllJuegosRepository *');
        return juegos;
    } catch (error) {
        console.log('* Error en getAllJuegosRepository *', error);
    }
};

exports.getJuegoByIdRepository = async (id) => {
    try {
        console.log('* REPOSITORY - getJuegoByIdRepository *');
        const juegoById = juegos.find(juego => juego.id == id);
        return juegoById;

    } catch (error) {
        console.log('* Error en getJuegoByIdRepository *', error);
    }
};
 