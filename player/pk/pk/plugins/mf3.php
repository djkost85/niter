<?php

if(empty($_REQUEST['link']))
	die();

$link = $_REQUEST['link'];

$config = 0;

$ht = ":";
$ht = "tp".$ht."/";
$ht = "ht".$ht."/";

$cm = "co";
$cm = ".".$cm."m/";

$w = "w";
$w = "w".$w."w.";

if ($config==0){
	$link = $ht . $w . 'media' . 'fire' . $cm . '?' . $link;
}else{
	$link = $ht . $w .' media' . 'fire' . $cm . 'watch/'.$link.'/';
}

$mf_cache_key = $link . "_" . $config;

$useheader = "true";
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


function gc($url)
{
	global $useheader,$useragent,$referer,$autoreferer,$usehttpheader,$custheader,$ucookie,$encoding,$timeout,$follow,$mpost,$mpostfield,$pxtunnel,$pxtype,$pxport,$pxip,$sslverify,$nobody;
	$curl = curl_init();
	//$header[0] = "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
	$header[0] = "Accept-Language: en-us,en;q=0.5";
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

if (isset($_POST["type"]) && isset($_POST["chall"]) && isset($_POST["res"])){
	$mpost="true";
	if($_POST["type"]=="2" || $_POST["type"]=="3"){
		$mpostfield = "recaptcha_challenge_field=".$_POST["chall"]."&recaptcha_response_field=".$_POST["res"];
	}else{
		$mpostfield = "adcopy_response=".$_POST["res"]."&adcopy_challenge=".$_POST["chall"];
	}
//echo $mpostfield."\n\n";
}
//echo $link;
$text = gc($link);
//echo $text;

if ($config==0){
	if (substr($text,0,12)=="HTTP/1.1 302"){
		if (preg_match("/location: (.*)/i", $text, $redirect)){
			#$text = '[{"url":"'.$ht.'4.bp.blogspot'.$cm.'-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.trim($redirect[1]).'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
			$text = '[{"url":"'.$ht.'4.bp.blogspot'.$cm.'-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.trim($link).'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
			die($text);
		}
	}
	$pos = strpos($text, 'challenge.noscript?k=');
	if ($pos !== false) {
		$text = substr($text,$pos+21);
		$pos = strpos($text, '"');
		if ($pos !== false) {
			$captcha_code = substr($text,0,$pos);
			$api = gc($ht."api.solvemedia".$cm."papi/_challenge.js?k=" . $captcha_code);
			$pos = strpos($api, '"chid"');
			if ($pos !== false) {
				$api = substr($api,$pos+7);
				$pos = strpos($api, '"');
				if ($pos !== false) {
					$captcha_code2 = substr($api,$pos+1);
					$pos = strpos($captcha_code2, '"');
					$captcha_code2 = substr($captcha_code2,0,$pos);
					//$im = file_get_contents($ht."api.solvemedia".$cm."papi/media?c=" . $captcha_code2);
					$usehttpheader = false;
					$useheader = "";
					$im = gc($ht."api.solvemedia".$cm."papi/media?c=" . $captcha_code2);
					$imdata = base64_encode($im);
					$captcha  = "data:image/gif;base64,".$imdata;
					echo '[{"captcha":1,"challenge":"'.$captcha_code2.'","imgsrc":"'.$captcha.'"}]';
					exit();
				}
				die("1capt3");
			}
			die("1capt2");
		}
		die("1capt");
	}
	$pos = strpos($text, 'recaptcha/api/noscript?k=');
	if ($pos !== false) {
		$text = substr($text,$pos+25);
		$pos = strpos($text, '"');
		if ($pos !== false) {
			$captcha_code = substr($text,0,$pos);
			echo '[{"captcha":3,"k":"'.$captcha_code.'"}]';
			exit();
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
			$offset = strpos($text, '.com/');
			$pos = strpos($text, '/', $offset+8);
			if ($pos !== false){
				$text = substr( $text,0,$pos+1) . "12345678901234/vid.pdf";
			}
			$text = '[{"url":"'.$ht.'4.bp.blogspot'.$cm.'-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$text.'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
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
		$status = gc($text."?exists=create&container=flv");
		if ( strpos($status, "<state>true") < 1 ){
		sleep(2);
		$status = gc($text."?exists=create&container=flv");
		if ( strpos(gc($text."?exists=create&container=flv"), "<state>true") < 1 )
		die('{"error":"Try later please","status","'.$status.'"}');
		}
		$text = $text."?container=flv";
		$text = '[{"url":"'.$ht.'4.bp.blogspot'.$cm.'-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$text.'","height":358,"width":854,"type":"application/x-shockwave-flash","medium":"video"}]';	
		die($text);
	}
	}
	die();
}

?>						