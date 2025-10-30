<?php
require_once 'config.php';

// Conexión usando mysqli con control de errores
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($conn->connect_error) {
  http_response_code(500);
  die(json_encode([
    "error" => "Error de conexión a la base de datos: " . $conn->connect_error
  ]));
}

$conn->set_charset("utf8");
?>
