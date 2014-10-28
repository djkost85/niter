<?php

    // Actualizado 10/02/2012

    // Parseamos la URL del Captcha
	$captcha_code = $_SERVER['QUERY_STRING'];
    /* Ejemplo: 
     vercaptcha.php?image?c=03AHJ_VustzBcmVbnGYffgCNg6X4OwApkuOBqcJfSnBJUAlrAyJFb3CJOj93kY1sgphPQf4BZu0xfuMRj8UFT9KmF-9s8esFah_VwYdR6HcpebMpDO9FSjqlMAMSXNMcZ9otdUinU7FGopbb8XJGVqhkp1xeQKu2mwTA
    */

    // Seguridad
    // > Que no pongan cualquier cosa
    if(strlen(preg_replace("/[a-zA-Z0-9\-_?=&%]/", "", $captcha_code)) != 0) { 
        header('Location: http://'.$_SERVER['SERVER_NAME']);
        exit;
    }
   
    // > Solo permitido si viene del host donde esta el archivo
    if( !empty($_SERVER['HTTP_REFERER']) && stripos( $_SERVER['HTTP_REFERER'], $_SERVER['SERVER_NAME']) === false) {
        header('Location: http://'.$_SERVER['SERVER_NAME']);
        exit;
    }
    // Armamos la cabecera de la petición (¡Sin REFERENCIA!)
    $header = "Host: www.google.com\r\n";
    $header .= "User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.46 Safari/535.11\r\n";
    //$header .= "Content-Type: application/x-www-form-urlencoded\r\n";
    $header .= "Connection: close\r\n\r\n";

    $fp = fsockopen("www.google.com",80, $errno, $errstr); // Nos conectamos a Google
    if (!$fp) {
        echo "$errstr ($errno)<br/>\n"; // Mostramos los errores, si hay.
        echo $fp;
    } else {
        fputs($fp, "GET /recaptcha/api/challenge?" . $captcha_code . " HTTP/1.1\r\n"); 
        fputs($fp, $header);
        fwrite($fp, $out); // Enviamos la petición
        do {
            $header_ret .= fgets($fp, 128);
        } while (strpos($header_ret, "\r\n\r\n") === false); // Primero retiramos la cabecera
        //header('Content-Type: image/jpeg');
        //header('Cache-Control: public, max-age=600');
        //header('X-Content-Type-Options: nosniff');
        //header('X-XSS-Protection: 1; mode=block'); // Creamos una "replica" de la cabecera de Google
        while (!feof($fp)){
            echo fgets($fp, 128); // Cargamos la imagen del Captcha
        }
        fclose($fp); // Cerramos la conexión con Google
    }

?>
