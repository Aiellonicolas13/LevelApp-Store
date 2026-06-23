const { getSQLConnection } = require('../database/conexion');
const sql = require('mssql');
const queries = require('../database/queries');

exports.getJuegoByIdComprasRepository = async (id) => {
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

exports.getVentasPorMesRepository = async (mes) => {
    const pool = await getSQLConnection();

    try {
        console.log('* REPOSITORY - getVentasPorMesRepository *');

        const resultado = await pool.request()
            .input('mes', sql.Int, mes)
            .query(queries.getVentasPorMes);

        return resultado.recordset[0];

    } catch (error) {
        console.log('* Error en getVentasPorMesRepository *', error);
    }
};