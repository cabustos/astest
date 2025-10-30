/*

Diferencia entre INNER JOIN y LEFT JOIN en SQL:

INNER JOIN devuelve solo las filas que tienen coincidencias en ambas tablas.

LEFT JOIN devuelve todas las filas de la tabla izquierda y las filas que coinciden de la tabla derecha, si no hay coincidencia, los resultados de la tabla derecha serán nulos.

Ejemplo: 

Tabla A:
ID | Nombre
1  | Ana
2  | Luis
3  | Marta

Tabla B:
ID | Apellido
1  | Perez
2  | Gomez
3  | Lopez  

INNER JOIN:
SELECT A.ID, A.Nombre, B.Apellido
FROM A
INNER JOIN B ON A.ID = B.ID;

Que muestra:
ID | Nombre | Apellido
1  | Ana    | Perez
2  | Luis   | Gomez
3  | Marta  | Lopez

LEFT JOIN:
SELECT A.ID, A.Nombre, B.Apellido
FROM A
LEFT JOIN B ON A.ID = B.ID;

Que Muestra:
ID | Nombre | Apellido
1  | Ana    | Perez
2  | Luis   | Gomez
3  | Marta  | Lopez




*/