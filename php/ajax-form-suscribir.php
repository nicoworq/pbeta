<?php

header('Content-type: application/json');

//Descarto por ser un bot!
if (isset($_POST['sex']) && $_POST['sex'] !== '') {
    echo json_encode(array('enviado' => TRUE, 'trucho' => TRUE));
    die();
}

if (!isset($_POST['email_visitante']) || $_POST['email_visitante'] === '') {
    echo json_encode(array('enviado' => TRUE, 'trucho' => TRUE));
    die();
}


include_once 'class.phpmailer.php';


$email = $_POST['email_visitante'];



$cuerpo_email = "<h3>Nueva Suscripcion a newsletter</h3>
                                   
                    <p>Email: <b>{$email}</b></p>
                  ";


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

$mail->Subject = 'Suscripcion Newsletter desde Web';
$mail->Body = $cuerpo_email;


if (!$mail->send()) {

    echo json_encode(array('enviado' => FALSE, 'error-mailer' => $mail->ErrorInfo));
    exit;
}

echo json_encode(array('enviado' => TRUE));

exit;
?>
