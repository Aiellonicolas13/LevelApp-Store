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