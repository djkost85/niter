<?php

$hash = $link;

$link = 'https://disk.yandex.com/public/?hash='.$hash;

$dc_cache_key = '2_'.$link;

$useragent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:9.0) Gecko/20100101 Firefox/9.0";

$dc_cache = false;
if($dc_cache){
	$cache = apc_fetch($dc_cache_key,$susses);
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


//die($link);

$text = get_curl($link);
/*
$pattern = "#Set-Cookie:\\s+(?<cookie>[^=]+=[^;]+)#m"; 
preg_match_all($pattern, $text, $matches); 
$ucookie = implode("; ", $matches['cookie']);
*/
$pos = strpos($text, '"iframe":"');
if ($pos !== false) {
	$iframe_link = substr($text,$pos+10);
	$pos = strpos($iframe_link, '"');
	if ($pos !== false) {
		$iframe_link = 'https:' . str_replace("\\u0026","&",substr($iframe_link,0,$pos));
		$fin_link = substr($iframe_link,strpos($iframe_link,"&stream-id="));
		$referer = $link;
		$text_iframe = get_curl($iframe_link . '&lang=en');
		$format = 'mp4';
		//echo $text_iframe;
		$pos = strpos($text_iframe,$format.'&quot;:');
		//$pos = strpos($text_iframe,'mp4&quot;:');
		if ($pos !== false){
			$text_files = substr($text_iframe,$pos);
			$pos = strpos($text_files,'&quot;file&quot;:&quot;');
			if ($pos !== false){
				$text_files = substr($text_files,$pos+23);
				$pos = strpos($text_files,'&');
				if ($pos !== false){
					$file360 = substr($text_files,0,$pos);
				}
				$pos = strpos($text_files,'&quot;file&quot;:&quot;');
				if ($pos !== false){
					$text_files = substr($text_files,$pos+23);
					$pos = strpos($text_files,'&');
					if ($pos !== false){
						$file480 = substr($text_files,0,$pos);
					}
					/*$pos = strpos($text_files,'&quot;file&quot;:&quot;');
					if ($pos !== false){
						$text_files = substr($text_files,$pos+23);
						$pos = strpos($text_files,'&');
						if ($pos !== false){
							$file720 = substr($text_files,0,$pos);
						}
					}*/
				}
			}
		}		
		$dimensions = array();
		$dimensions["sq"] = array("width"=>866,"height"=>360);
		$dimensions["480p"] = array("width"=>1154,"height"=>480);
		//$dimensions["m450x334"] = array("width"=>450,"height"=>192);
		$dimensions["m450x334"] = array("width"=>450,"height"=>240);
		$dimensions["medium"] = array("width"=>1280,"height"=>544);
		
		$contentTypes = array('flv'=>'application/x-shockwave-flash','mp4'=>'video/mpeg4','ogv'=>'application/ogg','webm'=>'video/webm');
		
		$referer = $iframe_link;
		$pos = strpos($text_iframe, '&quot;token&quot;:&quot;');
		if ($pos !== false) {
			$text_iframe = substr($text_iframe,$pos+28);
			$pos = strpos($text_iframe,'/&quot;');
			if ($pos !== false) {
				$randomFloat = rand(0, 10000000000000000) / 10000000000000000;
				$token_link = "http://" . str_replace("\\","",substr($text_iframe,0,$pos-1)) . '?nc=' . $randomFloat;
				$token = get_curl($token_link);
				$pos = strpos($token,'<token>');
				if ($pos !== false) {
					$token = substr($token,$pos+7);
					$pos = strpos($token, '</token>');
					if ($pos !== false) {
						$token = substr($token,0,$pos);
						$pos = strpos($text_iframe, '&quot;video&quot;:&quot;');
						if ($pos !== false) {
							$text_iframe = substr($text_iframe,$pos+24);
							$pos = strpos($text_iframe,'&quot;');
							if ($pos !== false) {
								//$token_link = str_replace("get-film","get-location",str_replace("\\","",substr($text_iframe,0,$pos)) ) . 'sq.mp4?token=' . $token . '&ref=disk.yandex.com';
								$format = 'mp4';
								$sources = '';
								$stream_link = str_replace("\\","",substr($text_iframe,0,$pos));
								if (empty($file480)){
									$token_link =  $stream_link . $file360 .'.'.$format.'?token=' . $token . '&ref=disk.yandex.com';
									$nobody = "true";
									$useheader = "true";
									$text = get_curl($token_link);
									$pos = strpos($text, 'ocation');
									if ($pos !== false) {
										$text = substr($text,$pos + 9);
										$pos = strpos($text, PHP_EOL);
										$text = substr($text,0,$pos-1) . str_replace("%3B",";",$fin_link).'&edrive.com';
									}else{
										$nobody = "";
										$useheader = "";
										$text = get_curl($token_link);
										$pos = strpos($text, '<video-location>');
										if ($pos !== false) {
											$text = substr($text,$pos+16);
											$pos = strpos($text, '</video-location>');
											if ($pos !== false) {
												$text = str_replace("amp;","",substr($text,0,$pos)).str_replace("%3B",";",$fin_link).'&edrive.com';
											}
										}
									}
									//$text = $token_link;
									if (array_key_exists($file360, $dimensions)){
										$sources .= '{"url":"'.$text.'","height":'.$dimensions[$file360]['height'].',"width":'.$dimensions[$file360]['width'].',"type":"'.$contentTypes[$format].'","medium":"video"}';
									}else{
										$sources .= '{"url":"'.$text.'","height":360,"width":866,"type":"'.$contentTypes[$format].'","medium":"video"}';
									}
								}else{
									//$format = 'flv';
									$token_link = $stream_link . $file480 .'.'.$format.'?token=' . $token . '&ref=disk.yandex.com';
									$nobody = "true";
									$useheader = "true";
									$text = get_curl($token_link);
									$pos = strpos($text, 'ocation');
									if ($pos !== false) {
										$text = substr($text,$pos + 9);
										$pos = strpos($text, PHP_EOL);
										$text = substr($text,0,$pos-1) . str_replace("%3B",";",$fin_link).'&edrive.com';
									}else{
										$token_link = str_replace("get-film","get-location",$token_link);
										$nobody = "";
										$useheader = "";
										$text = get_curl($token_link);
										$pos = strpos($text, '<video-location>');
										if ($pos !== false) {
											$text = substr($text,$pos+16);
											$pos = strpos($text, '</video-location>');
											if ($pos !== false) {
												$text = str_replace("amp;","",substr($text,0,$pos)).str_replace("%3B",";",$fin_link).'&edrive.com';
											}
										}
									}
									//$text = $token_link;
									if (array_key_exists($file480, $dimensions)){
										$sources .= '{"url":"'.$text.'","height":'.$dimensions[$file480]['height'].',"width":'.$dimensions[$file480]['width'].',"type":"'.$contentTypes[$format].'","medium":"video"}';
									}else{
										$sources .= ',{"url":"'.$text.'","height":360,"width":866,"type":"'.$contentTypes[$format].'","medium":"video"}';
									}
									
								}
								
								$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},'.$sources.']';
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
			}
		}
	}
}else{

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
				/*$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$link.'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
				if ($dc_cache){
					apc_store( $dc_cache_key, $text, 900 );
				}
				if ($is_vi){
					apc_store( $cache_key , $text, 3600 );
				}
				die($text);
				*/
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

}

?> 
