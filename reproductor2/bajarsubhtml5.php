<?php
	function convToUtf8($str){
		$enc = mb_detect_encoding($str,"UTF-8, ISO-8859-1, ISO-8859-15"); 
		if( $enc != "UTF-8" ){ 
			return  iconv($enc,"utf-8",$str); 
		}else{ 
			return $str; 
		}
	} 
    // Actualizado 10/02/2012
	header('Content-type: text/html; charset=iso-8859-1');
    // Parseamos 
	$subtitulo = $_SERVER['QUERY_STRING'];
    /* Ejemplo: 
     bajarsub.php?123456_ES
    */

    // Seguridad
    // > Que no pongan cualquier cosa
    if(strlen(preg_replace("/[a-zA-Z0-9\-_]/", "", $subtitulo)) != 0) { 
        header('Location: http://'.$_SERVER['SERVER_NAME']);
        exit;
    }
    // > Solo permitido si viene del host donde esta el archivo (o sea Tekilaz)
    //if(empty($_SERVER['HTTP_REFERER']) OR !(stripos($_SERVER['SERVER_NAME'], $_SERVER['HTTP_REFERER']) === false)) {
    /*
    if(!(stripos($_SERVER['SERVER_NAME'], $_SERVER['HTTP_REFERER']) === false)) {
        header('Location: http://'.$_SERVER['SERVER_NAME']);
        exit;
    }
    */
    
    $path_subs = '../files/sub/'; // Directorio donde se encuentran los subtitulos
    if (file_exists($path_subs . $subtitulo . '.srt')) {
        header('Content-Disposition: attachment; filename="' . $subtitulo . '.srt"');
        if(strstr($_SERVER["HTTP_USER_AGENT"],"MSIE")==false) {
            header("Content-Type: application/force-download"); // Fuerza la descarga
            header('Content-Description: File Transfer');
        } else {
            header('Content-Type: application/octet-stream');
        }
        echo convToUtf8( file_get_contents($path_subs . $subtitulo . '.srt') );
        //readfile($path_subs . $subtitulo . '.srt'); // Lee/desacarga el archivo de los subtitulos
    } else {
        header('Location: http://'.$_SERVER['HTTP_REFERER']); // Error, regresa a la ventana anterior
    }

?>
