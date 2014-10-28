<?php

$hash = $link;

$link = 'https://disk.yandex.com/public/?hash='.$hash;

$vt_cache_key = $link;

$useragent = "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5";

$vt_cache = true;
if($vt_cache){
	$cache = apc_fetch($vt_cache_key,$susses);
	if ($susses){
		echo $cache;
		die();
	}
}

$useheader = "true";
$usehttpheader = "true";
$header = array(
    'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
);
$text = get_curl($link);

$pattern = "#Set-Cookie:\\s+(?<cookie>[^=]+=[^;]+)#m"; 
preg_match_all($pattern, $text, $matches); 
$ucookie = implode("; ", $matches['cookie']);
$pos = strpos($text, 'ckey":"');
if ($pos !== false) {
    $ckey = substr($text,$pos+7);
    $pos = strpos($ckey, '"');
    if ($pos !== false) {
        $ckey = substr($ckey,0,$pos);
        $header = array(
		'Accept: application/json, text/javascript, */*; q=0.01',
		"X-Requested-With: XMLHttpRequest"
	);
	$mpostfield = "_ckey=" . $ckey . "&_name=getLinkFileDownload&tld=com&hash=" . $hash;
	$mpost="true";
	$text = get_curl("https://disk.yandex.com/handlers.jsx");
	
	$pos = strpos($text, 'url":"');
	if ($pos !== false) {
		$link = substr($text,$pos+6);
		$pos = strpos($link, '"');
		if ($pos !== false) {
			$link = substr($link,0,$pos);
			$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$link.'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
			if ($dc_cache){
				apc_store( $dc_cache_key, $text, 900 );
			}
			if ($is_vi){
				apc_store( $cache_key , $text, 3600 );
			}
			die($text);
			
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
    }
}

?> 
