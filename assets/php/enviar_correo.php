<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $email = htmlspecialchars(trim($_POST['email']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    $to = "christianjhonuncp01@gmail.com"; // Cambia esta dirección por tu email
    $subject = "Nuevo mensaje del formulario de contacto";
    
    // Cuerpo del mensaje
    $body = "Nombre: $nombre\n";
    $body .= "Email: $email\n\n";
    $body .= "Mensaje:\n$mensaje";

    // Cabeceras
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Error al enviar el correo.";
    }
}
?>
