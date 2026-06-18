module.exports = {
    getAllJuegos: 'SELECT * FROM Juegos',

    getJuegoById: `SELECT j.IdJuego, j.Nombre, j.Precio, j.Stock, c.Nombre AS Categoria
                   FROM Juegos j
                   INNER JOIN Categorias c ON j.IdCategoria = c.IdCategoria
                   WHERE j.IdJuego = @id`
}