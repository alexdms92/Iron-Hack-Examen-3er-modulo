//@ts-check
/**
 * Esta funcion toma dos parametros pero devuelve solamente el segundo
 * @param {number} lado1 es el primer parametro
 * @param {number} lado2 es el segundoetro
 * @return {string} devuelve una confirmacion en caso de que ambos parametros compartan valor y tipo y una negacion si no son iguales
*/

function esCuadrado(lado1, lado2)
{
if(lado1 === lado2)
{
return “Es un cuadrado.” //ERROR: comillas curvas " "; se deben usar o las comillas rectas " " o las simples ' '
}
}else{  //ERROR: se cierra la funcion y se excluye al else de la misma, por lo que dara error
return “No es un cuadrado.” //ERROR: comillas curvas " "; se deben usar o las comillas rectas " " o las simples ' '
}