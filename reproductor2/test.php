<html>
<head>
</head>
<body>
<?php

if (!empty($_GET)){
    /*$parameter = $_GET;
    $firstTime = true;
    foreach($parameter as $param => $value){
        if ($firstTime) {
            $newUrl .= "?" . $param . "=" . $value;
            $firstTime = false;
        } else {
            $newUrl .= "&" . $param . "=" . $value;
        }
    }*/
    ?>
    <iframe id="myFrame" name="myFrame" width="962" height="482" src=""></iframe>
    <script type="text/javascript">
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).replace(/amp;/gi, '');
        window.document.myFrame.location = "play.php?" + hashes;
    </script>
    
    <?php
}else{
    $newUrl = "play.php?doc=file/d/0B6iD9TJzpcL5bmNmRTc5MjZURGM/preview&pic=data/entry/api/user/104227551250220639954/albumid/5533565976723224801/photoid/5533566152146942530?alt=json%26authkey=Gv1sRgCKyV65vi1tGh-wE&id=14974&sub=,ES&sub_pre=ES&backimg=";
?>
<iframe id="myFrame" name="myFrame" width="800" height="500" src="<?=$newUrl?>"></iframe>

<?php
}
?>
</body>
</html>
