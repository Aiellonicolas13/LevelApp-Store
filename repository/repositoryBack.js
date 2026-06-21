const { getSQLConnection } = require('../database/conexion');
const sql = require('mssql');
const queries = require('../database/queries');

exports.getAllJuegosRepository = async () => {
    try {
        console.log('* REPOSITORY - getAllJuegosRepository *');
        const pool = await getSQLConnection();
        const resultado = await pool.request().query(queries.getAllJuegos);
        return resultado.recordset;

    } catch (error) {
        console.log('* Error en getAllJuegosRepository *', error);
    }
};
exports.updateJuegoRepository = async (id , juegoUpdated) => {
 try {
        const pool = await getSQLConnection()

         const requestActualizado = pool.request();
         requestActualizado.input('IdJuego', sql.Int, id);
         const queryParts = [];
         
         if(juegoUpdated.Precio !== undefined) {
            requestActualizado.input('Precio', sql.Int, juegoUpdated.Precio);
            queryParts.push('Precio = @Precio')
         }         

         if(juegoUpdated.Stock !== undefined) {
            requestActualizado.input('Stock', sql.Int, juegoUpdated.Stock);
            queryParts.push('Stock = @Stock')
         }

         const queryFinal = `UPDATE Juegos SET ${queryParts.join(', ')} WHERE IdJuego = @IdJuego`
         const juegoActualizado = await requestActualizado.query(queryFinal)

         if(juegoActualizado.rowsAffected[0] === 0) {
            return null;
         }

         return { id, ...juegoUpdated };

    } catch (error) {
        console.log("Error en updateJuegoRepository ", error)
    }
}

exports.getJuegoByIdRepository = async (id) => {
    const pool = await getSQLConnection();
    try {
        console.log('* REPOSITORY - getJuegoByIdRepository *');
        const resultado = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getJuegoById);
        return resultado.recordset[0];
    } catch (error) {
        console.log('* Error en getJuegoByIdRepository *', error);
    }
};
exports.getJuegoByIdComprasRepository  = async (id) => {
    const pool = await getSQLConnection();
    try {
        console.log('* REPOSITORY - getComprasByIdRepository *');
        const resultado = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getJuegoByIdCompras);
        return resultado.recordset[0];
    } catch (error) {
        console.log('* Error en getComprasByIdRepository *', error);
    }
};
exports.getAllComprasRepository = async () => {
    try {
        console.log('* REPOSITORY - getAllComprasRepository *');
        const pool = await getSQLConnection();
        const resultado = await pool.request().query(queries.getAllCompras);
        return resultado.recordset;

    } catch (error) {
        console.log('* Error en getAllComprasRepository *', error);
    }
};

exports.deleteJuegoByIdRepository = async (id) => {
    const pool = await getSQLConnection();
    try {
        console.log('* REPOSITORY - eliminatedJuegoByIdRepository *');
        const resultado = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.deleteJuegoById);
    } catch (error) {
        console.log("Error al eliminar juego -repository ", error)
    }
}

exports.updateJuegoCompletoRepository = async(id, juegoCompletoUpdated) => {
    try{
        const pool = await getSQLConnection();
        const reqJuegoActualizado = pool.request();

        reqJuegoActualizado.input('IdJuego', sql.Int, id);
        reqJuegoActualizado.input('Nombre', sql.VarChar, juegoCompletoUpdated.Nombre);
        reqJuegoActualizado.input('Precio', sql.Int, juegoCompletoUpdated.Precio);
        reqJuegoActualizado.input('Stock', sql.Int, juegoCompletoUpdated.Stock);
        reqJuegoActualizado.input('IdCategoria', sql.Int, juegoCompletoUpdated.IdCategoria);

        const juegoCompletoActualizado = await reqJuegoActualizado.query(updateJuegoCompleto);

        if(juegoCompletoActualizado.rowsAffected[0] === 0) {
            return null;
         }

         return juegoCompletoActualizado;
    } catch(error){
        console.log("Error en updateJuegoCompletoRepository", error)
    }
}



exports.createJuegoRepository = async(juego) => {
    const {Nombre, Precio, Stock, IdCategoria} = juego
    const pool = await getSQLConnection()

    try{
        const resultado = await pool.request()
        .input('Nombre', sql.NVarChar, Nombre)
        .input('Precio', sql.Decimal, Precio)
        .input('Stock', sql.Int, Stock)
        .input('IdCategoria', sql.Int, IdCategoria)
        .query(queries.addJuego)
        return resultado
    } catch (error) {
        console.log("Error al agregar juego -repository ", error)
    }



    // METODOS TABLA JuegosXUsuarios //

    exports.getJuegosByUsuarioRepository = async (idUsuario) => {
        try{
            const pool = await getSQLConnection();
            const resultado = await pool.request()
            .input('IdUsuario', sql.Int, idUsuario)
            .query(queries.getJuegosByUsuario);

            return resultado.recordset;
        } catch(error){
            console.log("Error en getJuegosByUsuarioRepository", error)
        }

    }

     exports.getUsuariosByJuegoRepository = async (idJuego) => {
        try{
            const pool = await getSQLConnection();
            const resultado = await pool.request()
            .input('IdJuego', sql.Int, idJuego)
            .query(queries.getUsuariosByJuego);

            return resultado.recordset;
        } catch(error){
            console.log("Error en getUsuariosByJuegoRepository", error)
        }

    }


    exports.addJuegoxUsuarioRepository = async (idJuego,idUsuario) => {
        try{
            const pool = await getSQLConnection();
            const resultado = await pool.request()
            .input('IdJuego', sql.Int, idJuego)
            .input('IdUsuario', sql.Int, idUsuario)
            .query(queries.addJuegoxUsuario);
            
            return resultado.rowsAffected;
        }catch(error){
            console.log("Error en addJuegoxUsuarioRepository", error)
        }
    }


    exports.deleteJuegoxUsuarioRepository = async (idJuego,idUsuario) => {
        try{
            const pool = await getSQLConnection();
            const resultado = await pool.request()
            .input('IdJuego', sql.Int, idJuego)
            .input('IdUsuario', sql.Int, idUsuario)
            .query(queries.deleteJuegoxUsuario);
            
            return resultado.rowsAffected;
            }catch(error){
            console.log("Error en deleteJuegoxUsuarioRepository", error)
        }

    }




}
