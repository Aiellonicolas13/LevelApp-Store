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

exports.updateJuegoCompletoRepository = async(id, juegoCompletoUpdated) => {}