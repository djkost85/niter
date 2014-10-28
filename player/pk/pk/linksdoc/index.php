<head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript">
    function getLink(){
            $('#boton').html("Obteniendo..");
            $.ajax({
                          cache:false,
                          type: 'GET',
                          url: "getCompatibleLink.php",
                          data: "url="+escape($('#link').attr("value")),
                          success:  function(url){
                              $('#link2').attr("value",url);
                              $('#boton').html("Get link!");
                              var suburl = $('#subs').attr("value");
                              $('#test').attr("src","../../doc.php?url=" + encodeURIComponent(url) + "&suburl=" + encodeURIComponent(suburl));
                          },
                          beforeSend:function(){},
                          error:function(objXMLHttpRequest){}
            });
    }
    </script>
</head>
<body>

    Subtitulos url (Opcional): <input type="text" name="link" id="subs" style="width:48%" /> <br />
    Docs URL: <input type="text" name="link" id="link" style="width:48%" /> Ej: https://docs.google.com/file/d/0B6iD9TJzpcL5bmNmRTc5MjZURGM/preview<br />
    <button id="boton" onclick="getLink();" style="width:10%">Get link!</button> <br />
    <input type="text" name="link2" id="link2" style="width:38%"/><br />
    Prueba:<br />
    <iframe id="test" style="width:100%;height:80%" src="" > </iframe>
</body>
