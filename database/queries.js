module.exports = {
    getAllJuegos: `SELECT j.IdJuego,
                  j.Nombre,
                  j.Precio,
                  j.Stock,
                  c.Nombre AS Categoria FROM Juegos j
                  INNER JOIN Categorias c
                  ON j.IdCategoria = c.IdCategoria`,

    getJuegoById: `SELECT j.IdJuego, j.Nombre, j.Precio, j.Stock, c.Nombre AS Categoria
                   FROM Juegos j
                   INNER JOIN Categorias c ON j.IdCategoria = c.IdCategoria
                   WHERE j.IdJuego = @id`,

    getJuegoByIdCompras: 
                    `SELECT j.IdJuego, j.Nombre,
                  SUM(cd.Cantidad) AS TotalUnidadesVendidas,
                  SUM(cd.Cantidad * cd.PrecioUnitario) AS TotalIngresos
                  FROM DetalleComprasJuegos cd
                  INNER JOIN Juegos j ON cd.IdJuego = j.IdJuego
                  WHERE j.IdJuego = @id
                  GROUP BY j.IdJuego, j.Nombre;`,

    getAllCompras: `SELECT
                  c.IdCompra,
                  u.Nombre AS Usuario,
                  CONVERT(VARCHAR(10), c.FechaCompra, 103) AS FechaCompra,
                  c.Total
                  FROM Compras c
                  INNER JOIN Usuarios u ON c.IdUsuario = u.IdUsuario
                  ORDER BY c.FechaCompra;`,

    deleteJuegoByIdCompras: `SELECT * FROM Compras WHERE IdJuego = 1;`,

    deleteJuegoById:`DELETE FROM Juegos WHERE IdJuego = @id`,

    addJuego:
            `INSERT INTO Juegos
            (Nombre
            ,Precio
            ,Stock
            ,IdCategoria)
            OUTPUT INSERTED.*
      VALUES
            (@Nombre
            ,@Precio
            ,@Stock
            ,@IdCategoria);`,
      
      getVentasPorMes: `
        SELECT
        SUM(dc.Cantidad) AS TotalJuegosVendidos,
        SUM(dc.Cantidad * dc.PrecioUnitario) AS TotalRecaudado
        FROM Compras c
        INNER JOIN DetalleComprasJuegos dc
        ON c.IdCompra = dc.IdCompra
        WHERE MONTH(c.FechaCompra) = @mes;`,
}
