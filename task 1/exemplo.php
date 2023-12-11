<?php
require './isPalindromo.php';

$str = getopt('s:') ? getopt('s:')['s'] : "Ame a ema";
$resultado = (isPalindromo($str) ? "true" : "false");
echo $resultado . "\n";