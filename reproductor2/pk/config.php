<?php

$key="s4r34fFS4324ffaL";


function strToHex($string)
{
    $hex='';
    for ($i=0; $i < strlen($string); $i++)
    {
        $hex .= dechex(ord($string[$i]));
    }
    return $hex;
}
function hexToStr($hex)
{
    $string='';
    for ($i=0; $i < strlen($hex)-1; $i+=2)
    {
        $string .= chr(hexdec($hex[$i].$hex[$i+1]));
    }
    return $string;
}
function Decrypt($sValue, $sSecretKey)
{
    return rtrim(
        mcrypt_decrypt(
            MCRYPT_RIJNDAEL_256, 
            $sSecretKey, 
            base64_decode(hexToStr($sValue)), 
            MCRYPT_MODE_ECB,
            mcrypt_create_iv(
                mcrypt_get_iv_size(
                    MCRYPT_RIJNDAEL_256,
                    MCRYPT_MODE_ECB
                ), 
                MCRYPT_RAND
            )
        ), "\0"
    );
}
function Encrypt($sValue, $sSecretKey) {
    return strToHex( rtrim(
        base64_encode(
            mcrypt_encrypt(
                MCRYPT_RIJNDAEL_256,
                $sSecretKey, $sValue, 
                MCRYPT_MODE_ECB, 
                mcrypt_create_iv(
                    mcrypt_get_iv_size(
                        MCRYPT_RIJNDAEL_256, 
                        MCRYPT_MODE_ECB
                    ), 
                    MCRYPT_RAND)
                )
            ), "\0"
        ));
}

function encAES($content){
	$key = '987s975A123s135d876wH784as246rdw'; // 32 characters
	$iv  = 'ZAN163idjLSQ5Ld5'; // 16 characters
	$plain = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $content, MCRYPT_MODE_CBC, $iv); // encrypt with AES-128
	return "enc" . base64_encode($plain);
}

?>
