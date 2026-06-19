const dotenv = require('dotenv')

dotenv.config();

const configDB = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    server: process.env.SERVER_NAME,
    database: process.env.NAME_DB,
    port: parseInt(process.env.PORT_DB, 10) || 1433,
    options: {
        trustServerCertificate: true
    }
}
module.exports = {configDB}
