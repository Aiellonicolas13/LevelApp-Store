CREATE DATABASE LevelAppStore_DB;
GO

USE LevelAppStore_DB;
GO

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
    IdJuego INT NOT NULL,
    FOREIGN KEY (IdUsuario) REFERENCES Usuarios(IdUsuario),
    FOREIGN KEY (IdJuego) REFERENCES Juegos(IdJuego)
);

INSERT INTO Categorias (Nombre)
VALUES
('Accion'),
('Aventura'),
('Shooter'),
('Plataforma');

INSERT INTO Juegos (Nombre, Precio, Stock, IdCategoria)
VALUES
('Shadow Strike', 25000, 10, 1),
('Iron Fury', 32000, 7, 1),
('Battle Storm', 28000, 12, 1),
('Urban Chaos', 35000, 5, 1),
('Crimson Force', 30000, 8, 1),
('Lost Kingdom', 27000, 10, 2),
('Mystic Journey', 29000, 6, 2),
('Ancient Secrets', 31000, 4, 2),
('Island Explorer', 26000, 15, 2),
('Temple Quest', 33000, 7, 2),
('War Zone X', 34000, 11, 3),
('Sniper Elite Force', 36000, 8, 3),
('Galaxy Assault', 30000, 13, 3),
('Tactical Strike', 37000, 6, 3),
('Deadly Ops', 35000, 9, 3),
('Jump Hero', 18000, 20, 4),
('Pixel Adventure', 19000, 18, 4),
('Magic Runner', 21000, 14, 4),
('Sky Platforms', 22000, 10, 4),
('Retro World', 17000, 25, 4);

INSERT INTO Usuarios (Nombre, Email)
VALUES
('Juan Perez', 'juan@gmail.com'),
('Maria Gomez', 'maria@gmail.com'),
('Carlos Lopez', 'carlos@gmail.com'),
('Ana Rodriguez', 'ana@gmail.com');

INSERT INTO Compras (IdUsuario, IdJuego)
VALUES
(1,1),
(1,6),
(1,16),
(2,3),
(2,11),
(2,18),
(3,8),
(3,13),
(3,20),
(4,5),
(4,10),
(4,15);