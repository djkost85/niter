<?php

$link = $_REQUEST['url'];

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
    $ID = substr($link,$pos);
    $fin = strpos($link, "?")-1;
    if ($fin!==false){
        $ID = substr($link,0,$fin);
     }
    $fin = strpos($link, "/")-1;
    if ($fin!==false){
        $ID = substr($link,0,$fin);
     }
}else{
    $pos = strpos($link, "#");
    if ($pos!==false){
        $ID = substr($link,$pos+1);
    }else{
        $ID = 0;
        $pos = strpos($link, "/photo/");
        if ( $pos !== false ){
             $pos = $pos + 7;
             $ID2 = substr($link,$pos);
             $fin = strpos($link, "?") - 1;
             if ($fin!==false){
                $ID2 = substr($link,0,$fin);
             }
             $fin = strpos($link, "/")-1;
             if ($fin!==false){
                $ID2 = substr($link,0,$fin);
             }
        }else{
        #https://plus.google.com/photos/103188752499862273980/albums/5924470511693280001/5924470517190767058?banner=pwa&pid=5924470517190767058&oid=103188752499862273980
        #https://picasaweb.google.com/data/feed/tiny/user/103188752499862273980/albumid/5924470511693280001/photoid/5924470517190767058?alt=json&urlredir=1
        	$ID2 = 0;
		    $pos = strpos($link, "pid=");
		    if ( $pos !== false ){
		         $pos = $pos + 4;
		         $ID2 = substr($link,$pos);
		         $fin = strpos($ID2, "&");
		         if ($fin!==false)
		            $ID2 = substr($ID2,0,$fin);
		         $fin = strpos($ID2, "/");
		         if ($fin!==false)
		            $ID2 = substr($ID2,0,$fin);
            }
        	$pos = strpos($link, "/photos/");
        	$user = "";
		    if ( $pos !== false ){
		         $pos = $pos + 8;
		         $user = substr($link,$pos);
		         $fin = strpos($user, "?");
		         if ($fin!==false)
		            $user = substr($user,0,$fin);
		         $fin = strpos($user, "/");
		         if ($fin!==false)
		            $user = substr($user,0,$fin);
            }
            $pos = strpos($link, "/albums/");
            $album = 0;
		    if ( $pos !== false ){
		         $pos = $pos + 8;
		         $album = substr($link,$pos);
		         $fin = strpos($album, "?") - 1;
		         if ($fin!==false)
		            $album = substr($album,0,$fin);
		         $fin = strpos($album, "/");
		         if ($ID2==0 and $fin!==false){
		         	$fin2 = strpos($album, "?");
		         	$ID2 = substr($album,$fin,$fin2-$fin);
		         }
		         if ($fin!==false)
		            $album = substr($album,0,$fin);
            }
            die( 'https://picasaweb.google.com/data/feed/tiny/user/'.$user.'/albumid/'.$album.'/photoid/'.$ID2.'?alt=json');
        }
    }
}

if ($ID!=0){
    $pos = strpos($text, "#".$ID);
    if ($pos !== false) {
        $text = substr( $text,$pos,5000);
        $pos = strpos($text,'"application/atom+xml"');
        if ($pos!==false){
            $text = substr($text,$pos);
        }
        $pos = strpos($text,'"href":"');
        if ($pos!==false){
            $text = substr($text,$pos+8);
        }
        $pos = strpos($text,'"');
        if ($pos!==false){
            $text = substr($text,0,$pos);
        }
        $text = str_replace("&amp;","&",$text);
        if (strpos($text,'?') !== false){
       	 	die($text."&alt=jsonm");
       	}else{
       		die($text."?alt=jsonm");
       	}
    }
    
    $text = str_replace("picasaweb.google.com/home?upload","",$text);
    $pos = strpos($text, "//picasaweb.google.com/");
    $text = substr( $text,$pos,1000);
    $pos = strpos($text, "'");
    if ($pos!==false){
        $text = substr( $text,0,$pos);
    }
    $pos = strpos($text, "\"");
    if ($pos!==false){
        $text = substr( $text,0,$pos);
    }
    $text = str_replace("&amp;","&",$text);
    die("https:".$text);
}else{
    $pos = strpos($text, '"gd$kind"');
    if ($pos!==false){
        $text = substr($text,$pos);
    }
    $pos = strpos($text,'"application/atom+xml"');
    if ($pos!==false){
        $text = substr($text,$pos);
    }
    $pos = strpos($text,'"href":"');
    if ($pos!==false){
        $text = substr($text,$pos+8);
    }
    $pos = strpos($text,'"');
    if ($pos!==false){
        $text = substr($text,0,$pos);
    }
    $text = str_replace("&amp;","&",$text);
    die($text);
}


?> 
