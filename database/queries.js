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
    deleteJuegoById:`DELETE FROM Juegos WHERE IdJuego = @id`,
    addJuego: `INSERT INTO Juegos
            (Nombre
           ,Precio
           ,Stock
           ,IdCategoria)
     VALUES
           (@Nombre
           ,@Precio
           ,@Stock
           ,@IdCategoria);`,

      updateJuegoCompleto = 
            `UPDATE Juegos
            SET Nombre = @Nombre,
                Precio = @Precio,
                Stock = @Stock,
                IdCategoria = @IdCategoria
            WHERE IdJuego = @IdJuego`,


      getJuegosByUsuario: `SELECT j.IdJuego, j.Nombre AS Juego, u.Nombre AS Usuario
                        FROM Juegos j
                        INNER JOIN JuegosxUsuarios jxu ON j.IdJuego = jxu.IdJuego
                        INNER JOIN Usuarios u ON jxu.IdUsuario = u.IdUsuario
                        WHERE jxu.IdUsuario = @IdUsuario`,

      getUsuariosByJuego: `SELECT u.IdUsuario, u.Nombre AS NombreUsuario, j.Nombre AS NombreJuego
                     FROM Usuarios u
                     INNER JOIN JuegosxUsuarios jxu ON u.IdUsuario = jxu.IdUsuario
                     INNER JOIN Juegos j ON jxu.IdJuego = j.IdJuego
                     WHERE jxu.IdJuego = @IdJuego`,

      addJuegoxUsuario: `INSERT INTO JuegosxUsuarios (IdJuego, IdUsuario) 
                       VALUES (@IdJuego, @IdUsuario)`,

      deleteJuegoxUsuario: `DELETE FROM JuegosxUsuarios 
                          WHERE IdJuego = @IdJuego AND IdUsuario = @IdUsuario`
                  
}