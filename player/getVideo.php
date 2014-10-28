<?php
function desencriptar($info_a_desencriptar) {
        $info_desencriptada = "";
        $abc1 = "abcdefghijklmnopqrstuvwxyz01234ABCDEFGHIJKLMNOPQRSTUVWXYZ56789";
        $len_abc = strlen($abc1);
        $cambio = false;
        for ($i = 0; $i < strlen($info_a_desencriptar); $i++) {
            for ($j = 0; $j < $len_abc; $j++) {
                if ($info_a_desencriptar[$i] == $abc1[$j]) {
                    $cambio = true;
                    if ( $j < 3 ) {
                        $info_desencriptada = $info_desencriptada.$abc1[$j + ( $len_abc - 3 )];
                    } else {
                        $info_desencriptada = $info_desencriptada.$abc1[$j - 3];
                    }
                    $j = $len_abc;
                }
            }
            if (!$cambio) {
                $info_desencriptada = $info_desencriptada.$info_a_desencriptar[$i];
            }
            $cambio = false;
        }
        $info_a_desencriptar = $info_desencriptada;
        return $info_a_desencriptar;
}
//$link = desencriptar($_GET['v']);
$link = $_GET['v'];
if (false === strpos($link, '://')) {
    $link = 'http://'.$link;
}
header('Location: '.$link);
?>
