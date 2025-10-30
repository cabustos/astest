<?php
/*
API REST - Usuarios Recientes
-----------------------------
Endpoint:
  GET /usuarios/recientes

Descripción:
  Retorna los usuarios registrados en los últimos 30 días en formato JSON.
*/

header("Content-Type: application/json; charset=UTF-8");
require_once 'db_connection.php';

// Verificamos método HTTP
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  http_response_code(405);
  echo json_encode(["error" => "Método no permitido. Use GET."]);
  exit;
}

// Consulta SQL para obtener usuarios recientes
$sql = "SELECT id, nombre, email, fecha_registro
        FROM usuarios
        WHERE fecha_registro >= DATE_SUB(NOW(), INTERVAL 30 DAY)
        ORDER BY fecha_registro DESC";

$result = $conn->query($sql);

if (!$result) {
  http_response_code(500);
  echo json_encode(["error" => "Error al ejecutar la consulta."]);
  exit;
}

// Convertimos a array asociativo
$usuarios = [];
while ($row = $result->fetch_assoc()) {
  $usuarios[] = $row;
}

// Respuesta final
echo json_encode([
  "total" => count($usuarios),
  "usuarios" => $usuarios
], JSON_PRETTY_PRINT);

$conn->close();
?>
