<?php

header('Content-type: application/json');

//Descarto por ser un bot!
if (isset($_POST['sex']) && $_POST['sex'] !== '') {
    echo json_encode(array('enviado' => TRUE, 'trucho' => TRUE));
    die();
}

if (!isset($_POST['nombre']) || $_POST['nombre'] === '' || $_POST['email'] === '') {
    echo json_encode(array('enviado' => TRUE, 'trucho' => TRUE));
    die();
}


include_once 'class.phpmailer.php';

$nombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];



$cuerpo_email = "<h3>Nueva Consulta desde el Formulario Web</h3>
                    <p>Nombre: <b>{$nombre}</b> </p>                    
                    <p>Email: <b>{$email}</b></p>
                    <p>Telefono: <b>{$telefono}</b></p>
                    <p>Mensaje: <b>{$mensaje}</b></p>";


$mail = new PHPMailer;

$mail->IsSMTP();                           // tell the class to use SMTP

$mail->SMTPAuth = true;                  // enable SMTP authentication  
$mail->SMTPSecure = "tls";
$mail->Port = 587;                    // set the SMTP server port
$mail->Host = "smtp.gmail.com"; // SMTP server
$mail->Username = "formulario@worq.com.ar";     // SMTP server username
$mail->Password = "f0rmulario_de_worq_con_q";            // SMTP server password
// Enable encryption, 'ssl' also accepted

$mail->From = 'formulario@worq.com.ar';
$mail->FromName = 'Formulario de Contacto Web';
$mail->addAddress('contacto@proyectobeta.com.ar', 'Contacto');  // Add a recipient


$mail->addReplyTo('formulario@worq.com.ar', 'Form');

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Consulta Web';
$mail->Body = $cuerpo_email;

return false;

if (!$mail->send()) {

    echo json_encode(array('enviado' => FALSE, 'error-mailer' => $mail->ErrorInfo));
    exit;
}

echo json_encode(array('enviado' => TRUE));

exit;
?>
