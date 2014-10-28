<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript">
    function replaceAll(find, replace, str) {
		try {
		    return str.replace(new RegExp(find, 'g'), replace);
		} catch (e) {}
	}
    function getLink(){
            $('#boton').html("Obteniendo..");
            $.ajax({
                          cache:false,
                          type: 'POST',
                          url: "getCompatibleLink.php",
                          data: {"url" : $('#link').attr("value")},
                          success:  function(url){
                              $('#link2').attr("value",url);
                              $('#link3').attr("value","pic="+replaceAll("&","%26",url.replace('https://picasaweb.google.com/','')));
                              $('#boton').html("Get link!");
                              var suburl = $('#subs').attr("value");
                              $('#test').attr("src","../../../play.php?pic=" + replaceAll("&","%26",url.replace('https://picasaweb.google.com/',''))  + "&suburl=" + encodeURIComponent(suburl));
                          },
                          beforeSend:function(){},
                          error:function(objXMLHttpRequest){}
            });
    }
    </script>
</head>
<body>
    Subtitulos url (Opcional): <input type="text" name="link" id="subs" style="width:48%" /> <br />
    Pics URL: <input type="text" name="link" id="link" style="width:48%" /> Ej: https://picasaweb.google.com/data/feed/api/user/104227551250220639954/albumid/5533565976723224801/photoid/5533566152146942530?alt=json&authkey=Gv1sRgCKyV65vi1tGh-wE
<br />
    <button id="boton" onclick="getLink();" style="width:10%">Get link!</button> <br />
    <input type="text" name="link2" id="link2" style="width:38%"/><br />
    Para el player:<input type="text" name="link3" id="link3" style="width:38%"/><br />
    Prueba:<br />
    <iframe id="test" style="width:100%;height:80%" src="" > </iframe>
</body>

