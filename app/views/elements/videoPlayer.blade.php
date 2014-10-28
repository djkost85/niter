<div class="videoPlayer" style="background-color: rgba(24, 24, 24, 0.70);">
	<div class='border-radius-player'>
		<div id="allplayers" style="position:relative;width:100%;height:100%;overflow: hidden;">
	        <div id="box">
	        	<div class="todo" id="playerSWF" name="playerSWF" style="display:block;">
	            	<object id="swfAP2" name="swfAP2" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="float:left;width:100%;height:100%;">
	                    <param name="wmode" value="opaque">
	                    <param name="movie" value="../player/player.swf?videoid=2314">
	                    <object type="application/x-shockwave-flash" data="../player/player.swf?videoid=2314" style="float:left;width:100%;height:100%;" wmode="transparent" id="swfAP3" name="swfAP3" >
	                        <div style="position:relative;width: 100%;">
	                            <div id="backimage" style="width: 100%;height: 100%;z-index:0;background-repeat:no-repeat;background-position: center center;display:inline-block;"></div>     
	                            <img src="../player/images/playIcon.png" onclick="reproducir()">

	                        </div>
	                    </object>
	                </object>
	        	</div>
	       		<div class="todo" id="nosources centered" >
	                <div class="seccion_tit">No sources</div>
	                <img src="../player/images/nosource.png" style="padding:15px;cursor:default;"/>
	                <p>Sorry, no indexed sources for this title at this time.</p>
	        	</div>
	        	<iframe class="todo" id="playeriframe">
		        </iframe>
		        <div id='waitlink' class="todo centered" style="top:50%;margin-top:-18px;">
		                <div id='fadingBarsG'><div id='fadingBarsG_1' class='fadingBarsG'></div><div id='fadingBarsG_2' class='fadingBarsG'></div><div id='fadingBarsG_3' class='fadingBarsG'></div><div id='fadingBarsG_4' class='fadingBarsG'></div><div id='fadingBarsG_5' class='fadingBarsG'></div><div id='fadingBarsG_6' class='fadingBarsG'></div><div id='fadingBarsG_7' class='fadingBarsG'></div><div id='fadingBarsG_8' class='fadingBarsG'></div></div>
		        </div>
		        <div id="error" class="todo centered">
		                <span class="fileError">The video is temporarily idle, wait a few minutes and try again.<br /><br />You can also try one of the other available servers.</span><br/><br/>
		        </div>
		        <div id="errorborrado" class="todo centered">
		                <span class="fileError">The video is not accessible, maybe it was already deleted or are downloading another file from the same server. <br /><br />You can try one of the other available servers.</span><br/ ><br/ >
		        </div>
		        <div id="wait" class="todo centered">
	                <div style="text-align:center;color:white;">
	                	<br />
	                	<br />
	                    <br />
	                    <br />
	                    <br />
	                    <strong>Loading video...
	                        <br>
	                        <br>
	                        <span>
	                        If this message appears more than 60 seconds, you may need to install the required Java plug-in. You can do this from <a href="http://www.java.com/en/" target="_blank">HERE</a>
	                        <br>
	                        <br>                        	
	                        <br>
	                        </span>
	                    </strong>
	                </div>
	        	</div>
	        	<div id="waitswf" class="todo centered">
	                <div style="text-align:center;color:white;">
	                    <br />
	                    <br /><br />
	                    <strong>
		                    Loading video...
		                    <br>
		                    <br>
		                    <span>
		                    	If this message appears more than 60 seconds, you may need to install the required Flash Player plug-in. You can do this from <a href="http://get.adobe.com/en/flashplayer/?no_redirect" target="_blank">HERE</a>
		                    	<br>
		                    	<br>                    		
		                    	<br>
		                    </span>
	                    </strong>
	                </div>
	        	</div>
	        	<div id="cuenta" class="todo centered" style='margin-top:50px;'></div>
	        	<div id="captchaForm" class="todo centered">
	                <div id="formText">
	                    Complete the following code&nbsp;&nbsp;
	                </div>
	                <img id="captchaImg" src=""></img><br />
	                <input type="text" name="captchaResponse" id="captchaResponse"><br />
	                <input type="button" id="submitCaptcha" value="Send" />
	        	</div>
	        	<div id="captchaForm3" class="todo centered">
	                <div id="formText3">
	                    Complete the following code&nbsp;&nbsp;
	                </div>
	                <img id="captchaImg3" src=""></img><br />
	                <input type="text" name="captchaResponse3" id="captchaResponse3"><br />
	                <input type="button" id="submitCaptcha3" value="Send" />
	        	</div>
	        	<div id='captchaFormS' class="todo centered" style="text-align: center; top: 20px;"></div>
	        	<div id="player_content" class="todo" style="text-align: center;">
	                <div id="player" style="width:100%;">
	                    <div id="flashplayer" style="position:absolute;top:0px;left:0px"></div>
	                </div>
	        	</div>
	        </div>
	        <div id="applet"></div>
	        <div style="clear:both;"></div>
		</div>
	</div>
	<div class='border-radius-mirrors'>
		<p>
	  	</p>
	</div>
	
<div id='videoParameter' class='invisible'><?php
function strToHex($string){
    $hex = '';
    for ($i = 0; $i < strlen($string); $i++) {
        $hex .= dechex(ord($string[$i]));
    }
    return $hex;
}
function Encrypt($sValue, $sSecretKey){
    return strToHex(rtrim(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, $sSecretKey, $sValue, MCRYPT_MODE_ECB, mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_256, MCRYPT_MODE_ECB), MCRYPT_RAND))), "\0"));
}
function transformar2($links_sources){
	$params = explode("&", $links_sources);
	for ($i = 0; $i < count($params); $i++) {
		$param = explode("=", $params[$i], 2);
		if ($param[0] == 'pic') {
			$param[1] = Encrypt($param[1], "s4r34fFS4324ffaL");
			$params[$i] = $param[0] . '=' . $param[1] . 'penc';
		}

	}
	return implode("&", $params);
}
echo transformar2($data->getVideo());
?></div>
</div>