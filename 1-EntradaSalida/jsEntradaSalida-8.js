/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Dividendo ;
    var Divisor ; 
    var Resultado ; 

    Dividendo = parseInt( document.getElementById("numeroDividendo").value ) ; 
    Divisor = parseInt( document.getElementById("numeroDivisor").value ) ;

    Resultado = Dividendo % Divisor 

    alert("El resto es " + Resultado )
}
