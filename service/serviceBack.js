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

exports.updateJuegoService = async (id , juego) => {
    try {
        return await repositoryBack.updateJuegoRepository(id,juego)
    } catch (error) {
        console.log( "Error en updateJuegoService()", error )
    }
}
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


exports.updateJuegoCompletoService = async(id,juego) => {
    try{
        return await repositoryBack.updateJuegoCompletoRepository(id,juego)
    } catch(error){
        console.log("Error en updateJuegoCompletoService", error)
    }
}

exports.createJuegoService = async (juego) => {
    try{
        return await repositoryBack.createJuegoRepository(juego)
    }catch (error) {
        console.log("Error en createJuegoService", error)
    }
}


exports.createCompraService = async (idJuego, idUsuario) => {
    try {
        await repositoryBack.addCompraRepository(idJuego, idUsuario);
        return await repositoryBack.addJuegoxUsuarioRepository(idJuego, idUsuario);
    } catch (error) {
        console.log("Error en createCompraService", error);
    }
};

exports.getJuegosByUsuarioService = async (idUsuario) => {
    try {
        return await repositoryBack.getJuegosByUsuarioRepository(idUsuario);
    } catch (error) {
        console.log("Error en getJuegosByUsuarioService", error);
    }
};

exports.getUsuariosByJuegoService = async (idJuego) => {
    try {
        return await repositoryBack.getUsuariosByJuegoRepository(idJuego);
    } catch (error) {
        console.log("Error en getUsuariosByJuegoService", error);
    }
};


exports.deleteCompraService = async (idJuego, idUsuario) => {
    try {
        
        await repositoryBack.deleteJuegoxUsuarioRepository(idJuego, idUsuario);
        
        return await repositoryBack.deleteCompraRepository(idJuego, idUsuario);
        
    } catch (error) {
        console.log("Error en deleteCompraService", error);
    }
};
