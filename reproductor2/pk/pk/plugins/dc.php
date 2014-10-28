<?php

if ( ! startsWith($link,'https://docs.google.com/') ){
	$link = 'https://docs.google.com/uc?export=download&id=' . $link;
}
$dc_cache_key = $link;

$useheader = "";
$useragent = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:13.0) Gecko/20100101 Firefox/13.0";
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
function get_curl($url)
{
	global $useheader,$useragent,$referer,$autoreferer,$usehttpheader,$custheader,$ucookie,$encoding,$timeout,$follow,$mpost,$mpostfield,$proxytunnel,$proxytype,$proxyport,$proxyip,$sslverify,$nobody;
	$curl = curl_init();
	$header[0] = "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
	$header[] = "Accept-Language: en-us,en;q=0.5";
	$header[] = "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7";
	$header[] = "Keep-Alive: 115";
	$header[] = "Connection: keep-alive";
	if($custheader!=""){$header[] = $custheader;}
	
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
	if($useheader=="true"){curl_setopt($curl, CURLOPT_HEADER, 1);}
	if($useragent!=""){curl_setopt($curl, CURLOPT_USERAGENT, $useragent);}
	if($usehttpheader=="true"){curl_setopt($curl, CURLOPT_HTTPHEADER, $header);}
	if($ucookie!=""){curl_setopt($curl, CURLOPT_COOKIE, str_replace('\\"','"',$ucookie));}
	if($referer!=""){curl_setopt($curl, CURLOPT_REFERER, $referer);}
	if($autoreferer=="true"){curl_setopt($curl, CURLOPT_AUTOREFERER, 1);}
	if($encoding!=""){curl_setopt($curl, CURLOPT_ENCODING, $encoding);}
	if($timeout!=""){curl_setopt($curl, CURLOPT_TIMEOUT, $timeout);}
	if($follow=="true"){curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);}
	if($mpost=="true"){curl_setopt($curl, CURLOPT_POST, 1);}
	if($mpostfield!=""){curl_setopt($curl, CURLOPT_POSTFIELDS, $mpostfield);}
	if($proxytunnel=="true"){curl_setopt($curl, CURLOPT_HTTPPROXYTUNNEL, 1);}
	if($proxytype=="http"){curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);}
	if($proxyip=="socks5"){curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS5);}
	if($proxyport!=""){curl_setopt($curl, CURLOPT_PROXYPORT, $proxyport);}
	if($proxyip!=""){curl_setopt($curl, CURLOPT_PROXY, $proxyip);}
	if($nobody=="true"){curl_setopt($curl, CURLOPT_NOBODY, 1);}
	if($sslverify=="true"){
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); 
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
	}

	$result = curl_exec($curl);
	curl_close($curl);
	return $result;
}
endif;

$dc_cache = true;
if($dc_cache){
	$cache = apc_fetch($dc_cache_key,$susses);
	if ($susses){
		echo $cache;
		die();
	}
}

$useheader = "true";
$text = get_curl($link);
$pattern = "#Set-Cookie:\\s+(?<cookie>[^=]+=[^;]+)#m"; 
preg_match_all($pattern, $text, $matches); 
$ucookie = implode("; ", $matches['cookie']);
$pos = strpos($text, '&amp;confirm=');
if ($pos !== false) {
    $text = substr($text,$pos+13);
    $pos = strpos($text, '&');
    if ($pos !== false) {
        $text = substr( $text,0,$pos);
	$link = $link . "&confirm=" . $text;
	$nobody = "true";
	$useheader = "true";
	$text = get_curl($link);
	$pos = strpos($text, 'ocation') + 9;
	$text = substr($text,$pos);
	$pos = strpos($text, PHP_EOL);
	$text = substr($text,0,$pos-1);
	$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$text.'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
	if ($dc_cache){
		apc_store( $dc_cache_key, $text, 900 );
	}
	if ($is_vi){
		apc_store( $cache_key , $text, 3600 );
	}
        die($text);
    }
}



?> 
