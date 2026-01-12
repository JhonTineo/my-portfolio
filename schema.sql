CREATE TABLE IF NOT EXISTS productos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  precio REAL NOT NULL
);

INSERT INTO productos (nombre, precio) VALUES ('Laptop Pro', 1500.99);
INSERT INTO productos (nombre, precio) VALUES ('Monitor 4K', 350.00);
INSERT INTO productos (nombre, precio) VALUES ('Teclado Mecánico', 89.50);