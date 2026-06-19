const { juegos } = require('../src/juegos');
const {getSQLConnection} = require('../database/conexion')
const queries = require('../database/queries')
const sql = require('mssql')

exports.getAllJuegosRepository = async () => {
    const pool = await getSQLConnection();
    try {
        const resultado = await pool.request().query(queries.getAllJuegos)

        return await JSON.stringify(resultado.recordset);
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
