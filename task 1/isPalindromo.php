<?php
/** 
* Função para validar se uma string é um palíndromo
* @param String $str 
* @return boolean
*/
function isPalindromo($str) {
    // Remover espaços em branco, caracteres especiais e acentos
    $str = preg_replace('/[^A-Za-z0-9]/', '', mb_strtolower($str, 'UTF-8'));

    // Inverter a string
    $reversedStr = strrev($str);

    // Verificar se a string original e a invertida são iguais
    return $str === $reversedStr;
}