<?php
if ( isset($_REQUEST['url']) == FALSE ){
	die();
}

$log_active = FALSE; //Si es TRUE se guardara en apc todas las peticiones como IPsLog (tiempo de vida del log de 30 min luego de desactivarlo con FALSE). 


$IPs_VIZ = array("93.115.95.82"); //lista de IPs para mostrar videos resubidos
$viz_active = FALSE; //Mostrar el video recodificado con la publi a todas las ip de $IPs_VIZ
//Lista de links reencodeado con publi:
$viz = array(
"XXX_DELIVERY_MAN_XXX645034546145327032484777714548786e2f6d49666a586e54346e74646f7a4779486f516d533841524a4f395061624558657431464c772b6d306f614377583158483078686e52714232704f6e713673707732554e693042694a6d3369377379696c666f56586a6e43673771414d59444c662f7971763446572f635231484f2b484638613032326c5477426f4c50466b7976732f3848703772453267574832506e37376b6c554132353239494b36695730355a724f6b562b6c4266574343574b6e512b6a73316b6b3769745059514730627a315977773d3dpenc" => "data/entry/tiny/user/112290266711663367572/albumid/5988399644553430449/photoid/5988399643464105810?authkey=Gv1sRgCJS9zpvxpu3vMA&alt=jsonm"
);


$ips_only_publi = array("93.115.95.82"); //lista de IPs para mostrar solo publi
$only_publi_active = FALSE; //Mostrar solo el video de la publi a todas las ip de $ips_only_publi


$_SERVER['REMOTE_ADDR'] = isset($_SERVER["HTTP_CF_CONNECTING_IP"]) ? $_SERVER["HTTP_CF_CONNECTING_IP"] : $_SERVER["REMOTE_ADDR"];

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

function getallheadersCustom() { 
   $headers = ''; 
   foreach ($_SERVER as $name => $value) { 
       if (substr($name, 0, 5) == 'HTTP_'){ 
           $headers .= str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5))))) .' = '.$value." \t // \t "; 
       } 
   } 
   return $headers; 
}

$original_req = $_REQUEST['url'];
$link = $_REQUEST['url'];
function loguear($is_cache){
	global $link, $original_req, $log_active;
	if ($log_active){
		$cache_key2 = "IPsLog";
		$cache = apc_fetch($cache_key2,$susses);
		$link_log = $original_req;
		if ($original_req != $link)
			$link_log = $original_req . " -> " . $link;
		if ($is_cache)
			$link_log = "(from cache)" . $link_log;
		$add = "(IP: " . $_SERVER['REMOTE_ADDR'] . ") " . $link_log . "\n [header: " . getallheadersCustom() . "]";
		if ($susses){
			apc_store ( $cache_key2 , $cache . "\n\n" . $add, 1800 );
		}else{
			apc_store ( $cache_key2 , $add, 1800 );
		}
		$cache_key2 = "IPsLogExcel";
		$cache = apc_fetch($cache_key2,$susses);
		$add = $_SERVER['REMOTE_ADDR'] . "\t" . $original_req . "\t" . $link . "\t" . $_SERVER['HTTP_REFERER'] . "\n";
		if ($susses){
			apc_store ( $cache_key2 , $cache . $add, 1800 );
		}else{
			$add = "IP\tOriginal request\tRequest Procesado\tReferer\n" . $add;
			apc_store ( $cache_key2 , $add, 1800 );
		}
	}
}


if ($only_publi_active){
	//if ( in_array($_SERVER['REMOTE_ADDR'], $ips_only_publi) ){
if ( !isset($_SERVER['HTTP_REFERER']) || empty($_SERVER['HTTP_REFERER']) || $_SERVER['HTTP_REFERER'] == "http://yify.tv/" || in_array($_SERVER['REMOTE_ADDR'], $ips_only_publi) ){
		$link = "data/entry/tiny/user/112290266711663367572/albumid/5988399644553430449/photoid/5988399643464105810?authkey=Gv1sRgCJS9zpvxpu3vMA&alt=jsonm";
	}
}
if ($viz_active){
	if ( in_array($_SERVER['REMOTE_ADDR'], $IPs_VIZ) ){
		if ( isset($viz[$link]) ) {
			$link = $viz[$link];
		}
	}
}

$is_vi = false;
$cache_key = "pppp" . $link;
/*if ( ! isset($_SERVER['HTTP_REFERER']) || $_SERVER['HTTP_REFERER'] == "http://yify.tv" ){
	$cache = apc_fetch($cache_key,$susses);
	if ($susses){
		echo $cache;
		loguear(TRUE);
		die();
	}
	$is_vi = true;
}
*/

include("./../../config.php");
if ( ! startsWith($link,'https://picasaweb.google.com/') ){
	if (endsWith($link,"penc")){
		$link = Decrypt($link,$key);
	}
	if (startsWith($link,'doc_')){
		$link = substr($link,4);
		include("dc.php");
		exit();
	}else if(startsWith($link,'ynx_')){
		$link = substr($link,4);
		include("yx.php");
		exit();
	}else if(startsWith($link,'ynx2_')){
		$link = substr($link,4);
		include("yx2.php");
		exit();
	}else if(startsWith($link,'odr_')){
		$link = substr($link,4);
		include("od.php");
		exit();
	}else if(startsWith($link,'vtt_')){
		$link = substr($link,4);
		include("vt.php");
		exit();
	}else if(startsWith($link,'mdf_')){
		$link = trim(substr($link,4));
		
		$proxies = array();
		//$proxies[] ='http://localhost/reproductor2/pk/pk/plugins/mf3.php';
		//$proxies[] = 'http://mugler.info/mf3.php';
		$proxies[] = 'http://niter.tv/mf3.php';
		if (isset($_POST["type"])){
			$pos = strpos($_POST["type"], '.');
			if($pos===false)
				die();
			$idx = substr($_POST["type"],0,$pos);
			if ( count($proxies) < $idx )
				die("?");
			$proxy = $proxies[$idx];
			$_POST["type"] = substr($_POST["type"],$pos+1);
		}else{
			$idx = array_rand($proxies);
			$proxy = $proxies[$idx];
		}
		$usehttpheader = "true";
		$custheader = "X-Requested-With: XMLHttpRequest";
		if (isset($_POST["chall"]) && isset($_POST["res"])){
			$mpostfield = "type=".$_POST["type"]."&res=".$_POST["res"]."&chall=".$_POST["chall"]."&link=".$link;
		}else{
			$mpostfield = "link=".$link;
		}
		//$mpostfield = "debug=1&".$mpostfield;
		$mpost="true";
		$text = get_curl($proxy);
		
		//die($text);
		$text = str_replace('"captcha":','"captcha":'.$idx.'.',$text);
		$pos = strpos($text, '}]');
		if ($pos !== false) {
			$text = substr($text,0,$pos+2);
		}
		echo $text;
		//include("mf.php");
		exit();
	}else if(startsWith($link,'fdr_')){
		$link = substr($link,4);
		include("fd.php");
		exit();
	}else if(startsWith($link,'dir_')){
		$link = substr($link,4);
		$link = str_replace("%26","&",$link);
		echo '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$link.'","height":536,"width":1280,"type":"video/mpeg4","medium":"video"}]';
		exit();
	}else if(startsWith($link,'flv_')){
		$link = substr($link,4);
		$link = str_replace("%26","&",$link);
		echo '[{"url":"http://4.bp.blogspot.com/-csh-pGuVtOU/Um6LUwFsKMI/AAAAAAAAAOM/UoBgOWhutGA/s1600/background.png","height":215,"width":512,"type":"image/gif","medium":"image"},{"url":"'.$link.'","height":536,"width":1280,"type":"application/x-shockwave-flash","medium":"video"}]';
		exit();
	}else if(startsWith($link,'tmp_')){
		$link = substr($link,4);
		$link = str_replace("%26","&",$link);
		echo $link;
		exit();
	}
	$link = 'https://picasaweb.google.com/' . str_replace('%26','&',$link);
}else if (endsWith($link,"penc")){
     $pos = stripos($link, ".com/", 4) + 5;
     $link = substr($link,0,$pos).Decrypt(substr($link, $pos, -strlen("penc")),$key);
     $link = str_replace('%26','&',$link);
}

loguear(FALSE);

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
			if ($is_vi){
				apc_store( $cache_key , $text.']', 10800 );
			}
            #echo encAES($text.']');
            echo $text.']';
        }
    }
}

?> 