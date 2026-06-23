/* =========================
   BORRAR BASE SI EXISTE
========================= */

IF DB_ID('LevelAppStore_DB') IS NOT NULL
BEGIN
    DROP DATABASE LevelAppStore_DB;
END
GO

/* =========================
   CREAR BASE DE DATOS
========================= */

CREATE DATABASE LevelAppStore_DB;
GO

USE LevelAppStore_DB;
GO

/* =========================
   TABLAS
========================= */

CREATE TABLE Categorias (
    IdCategoria INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL
);

CREATE TABLE Juegos (
    IdJuego INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(100) NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL,
    IdCategoria INT NOT NULL,
    FOREIGN KEY (IdCategoria) REFERENCES Categorias(IdCategoria)
);

CREATE TABLE Usuarios (
    IdUsuario INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(100) NOT NULL,
    Email VARCHAR(150) NOT NULL
);

CREATE TABLE Compras (
    IdCompra INT PRIMARY KEY IDENTITY(1,1),
    IdUsuario INT NOT NULL,
    FechaCompra DATETIME NOT NULL,
    Total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario)
);

CREATE TABLE DetalleComprasJuegos (
    IdDetalle INT PRIMARY KEY IDENTITY(1,1),
    IdCompra INT NOT NULL,
    IdJuego INT NOT NULL,
    Cantidad INT NOT NULL,
    PrecioUnitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (IdCompra) REFERENCES Compras(IdCompra),
    FOREIGN KEY (IdJuego) REFERENCES Juegos(IdJuego)
);

GO

/* =========================
   CATEGORIAS
========================= */

INSERT INTO Categorias (Nombre)
VALUES ('Accion'), ('Aventura'), ('Shooter'), ('Plataforma');
GO

/* =========================
   USUARIOS
========================= */

INSERT INTO Usuarios (Nombre, Email)
VALUES
('Juan Perez','juan@gmail.com'),
('Maria Gomez','maria@gmail.com'),
('Carlos Lopez','carlos@gmail.com'),
('Ana Rodriguez','ana@gmail.com'),
('Luis Torres','luis@gmail.com'),
('Sofia Herrera','sofia@gmail.com'),
('Miguel Diaz','miguel@gmail.com'),
('Valentina Ruiz','vale@gmail.com'),
('Jorge Castro','jorge@gmail.com'),
('Lucia Vega','lucia@gmail.com'),
('Martin Silva','martin@gmail.com'),
('Camila Flores','camila@gmail.com'),
('Diego Rojas','diego@gmail.com'),
('Paula Navarro','paula@gmail.com'),
('Andres Mendez','andres@gmail.com');
GO

/* =========================
   JUEGOS
========================= */

INSERT INTO Juegos (Nombre, Precio, Stock, IdCategoria)
VALUES
('Shadow Strike',25000,10,1),
('Iron Fury',32000,7,1),
('Battle Storm',28000,12,1),
('Urban Chaos',35000,5,1),
('Crimson Force',30000,8,1),

('Lost Kingdom',27000,10,2),
('Mystic Journey',29000,6,2),
('Ancient Secrets',31000,4,2),
('Island Explorer',26000,15,2),
('Temple Quest',33000,7,2),

('War Zone X',34000,11,3),
('Sniper Elite Force',36000,8,3),
('Galaxy Assault',30000,13,3),
('Tactical Strike',37000,6,3),
('Deadly Ops',35000,9,3),

('Jump Hero',18000,20,4),
('Pixel Adventure',19000,18,4),
('Magic Runner',21000,14,4),
('Sky Platforms',22000,10,4),
('Retro World',17000,25,4),

('Neon Fighters',30000,12,1),
('Dragon Quest X',40000,5,2),
('Space Raiders',38000,8,3),
('Forest Guardian',25000,10,2),
('Cyber Run',26000,16,4);
GO

/* =========================
   COMPRAS
========================= */

INSERT INTO Compras (IdUsuario, FechaCompra, Total)
VALUES
(1,'2025-01-10',0),
(2,'2025-01-15',0),
(3,'2025-01-20',0),
(4,'2025-02-05',0),
(5,'2025-02-10',0),
(6,'2025-02-18',0),
(7,'2025-03-01',0),
(8,'2025-03-10',0),
(9,'2025-03-15',0),
(10,'2025-04-01',0),
(11,'2025-04-10',0),
(12,'2025-04-20',0),
(13,'2025-05-05',0),
(14,'2025-05-15',0),
(15,'2025-05-25',0),
(1,'2025-06-01',0),
(2,'2025-06-10',0),
(3,'2025-06-20',0),
(4,'2025-07-01',0),
(5,'2025-07-10',0),
(6,'2025-07-20',0),
(7,'2025-08-01',0),
(8,'2025-08-10',0),
(9,'2025-08-20',0),
(10,'2025-09-01',0),
(11,'2025-09-10',0),
(12,'2025-10-01',0),
(13,'2025-10-15',0),
(14,'2025-11-01',0),
(15,'2025-12-01',0);
GO

/* =========================
   DETALLES
========================= */

INSERT INTO DetalleComprasJuegos (IdCompra, IdJuego, Cantidad, PrecioUnitario)
VALUES
(1,1,1,25000),(1,6,1,27000),
(2,2,1,32000),(2,7,1,29000),(2,16,1,18000),
(3,3,1,28000),(3,8,1,31000),
(4,4,1,35000),(4,9,1,26000),
(5,5,1,30000),(5,10,1,33000),(5,17,1,19000),
(6,11,1,34000),(6,12,1,36000),
(7,13,1,30000),(7,14,1,37000),
(8,15,1,35000),(8,18,1,21000),
(9,19,1,22000),(9,20,1,17000),
(10,1,1,25000),(10,2,1,32000),
(11,3,1,28000),(11,6,1,27000),(11,7,1,29000),
(12,8,1,31000),(12,9,1,26000),
(13,10,1,33000),(13,11,1,34000),
(14,12,1,36000),(14,13,1,30000),
(15,14,1,37000),(15,15,1,35000),
(16,16,1,18000),(16,17,1,19000),
(17,18,1,21000),(17,19,1,22000),
(18,20,1,17000),(18,1,1,25000),
(19,2,1,32000),(19,3,1,28000),
(20,4,1,35000),(20,5,1,30000),
(21,6,1,27000),(21,7,1,29000),
(22,8,1,31000),(22,9,1,26000),
(23,10,1,33000),(23,11,1,34000),
(24,12,1,36000),(24,13,1,30000),
(25,14,1,37000),(25,15,1,35000),
(26,16,1,18000),(26,17,1,19000),
(27,18,1,21000),(27,19,1,22000),
(28,20,1,17000),(28,1,1,25000),
(29,2,1,32000),(29,3,1,28000),
(30,4,1,35000),(30,5,1,30000);
GO

/* =========================
   TOTALES
========================= */

UPDATE c
SET Total = x.TotalCalculado
FROM Compras c
INNER JOIN (
    SELECT IdCompra,
           SUM(Cantidad * PrecioUnitario) AS TotalCalculado
    FROM DetalleComprasJuegos
    GROUP BY IdCompra
) x ON c.IdCompra = x.IdCompra;

GO
