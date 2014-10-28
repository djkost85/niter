<?php
if(!isset($_GET['dec'])){
	die();
}
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
$msg="";
if(isset($_POST['link'])){
 if(($_POST['password'] == "lalala321")){
	$perm = true;
	include("./../../config.php");
	$link = $_POST['link'];
	if ( startsWith($link,'url=') ){
		$link = substr($link,4);
	}
	if ( ! startsWith($link,'https://picasaweb.google.com/') ){
		$link = 'https://picasaweb.google.com/' . $link;
	}
	if (endsWith($link,"penc")){
		 $pos = stripos($link, ".com/", 4) + 5;
		 $link = substr($link,0,$pos).Decrypt(substr($link, $pos, -strlen("penc")),$key);
		 $link = str_replace('%26','&',$link);
	}else{
		die("No enc?");
	}
	$msg = "<a href='".$link."' target='_blank'>".$link."</a>";
 }else{
  $perm = false;
  $msg = "Error in pass!";
 }
}
?>
<html>
<head>
<title>(=</title>
<meta name="robots" content="noindex">
</head>
<body>
<?php
echo "<form method='post'>
Link: <input type='text' name='link' value='" . $_POST['link'] . "'/><br>
Password: <input type='password' name='password' maxlength='10' value='" . $_POST['password'] . "'/><br>
<input type='submit' value='Get' />
</form><br>";
echo $msg;
?>
</body>
</html>