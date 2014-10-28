<html>
<head>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/player.css?v=1.1.1">
</head>
<body>

<script src="/reproductor2/jwplayer/jwplayer/jwplayer.js"></script> 
<script type="text/javascript">jwplayer.key="4284NkInM2Jp3ew7DYEQ/z2jBHBT6cbIKDdhlDeO3+QXn+3iL67Xej9wEIM5hoXW";</script>

<script src="/reproductor2/funciones.min.js?v=1.1.1"></script>

<script type="text/javascript">
$(document).ready(function () {
	mostrarOpciones();
});
function reproducir(){
	reproducir2(0);
}
</script>

<div id="allplayers" style="position:relative;width:100%;height:100%;background-color:black;overflow: hidden;">
	<div id="box">
	<div class="todo" id="playerSWF" name="playerSWF" style="display:block;">
		<object id="swfAP2" name="swfAP2" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="float:left;width:100%;height:100%;">
			<param name="wmode" value="opaque">
			<param name="movie" value="/reproductor2/player.swf?videoid=<?php echo "ID"; ?>">
			<!--[if !IE]>-->
			<object type="application/x-shockwave-flash" data="/reproductor2/player.swf?videoid=<?php echo "ID"; ?>" style="float:left;width:100%;height:100%;" wmode="transparent" id="swfAP3" name="swfAP3" >
			<!--<![endif]-->
				<div style="position:relative;width: 100%;">
					<div id="backimage" style="width: 100%;height: 100%;z-index:0;background-repeat:no-repeat;background-position: center center;display:inline-block;"></div>  	
					<img src="/reproductor2/images/playIcon.png" style="opacity:0.6;background-color:#000;cursor:pointer;border: solid 1px #ccc;border-radius: 4px;padding: 20px;color:#fff;position:absolute;left:45%;top:40%;" onclick="reproducir()">
					<span id="flash_warning">You do not have Flash installed, you should install it to ensure proper operation.</span>
				</div>
			<!--[if !IE]>-->
			</object>
			<!--<![endif]-->
		</object>
	</div>
	<div class="todo" id="nosources centered" style="text-align: center;">
			<div class="seccion_tit">No sources</div>
			<img src="/reproductor2/images/nosource.png" style="padding:15px;cursor:default;"/>
			<p>Sorry, no indexed sources for this title at this time.</p>
	</div>
	<iframe class="todo" id="playeriframe" style="text-align: center;width: 100%;height: 100%;">
	</iframe>
	<div id='waitlink' class="todo centered" style="top:50%;margin-top:-18px;">
		<div id='fadingBarsG'><div id='fadingBarsG_1' class='fadingBarsG'></div><div id='fadingBarsG_2' class='fadingBarsG'></div><div id='fadingBarsG_3' class='fadingBarsG'></div><div id='fadingBarsG_4' class='fadingBarsG'></div><div id='fadingBarsG_5' class='fadingBarsG'></div><div id='fadingBarsG_6' class='fadingBarsG'></div><div id='fadingBarsG_7' class='fadingBarsG'></div><div id='fadingBarsG_8' class='fadingBarsG'></div></div>
	</div>
	<div id="error" class="todo centered">
		<span class="fileError">The video is temporarily idle, wait a few minutes and try again.<br /><br />You can also try one of the other available servers.</span><br/ ><br/ >
	</div>
	<div id="errorborrado" class="todo centered">
		<span class="fileError">The video is not accessible, maybe it was already deleted or are downloading another file from the same server. <br /><br />You can try one of the other available servers.</span><br/ ><br/ >
	</div>
	<div id="wait" class="todo centered">
		<div style="text-align:center;color:white;"><br /><br />
		    <br />
			<img src="/reproductor2/images/logo.png" alt="" border="0" style="margin-top: 20px;" /><br /><br />
			<strong>
		    	Loading video... 
		    	<br><br>
		    	<span>
		    		If this message appears more than 60 seconds, you may need to install the required Java plug-in. You can do this from <a href="http://www.java.com/en/" target="_blank">HERE</a>
		   		<br><br></br>
		   		</span>
		   	</strong>
		</div>
	</div>
	<div id="waitswf" class="todo centered">
		<div style="text-align:center;color:white;">
			<br />
			<img src="/reproductor2/images/logo.png" alt="" border="0" style="margin-top: 20px;" /><br /><br />
		    <strong>
		    	Loading video...<br><br>
				<span>
					If this message appears more than 60 seconds, you may need to install the required Flash Player plug-in. You can do this from <a href="http://get.adobe.com/en/flashplayer/?no_redirect" target="_blank">HERE</a>
					<br><br></br>
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
		<input type="button" id="submitCaptcha" value="Send" style="color:#000;">
        </div>
        <div id="captchaForm3" class="todo centered">
		<div id="formText3">
		    Complete the following code&nbsp;&nbsp;
		</div>
		<img id="captchaImg3" src=""></img><br />
		<input type="text" name="captchaResponse3" id="captchaResponse3"><br />
		<input type="button" id="submitCaptcha3" value="Send" style="color:#000;margin-top:5px;" />
	</div>
	<div id='captchaFormS' class="todo centered" style="text-align: center; top: 20px;">
		
	</div>
	<div id="player_content" class="todo" style="text-align: center;">
		<div id="player" style="width:100%;">
		        <div id="flashplayer" style="position:absolute;top:0px;left:0px"></div>
		</div>
	</div>
	</div>
	<div id="applet"></div>
	<div style="clear:both;"></div>
	
	<div id="pestanacontenedor" class="pestanacontenedor"></div>
</div>

<style>#publi_return, #overPubli{display:none;}</style>
<div id="publi_return" style="visibility: hidden; position: absolute; z-index: 1010; width: 30px; height: 16px; left: 50%; margin-left: -15px; bottom: 50px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAAACXBIWXMAAAuIAAALiAHljilJAAAB7UlEQVR4nNXSS0/bQBiF4fFcbM94fAGJhCAUVYQKUcoCB3ZZNGyMSELthCQ1//j9V10khVZVhcRN6uJs5hvpGX1nRNu2Yhs+KKJtW/GICiE+JL/wD0V/x/8vOE1TqqpiPp9TVRV7e3tvCwdB8NdZt9tlMpmwXq8ZjUYsl0um0ymHh4fvB/f7fe5mM5q65qDXQwhBp9NhcntLU9ccHR0hpXw7WErJYDCgaRqux2OyLPvjnvee0WjEYrHg5OQEpdQrOw4ESitOz05p5g3lsCS2MWmacnNzw2KxoKoqOp0OURRRliX39/eUZfk6OLIRgQoQgXhMd7/LdDp96ni14ntdc3x8jLUWY8yz634WzndyTGQQUiCUoP+pz+zujrqp6R30tg/ZZzqbsfqx5svZGdY5lNFI/e91Pwv7zGMigw41g88DmnnD+HrbcSBQWqNDQ75T8G08pn144Ov5OZGN0aF5Oey8I81TLoYXLFdLhpdDYhtv1i4DlDHbaGziKC+HrNZrLq+ukFq/HI5dTJImJGny1LcUBEqioxAVGgKtkFo9rVdJhAw2efGvfqc8wqEz6FihogAVSUJniHxI5A2xD7FZhMtjktySFBZfONKdBF84XG5xWYzLNnNfOJLC4Qq7meWWpHD43YR01+N3E9q25SeGa+gRwrhSYwAAAABJRU5ErkJggg==); cursor: pointer; background-position: initial initial; background-repeat: no-repeat no-repeat;" onclick="javascript:showPubli()"></div>

<div id="overPubli" style="height:60px;width:468px;position:absolute;margin-left:-234px;left:50%;bottom:50px;z-index: 1010; display: none; visibility: hidden;background-color: #fff;">
		<div id="ad_cnt">
			<div id="ad_center" align="center" style="display:block; width:468px;height:60px;background-color:#FFFFFF;">
				<div id="ad_nuevo" style="display: block;">
					
				</div>
			</div>
		</div>
		<div id="countdiv" style="text-align:center;margin-top:0px;display: block; background:#998888;position: relative;">
			<div id="nv_progress" style="width:0%;height:11px;display:block;background:#990000;display: block;">
			</div>
			<div id="text_progress" style="position: absolute;color: #fff;bottom: -1px;font-size: 10px;margin-left: 10px;letter-spacing: 1px; font-family: sans-serif;"></div>
		</div>
		<div id="ad_close" onclick="javascript:hidePubli();return false;" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAwklEQVR4nI2SMQoDIRBFvdiGkLNsIKnmBHsD1wsoFm7vtiNY5ioKNlvbbYohsopgfvUH3sg8kE23B+frZxTO12m6M2O2IUoxZmPUwiiEVTQiImIhrmNLIyIAAAARzVjRMUalFPwipSxdKRVjrOiUUs75ulDQnHNKqb2EFoQQBRVCENq39N43b3vvB5YAsCxL6R3LEEIx01qf56m1Lsb9S6SUpHUcB0kT2qfJlbRKqWhr9z//ibU7m+e3c26IOufm5+sLP4PrV5n2MKAAAAAASUVORK5CYII=); position:absolute; z-index:999; right:3px;top:3px;cursor:pointer;height:15px;width:15px;display: block;">
		</div>
</div>


</body>
</html>