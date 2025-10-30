CREATE DATABASE empresa_test CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE empresa_test;

-- Crear tabla de usuarios
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL UNIQUE,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (nombre, email, fecha_registro) VALUES
('Ana Pérez', 'ana.perez@example.com', DATE_SUB(NOW(), INTERVAL 5 DAY)),
('Luis Gómez', 'luis.gomez@example.com', DATE_SUB(NOW(), INTERVAL 10 DAY)),
('Carla Ruiz', 'carla.ruiz@example.com', DATE_SUB(NOW(), INTERVAL 20 DAY)),
('Pedro López', 'pedro.lopez@example.com', DATE_SUB(NOW(), INTERVAL 29 DAY));

-- Registros más antiguos (deben NO aparecer en la API)
INSERT INTO usuarios (nombre, email, fecha_registro) VALUES
('Marta Díaz', 'marta.diaz@example.com', DATE_SUB(NOW(), INTERVAL 40 DAY)),
('Juan Rivas', 'juan.rivas@example.com', DATE_SUB(NOW(), INTERVAL 60 DAY));