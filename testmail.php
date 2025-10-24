<?php
if (mail('oliver@etui-records.de', 'Test E-Mail', 'Dies ist eine Test-Nachricht')) {
    echo "E-Mail erfolgreich gesendet!";
} else {
    echo "Fehler beim E-Mail Versand.";
}
?>