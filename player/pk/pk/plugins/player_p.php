<?php

include("./../../config.php");

function endsWith($haystack, $needle){
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }
    return (substr($haystack, -$length) === $needle);
}


function startsWith($haystack, $needle) {
    return substr($haystack, 0, strlen($needle)) === $needle;
}

$link = $_REQUEST['url'];
if ( ! startsWith($link,'https://picasaweb.google.com/') ){
$link = 'https://picasaweb.google.com/' . $link;
}
if (endsWith($link,"penc")){
     $pos = stripos($link, ".com/", 4) + 5;
     $link = substr($link,0,$pos).Decrypt(substr($link, $pos, -strlen("penc")),$key);
     $link = str_replace('%26','&',$link);
}


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

$text = get_curl($link);
$pos = strpos($link, "photoid/");
if ($pos!==false){
    $pos = $pos + 8;
    $fin = strpos($link, "?");
    $ID = substr($link,$pos,$fin-$pos);
}else{
    $pos = strpos($link, "#");
    $ID = substr($link,$pos+1);
}
//die($ID."<br>".$text);
$pos = strpos($text, '"gphoto$id":"'.$ID.'"');
if ($pos === false)
    $pos = strpos($text,'"'.$ID.'"},"gphoto');
//$pos = strpos($text, "#".$ID);
if ($pos !== false) {
    $text = substr( $text,$pos,5000);
    $pos = strpos($text, "content\":[")+9;
    if ($pos !== false) {
        $text = substr( $text,$pos,5000);
        $pos = strpos($text, "]");
        if ($pos !== false) {
            $text = substr( $text,0,$pos);
            echo $text.']';
        }
    }
}

?> 
