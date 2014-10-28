<?php

$link = 'http://m.firedrive.com/file/' . $link;

$config = 0;

$fd_cache_key = $link . "_" . $config;

$useheader = "";
$useragent = "Mozilla/5.0 (Linux; U; Android 2.2; en-gb; GT-P1000 Build/FROYO) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1";
$referer = "";
$autoreferer = "";
$usehttpheader = true;
$custheader = "";
$ucookie = "";
$encoding = "";
$timeout = "";
$follow = "";
$mpost = "";
$mpostfield = "";
$proxytunnel ="";
$proxytype = "";
$proxyport = "";
$proxyip = "";
$sslverify = "true";
$nobody = "";

if ( ! function_exists( 'get_curl' ) ):
	die();
endif;

$fd_cache = false;
if($fd_cache){
	$cache = apc_fetch($fd_cache_key,$susses);
	if ($susses){
		echo $cache;
		die();
	}
}

$text = get_curl($link);
$pos = strpos($text, 'dl.firedrive.com/?key=');
if ($pos !== false) {
    $text = substr($text,$pos+22);
    $pos = strpos($text, '"');
    if ($pos !== false) {
        $text = substr( $text,0,$pos);	
	if ($config == 0){
		$link = "http://dl.firedrive.com/?stream=" . $text;
		$nobody = "true";
		$useheader = "true";
		$text = get_curl($link);
		$pos = strpos($text, 'ocation') + 9;
		$text = substr($text,$pos);
		$pos = strpos($text, PHP_EOL);
		$linkflv = substr($text,0,$pos-1);
		$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$linkflv.'","height":358,"width":854,"type":"application/x-shockwave-flash","medium":"video"}]';
	}else if($config==1){
		$link = "http://dl.firedrive.com/?mobile=" . $text;
		$nobody = "true";
		$useheader = "true";
		$text = get_curl($link);
		$pos = strpos($text, 'ocation') + 9;
		$text = substr($text,$pos);
		$pos = strpos($text, PHP_EOL);
		$linkmobile = substr($text,0,$pos-1);
		$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$linkmobile.'","height":268,"width":640,"type":"video/mpeg4","medium":"video"}]';
	}else if($config==2){
		$link = "http://dl.firedrive.com/?key=" . $text;
		$nobody = "true";
		$useheader = "true";
		$text = get_curl($link);
		$pos = strpos($text, 'ocation') + 9;
		$text = substr($text,$pos);
		$pos = strpos($text, PHP_EOL);
		$linkmobile = substr($text,0,$pos-1);
		$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$linkmobile.'","height":268,"width":640,"type":"video/mpeg4","medium":"video"}]';
	}
	if ($fd_cache){
		apc_store( $fd_cache_key, $text, 900 );
	}
	if ($is_vi){
		apc_store( $cache_key , $text, 3600 );
	}
        die($text);
    }
}

?> 
