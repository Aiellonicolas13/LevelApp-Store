const { juegos } = require('../src/juegos');

exports.getAllJuegosRepository = async () => {
    try {
        console.log('* REPOSITORY - getAllJuegosRepository *');
        return juegos;
    } catch (error) {
        console.log('* Error en getAllJuegosRepository *', error);
    }
};