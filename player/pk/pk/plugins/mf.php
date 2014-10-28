<?php
if(empty($link))
	die();
	
$config = 0;

if ($config==0){
	$link = 'http://www.mediafire.com/?' . $link;
}else{
	$link = 'http://www.mediafire.com/watch/'.$link.'/';
}

$mf_cache_key = $link . "_" . $config;

$useheader = "";
$useragent = "Nokia 7110/1.0";
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
/*
$proxytunnel ="1";
$proxytype = "socks5";
$proxyport = "1080";
$proxyip = "58.246.179.82";
*/
$proxytunnel ="";
$proxytype = "";
$proxyport = "";
$proxyip = "";
$sslverify = "true";
$nobody = "";


if ( ! function_exists( 'get_curl' ) ):
	die();
endif;

$mf_cache = false;
if($mf_cache){
	$cache = apc_fetch($mf_cache_key,$susses);
	if ($susses){
		echo $cache;
		die();
	}
}

if (isset($_POST["chall"]) && isset($_POST["res"])){
	$mpost="true";
	$mpostfield = "adcopy_response=".$_POST["res"]."&adcopy_challenge=".$_POST["chall"];
	$text = get_curl($link);
}else{
	$follow="true";
	$text = get_curl($link);
}

if ($config==0){
	$pos = strpos($text, 'challenge.noscript?k=');
	if ($pos !== false) {
		$text = substr($text,$pos+21);
		$pos = strpos($text, '"');
		if ($pos !== false) {
			$captcha_code = substr($text,0,$pos);
			$api = file_get_contents("http://api.solvemedia.com/papi/_challenge.js?k=" . $captcha_code);
			$pos = strpos($api, '"chid"');
			if ($pos !== false) {
				$api = substr($api,$pos+7);
				$pos = strpos($api, '"');
				if ($pos !== false) {
					$captcha_code2 = substr($api,$pos+1);
					$pos = strpos($captcha_code2, '"');
					$captcha_code2 = substr($captcha_code2,0,$pos);
					$im = file_get_contents("http://api.solvemedia.com/papi/media?c=" . $captcha_code2);
					$imdata = base64_encode($im);
					$captcha  = "data:image/gif;base64,".$imdata;
					echo '[{"captcha":1,"challenge":"'.$captcha_code2.'","imgsrc":"'.$captcha.'"}]';
					exit();
				}
				die("capt3");
			}
			die("capt2");
		}
		die("capt");
	}
	$pos = strpos($text, '"DLP_mOnDownload(this)');
	if ($pos !== false) {
		$ini = 0;
		if ($pos>700)
			$ini = $pos - 700;
		$text = substr($text,$ini,$pos-$ini);
		$pos = strrpos($text, 'href="http');
		if ($pos !== false) {
			$pos=$pos+6;
			$fin = strpos($text, '"', $pos);
			$text = substr( $text,$pos,$fin-$pos);
			$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$text.'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
			if ($mf_cache){
				apc_store( $mf_cache_key, $text, 900 );
			}
			if ($is_vi){
				apc_store( $cache_key , $text, 3600 );
			}
			die($text);
		}
	}
	die("nada");
}else{
	//link de watch
	$pos = strpos($text, 'sDownloadLink":"');
	if ($pos !== false) {
	$text = substr($text,$pos+16);
	$pos = strpos($text, '"');
	if ($pos !== false) {
		$fin = strpos($text, '"', $pos);
		$text = substr($text,0,$fin);
		$status = get_curl($text."?exists=create&container=flv");
		if ( strpos($status, "<state>true") < 1 ){
		sleep(2);
		$status = get_curl($text."?exists=create&container=flv");
		if ( strpos(get_curl($text."?exists=create&container=flv"), "<state>true") < 1 )
		die('{"error":"Try later please","status","'.$status.'"}');
		}
		$text = $text."?container=flv";
		$text = '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$text.'","height":358,"width":854,"type":"application/x-shockwave-flash","medium":"video"}]';	
		if ($mf_cache){
			apc_store( $mf_cache_key, $text, 900 );
		}
		if ($is_vi){
			apc_store( $cache_key , $text, 3600 );
		}
		die($text);
	}
	}
	die();
}

////// sDownloadLink":"http://transcode1.mediafire.com/9f4e1s6625cg/8j6yl6gbjyzz6of/8e85/089.pdf"
//http://transcode1.mediafire.com/6oom15vax6xg/8j6yl6gbjyzz6of/8e85/089.pdf?container=flv
//http://transcode1.mediafire.com/6oom15vax6xg/8j6yl6gbjyzz6of/8e85/089.pdf?exists=create&container=flv

?>