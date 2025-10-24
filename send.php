<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// E-Mail-Adresse, an die gesendet werden soll
$to = "oliver@etui-records.de";  // ← HIER deine eigene E-Mail-Adresse eintragen

// Prüfen, ob Formular abgeschickt wurde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formulardaten sammeln und absichern
    $subject = strip_tags($_POST["subject"]);
    $name = strip_tags($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = strip_tags($_POST["yourmessage"]);

    // Betreffzeile für die E-Mail
    $mailSubject = "Neue Nachricht über Kontaktformular: " . ($subject ?: "Kein Betreff");

    // Inhalt der E-Mail
    $mailBody = "Neue Nachricht von deiner Website:\n\n";
    $mailBody .= "Name: $name\n";
    $mailBody .= "E-Mail: $email\n";
    $mailBody .= "Thema: $subject\n";
    $mailBody .= "Nachricht:\n$message\n";

    // E-Mail-Header
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


    // E-Mail senden
    if (mail($to, $mailSubject, $mailBody, $headers)) {

           header("Location: contact.html?success=1#contact-form");
exit;


    } else {
        echo "<p>Fehler: Nachricht konnte nicht gesendet werden.</p>";
    }
} else {
    echo "<p>Ungültiger Zugriff.</p>";
}

?>