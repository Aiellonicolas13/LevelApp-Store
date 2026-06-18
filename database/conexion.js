const sql = require('mssql')
const {configDB} = require('./config')
const dotenv = require('dotenv')
dotenv.config();

exports.getSQLConnection = async () => {
    try {
        const pool = await sql.connect(configDB)

        return pool
    } catch (error) {
        console.log("Error en getSQLConnection:", error)
    }
}

