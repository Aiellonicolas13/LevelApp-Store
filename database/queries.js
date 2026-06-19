module.exports = {
    getAllJuegos: `SELECT * FROM Juegos`,

    getJuegoById: `SELECT j.IdJuego, j.Nombre, j.Precio, j.Stock, c.Nombre AS Categoria
                   FROM Juegos j
                   INNER JOIN Categorias c ON j.IdCategoria = c.IdCategoria
                   WHERE j.IdJuego = @id`,
    getJuegoByIdCompras: 
                    `SELECT j.IdJuego, j.Nombre AS nombreJuego, u.Nombre AS nombreUsuario, u.Email 
                    FROM Juegos j 
                    LEFT JOIN Compras c ON j.IdJuego = c.IdJuego 
                    LEFT JOIN Usuarios u ON c.IdUsuario = u.IdUsuario 
                    WHERE j.IdJuego = @id`,
    getAllCompras: `SELECT c.IdCompra, u.Nombre AS nombreUsuario,j.Nombre AS nombreJuego 
                    FROM Compras c 
                    INNER JOIN Usuarios u ON c.IdUsuario = u.IdUsuario 
                    INNER JOIN Juegos j ON c.IdJuego = j.IdJuego`,
    deleteJuegoByIdCompras: `SELECT * FROM Compras WHERE IdJuego = 1;`,
    deleteJuegoById:`DELETE FROM Juegos WHERE IdJuego = @id`
}