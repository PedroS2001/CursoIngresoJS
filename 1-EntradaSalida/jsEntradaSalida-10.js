/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
            //Primero coloco todas las variables
	var Importe ;
    var Descuento ; 
    var Resultado ;

            //busco de donde viene el importe
    Importe = parseFloat ( document.getElementById("importe").value ) ; 

            //calculo el descuento (25%)
    Descuento = Importe *25/100 ;

            //Calculo el resultado 
    Resultado = Importe - Descuento ;

            //Muestro el Resultado en la caja de textos "resultado"
    document.getElementById("resultado").value = Resultado  ;  


}
