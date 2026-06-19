const sql = require('mssql')
const {configDB} = require('./config')

exports.getSQLConnection = async () => {
    try {
        const pool = await sql.connect(configDB)

        console.log("Conexión exitosa");
        return pool
    } catch (error) {
        console.log("Error en getSQLConnection:", error)
    }
}

