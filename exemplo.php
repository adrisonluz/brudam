<?php
require './isPalindromo.php';

$str = getopt('s:') ? getopt('s:')['s'] : "Ame a ema";
$resultado = isPalindromo($str);
echo $resultado;