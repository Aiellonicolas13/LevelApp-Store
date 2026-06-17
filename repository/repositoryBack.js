const { juegos } = require('../src/juegos');
const {getSQLConnection} = require('../database/conexion')
const queries = require('../database/queries')

exports.getAllJuegosRepository = async () => {
    const pool = await getSQLConnection();
    try {
        const resultado = await pool.request().query(queries.getAllJuegos)

        return await JSON.stringify(resultado.recordset);
    } catch (error) {
        console.log('* Error en getAllJuegosRepository *', error);
    }
};
