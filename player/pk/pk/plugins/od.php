<?php

$link=str_replace("%26","&",$link);

$fd_cache_key = $link;

$fd_cache = false;

if($fd_cache){
	$cache = apc_fetch($fd_cache_key,$susses);
	if ($susses){
		echo $cache;
		die();
	}
}

$ht = ":";
$ht = "tps".$ht."/";
$ht = "ht".$ht."/";
$cm = "co";
$cm = ".".$cm."m/";

//https://skyapi.onedrive.live.com/API/2/GetItems?id=eae19b0e6c8f63fd%21168&cid=eae19b0e6c8f63fd&group=0&qt=&ft=&sb=0&sd=0&gb=0%2C1%2C2&d=1&iabch=1&caller=unauth&path=1&si=0&ps=100&pi=5&m=es-AR&rset=skyweb&lct=1&authkey=%21AB4gIdQYeQ698ps&v=0.40294200531207025
//https://skyapi.onedrive.live.com/API/2/GetItems?group=0&qt=&ft=&sb=0&sd=0&gb=0&d=1&iabch=1&caller=&path=1&si=0&pi=5&m=de-DE&rset=skyweb&lct=1&v=0.9853249325176565" + data
$options = "group=0&qt=&ft=&sb=0&sd=0&gb=0&d=1&iabch=1&caller=&path=1&si=0&pi=5&m=de-DE&rset=skyweb&lct=1&v=0.9853249325176565";

$link = $ht . 'sk' . 'yapi.oned' . 'rive.l' . 'ive' . $cm . 'API/2/GetItems?'.$options.'&' . $link;

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
$pxtunnel ="";
$pxtype = "";
$pxport = "";
$pxip = "";
$sslverify = "true";
$nobody = "";

$referer = 'https://skyapi.onedrive.live.com/api/proxy?v=3';
$custheader = 'AppId: 1141147648';

function gc($url)
{
	global $useheader,$useragent,$referer,$autoreferer,$usehttpheader,$custheader,$ucookie,$encoding,$timeout,$follow,$mpost,$mpostfield,$pxtunnel,$pxtype,$pxport,$pxip,$sslverify,$nobody;
	$curl = curl_init();
	$header[0] = "Accept: application/json";
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
	if($pxtunnel=="true"){curl_setopt($curl, CURLOPT_HTTPPROXYTUNNEL, 1);}
	if($pxtype=="http"){curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_HTTP);}
	if($pxip=="socks5"){curl_setopt($curl, CURLOPT_PROXYTYPE, CURLPROXY_SOCKS5);}
	if($pxport!=""){curl_setopt($curl, CURLOPT_PROXYPORT, $pxport);}
	if($pxip!=""){curl_setopt($curl, CURLOPT_PROXY, $pxip);}
	if($nobody=="true"){curl_setopt($curl, CURLOPT_NOBODY, 1);}
	if($sslverify=="true"){
	curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
	curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2);
	}

	$result = curl_exec($curl);
	curl_close($curl);
	return $result;
}

$text = gc($link);

$pos = strpos($text, '"download":"');
if ($pos !== false) {
    $text = substr($text,$pos+12);
    $pos = strpos($text, '"');
    if ($pos !== false) {
        $text = substr( $text,0,$pos);
        $text = str_replace('\\/','/',$text);
        $text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$text.'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
        if ($fd_cache){
		apc_store( $fd_cache_key, $text, 900 );
	}
	if (isset($is_vi) && isset($cache_key)){
		if ($is_vi)
			apc_store( $cache_key , $text, 3600 );
	}
        die($text);
    }
}

?>