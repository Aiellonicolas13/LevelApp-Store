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