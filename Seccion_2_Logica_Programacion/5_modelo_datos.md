
### **Para un modelo de datos pueden haber dos posibles soluciones segun el tipo de Base de Datos que se usa**

1. SQL

Puntos_Gestion

- id_punto - Int Incremental
- nombre_puesto - String
- latitud - decimal
- longitud - decimal
- direccion - String 
- tipo - String

Visitas

- id_visita - Int Incremenal
- id_punto - Int 
- fecha_visita - Date
- hora_inicio - Time
- hora_fin - Time
- observaciones - String


2. NoSQL

Ejemplo de documento para NoSQL (ej. MongoDB):

```json
{
  "_id": "101",
  "fecha_visita": "2025-10-30",
  "hora_inicio": "08:15",
  "hora_fin": "09:00",
  "punto": {
    "id_punto": 1,
    "nombre": "Planta Norte",
    "ubicacion": { "type": "Point", "coordinates": [-76.523, 3.456] },
    "tipo": "Planta"
  },
  "observaciones": "Revisión general"
}
```


